import React, { useState } from 'react'
import { SafeAreaView, View } from "react-native";
import { Picker } from '@react-native-picker/picker'
import { Border, Container, Input } from './style';
import { Button } from '../../components/Button';

export default function PatientForm() {
   const [newService, setNewService] = useState({
      patient: "",
      doctor: "",
   })
   function addNewPatient() {
      console.log(newService.patient === "" || newService.doctor === "")
   }
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
                  style={{ color: "#BCBCBC" }}
                  selectedValue={newService.doctor}
                  onValueChange={(itemValue, _) =>
                     setNewService({ ...newService, doctor: itemValue })
                  }>
                  <Picker.Item label="Selecione o Médico" value="" />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
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