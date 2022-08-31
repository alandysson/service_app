import React, { useEffect, useState } from "react"
import { Alert, FlatList, Modal, Pressable, Text, View, ActivityIndicator } from "react-native"
import { LittleBtn, ModalContainer, ModalView, Row, Separate, TextButton, TextExit } from "./styles"
import { Card } from "../../styles/global"
import { theme } from "../../styles/theme"
import CheckBox from '@react-native-community/checkbox';
import { request } from "../service/api"
import { fetchToDo } from "../service"
import { ItemProps, VARIANT } from "../../types"
import { useIsFocused } from "@react-navigation/native"

type ServiceProps = {
   item: ItemProps,
}

export const ListServices = () => {
   const [data, setData] = useState<Array<ItemProps>>();
   const [currentItem, setCurrentItem] = useState<ItemProps>({} as ItemProps);
   const [modalVisible, setModalVisible] = useState(false);
   const [namePatientModal, setNamePatienteModal] = useState<string>("");
   const [load, setLoad] = useState<boolean>(true);
   const isFocused = useIsFocused();
   const renderItem = ({ item }: ServiceProps) => (
      <>
         {/* {Object.values(item.exams).map(value => console.log(value))} */}
         {/* <View style={{ position: 'absolute', right: 130 }}>
            <LittleBtn>
               <TextButton>Concluir</TextButton>
            </LittleBtn>
         </View> */}
         <Card>
            <Row>
               <View>
                  <Text style={{ color: theme.color.grayDark, padding: 3 }}>Paciente: {item.patient}</Text>
                  <Text style={{ color: theme.color.primaryDark, padding: 3 }}>Médico: {item.doctor}</Text>
               </View>
               <View style={{ justifyContent: 'center' }}>
                  <LittleBtn onPress={() => {
                     setModalVisible(true)
                     setNamePatienteModal(item.patient)
                     setCurrentItem(item)
                  }} variant={VARIANT.PRIMARY}>
                     <TextButton>Maquinas</TextButton>
                  </LittleBtn>
               </View>
            </Row>
         </Card>
      </>
   )
   function changeCurrentItem(value: boolean, name: string) {
      const cItem = { ...currentItem, [name]: value }
      setCurrentItem(cItem)
      const filteredCurrentItem = data?.filter(function (value) {
         return value.id != currentItem.id
      })
      filteredCurrentItem?.push(cItem)
      filteredCurrentItem?.reverse()
      setData(filteredCurrentItem)
   }
   const cheboxItem = (value: boolean, name: string) => (
      <CheckBox
         disabled={false}
         value={value}
         onValueChange={(newValue) => changeCurrentItem(newValue, name)}
         tintColors={{ true: theme.color.primaryDark }}
      />
   )
   const showModal = (namePatientModal: string, item: ItemProps) => (
      <ModalContainer>
         <Modal
            animationType="slide"
            transparent={true}
            presentationStyle={"overFullScreen"}
            visible={modalVisible}
            onRequestClose={() => {
               Alert.alert("Modal has been closed.");
               setModalVisible(!modalVisible);
            }}
         >
            <ModalContainer variant={VARIANT.SECONDARY}>
               <ModalView>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                     <Text style={{ fontSize: 20, paddingTop: 6, paddingBottom: 6 }}>{namePatientModal}</Text>
                     <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                     >
                        <TextExit>X</TextExit>
                     </Pressable>
                  </View>
                  <Separate />
                  <Text style={{ paddingTop: 6, paddingBottom: 6 }}>Pré-exames</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                     {cheboxItem(item.exams?.refration, 'refration')}
                     <Text>Refração</Text>

                     {cheboxItem(item.exams?.tono, 'tono')}
                     <Text>Tonometria</Text>
                  </View>
                  <Separate />
                  <Text style={{ paddingTop: 6, paddingBottom: 6 }}>Colírios</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                     {cheboxItem(item.eyedrop1, 'eyedrop1')}
                     <Text>1</Text>
                     {cheboxItem(item.eyedrop2, 'eyedrop2')}
                     <Text>2</Text>
                     {cheboxItem(item.eyedrop3, 'eyedrop3')}
                     <Text>3</Text>
                  </View>
               </ModalView>
            </ModalContainer>
         </Modal>
      </ModalContainer>
   )
   async function requestData() {
      await fetchToDo<Array<ItemProps>>("/data", { method: 'GET' })
         .then((toDoItem) => {
            setData(toDoItem);
            setLoad(false)
         }).catch((error) => Alert.alert(error));
   }
   useEffect(() => {
      if (isFocused) {
         requestData()
      }
   }, [isFocused])
   return load ? <ActivityIndicator size="large" color={theme.color.primary} /> : (
      <>
         <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id === null ? "0" : item.id}
         />
         {showModal(namePatientModal, currentItem)}
      </>
   )
}