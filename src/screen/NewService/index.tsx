import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, ToastAndroid, View } from "react-native";
import { Picker } from '@react-native-picker/picker'
import { Border, Container, Input } from './style';
import { Button } from '../../components/Button';
import { fetchToDo } from '../../components/service';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';

interface IDoctor {
   id: string,
   name: string
}
export default function PatientForm() {
   const navigation = useNavigation<HomeScreenNavigationProp>();

   const [newService, setNewService] = useState({
      patient: "",
      doctor: "",
      exams: {
         refration: false,
         tono: false,
         total: 0
      },
      eyedrop1: false,
      eyedrop2: false,
      eyedrop3: false
   })
   const [doctors, setDoctors] = useState<Array<IDoctor>>()
   async function addNewPatient() {
      await fetchToDo("/data", {
         method: 'POST',
         headers: { 'Content-Type': 'application/json;charset=utf-8' },
         body: JSON.stringify(newService)
      }).then(() => {
         ToastAndroid.show('Paciente adicionado a lista!', 2000)
         navigation.goBack()
      }).catch((error) => Alert.alert(error));
   }
   async function requestDoctors() {
      await fetchToDo<Array<IDoctor>>("/doctors", {
         method: 'GET',
      }).then((response) => setDoctors(response))
         .catch((error) => Alert.alert(error));
   }
   useEffect(() => {
      requestDoctors()
   }, [])
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <Container>
            <Input
               placeholder='Nome do Paciente'
               onChangeText={(text) => setNewService({ ...newService, patient: text })}
            />
            <Border>
               <Picker
                  dropdownIconColor={"#99CFFF"}
                  style={{ color: "#BCBCBC", }}
                  itemStyle={{ fontFamily: 'Ubuntu-Regular', fontSize: 30 }}
                  selectedValue={newService.doctor}
                  onValueChange={(itemValue, _) =>
                     setNewService({ ...newService, doctor: itemValue })
                  }>
                  <Picker.Item label="Selecione o Médico" value="" />
                  {doctors?.map((doctor) => (
                     <Picker.Item key={doctor.id} label={doctor.name} value={doctor.name} />
                  ))}
               </Picker>
            </Border>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
               <Button
                  disabled={(newService.patient === "" || newService.doctor === "")}
                  onPress={addNewPatient} title="Cadastrar"
               />
            </View>
         </Container>
      </SafeAreaView>
   )
}