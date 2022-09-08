import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { Alert, SafeAreaView, Text, ToastAndroid, View } from "react-native"
import { Button } from "../../components/Button"
import { fetchToDo } from "../../components/service"
import { HomeScreenNavigationProp } from "../../navigation/types"
import { ButtonContainer, Container, Input } from "./styles"

export const NewDoctor = () => {
   const [newDoctor, setNewDoctor] = useState<string>("")
   const navigation = useNavigation<HomeScreenNavigationProp>();

   async function addNewDoctor() {
      await fetchToDo("/doctors", {
         method: 'POST',
         headers: { 'Content-Type': 'application/json;charset=utf-8' },
         body: JSON.stringify({ name: newDoctor })
      }).then(() => {
         ToastAndroid.show('Médico adicionado a aplicação!', 2000)
         navigation.goBack()
      }).catch((error) => Alert.alert(error));
   }
   return <SafeAreaView style={{ flex: 1 }}>
      <Container>
         <Input
            placeholder="Adicione o Nome e Sobrenome do Médico"
            onChangeText={(text) => setNewDoctor(text)}
         />
         <ButtonContainer>
            <Button
               onPress={() => addNewDoctor()}
               title="Cadastrar"
               disabled={newDoctor.length < 5}
            />
         </ButtonContainer>
      </Container>
   </SafeAreaView>
}