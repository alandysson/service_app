import React, { useEffect, useState } from "react"
import { Alert, FlatList, Modal, Pressable, Text, View, ActivityIndicator, Image, TouchableOpacity } from "react-native"
import { LittleBtn, ModalContainer, ModalView, Row, RowAlignCenter, Separate, TextButton, TextDescription, TextExit, TextTitleCheckBox, TitleModal } from "./styles"
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
      <Card style={{
         backgroundColor: item.exams?.total === 2 ? "rgba(0,0,0,0.5)" : theme.color.fontWhite
      }}>
         <Row>
            <View>
               <TextDescription variant={VARIANT.SECONDARY}>Paciente: {item.patient}</TextDescription>
               <TextDescription variant={VARIANT.PRIMARY}>Médico: {item.doctor}</TextDescription>
            </View>
            {item.exams?.total === 2 &&
               <View style={{ position: "absolute", right: 100, top: 20 }}>
                  <LittleBtn onPress={() => {
                     finishServiceItem(item)
                  }}>
                     <TextButton>Concluir</TextButton>
                  </LittleBtn>
               </View>
            }
            <View style={{ justifyContent: 'center' }}>
               <TouchableOpacity onPress={() => {
                  setModalVisible(true)
                  setNamePatienteModal(item.patient)
                  setCurrentItem(item)
               }}>
                  <Image
                     source={require("../../assets/images/exam.png")}
                     style={{
                        width: 45,
                        height: 45,
                        tintColor: theme.color.primaryDark,
                     }}
                  />
               </TouchableOpacity>
            </View>
         </Row>
      </Card>
   )
   function changeCurrentItem(value: boolean, name: string) {
      let countTotalPreExams = currentItem.exams?.total + 1
      const cItem = {
         ...currentItem, exams: {
            ...currentItem.exams,
            [name]: value,
            total: countTotalPreExams
         }
      }
      setCurrentItem(cItem)
      data?.map((value, index) => {
         if (value.id === cItem.id) {
            data[index] = cItem
         }
      })
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
                     <TitleModal>{namePatientModal}</TitleModal>
                     <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                     >
                        <TextExit>X</TextExit>
                     </Pressable>
                  </View>
                  <Separate />
                  <TextTitleCheckBox>Pré-exames</TextTitleCheckBox>
                  <RowAlignCenter>
                     {cheboxItem(item.exams?.refration !== undefined && item.exams.refration, 'refration')}
                     <Text>Refração</Text>

                     {cheboxItem(item.exams?.tono !== undefined && item.exams.tono, 'tono')}
                     <Text>Tonometria</Text>
                  </RowAlignCenter>
                  <Separate />
                  <TextTitleCheckBox>Colírios</TextTitleCheckBox>
                  <RowAlignCenter>
                     {cheboxItem(item.eyedrop1, 'eyedrop1')}
                     <Text>1</Text>
                     {cheboxItem(item.eyedrop2, 'eyedrop2')}
                     <Text>2</Text>
                     {cheboxItem(item.eyedrop3, 'eyedrop3')}
                     <Text>3</Text>
                  </RowAlignCenter>
               </ModalView>
            </ModalContainer>
         </Modal>
      </ModalContainer>
   )
   function finishServiceItem(item: ItemProps) {
      setData(data?.filter(function (value) {
         return value.id !== item.id
      }))
   }
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