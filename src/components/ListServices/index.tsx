import React, { useEffect, useState } from "react"
import { Alert, FlatList, View, ActivityIndicator, TouchableOpacity } from "react-native"
import { ExamImage, LittleBtn, Row, RowAlignCenter, Separate, TextButton, TextDescription, TextTitleCheckBox } from "./styles"
import { Card } from "../../styles/global"
import { theme } from "../../styles/theme"
import { request } from "../service/api"
import { fetchToDo } from "../service"
import { ItemProps, VARIANT } from "../../types"
import { useIsFocused } from "@react-navigation/native"
import { CustomModal } from "../CustomModal"
import { CustomCheckBox } from "../CustomCheckBox"

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

   async function requestData() {
      await fetchToDo<Array<ItemProps>>("/data", { method: 'GET' })
         .then((toDoItem) => {
            setData(toDoItem);
            setLoad(false)
         }).catch((error) => Alert.alert(error));
   }

   function removeSelectedItemFromArray(item: ItemProps) {
      setData(data?.filter(function (value) {
         return value.id !== item.id
      }))
   }

   const alertToFinishService = (item: ItemProps) => (
      Alert.alert(
         "O Paciente foi atendido?",
         "Ao clicar em Sim ele será removido da lista",
         [
            {
               text: "Não",
               style: "cancel"
            },
            { text: "Sim", onPress: () => removeSelectedItemFromArray(item) }
         ]
      )
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
                  <LittleBtn onPress={() => alertToFinishService(item)}>
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
                  <ExamImage
                     source={require("../../assets/images/exam.png")}
                     style={{ tintColor: theme.color.primaryDark }}
                  />
               </TouchableOpacity>
            </View>
         </Row>
      </Card>
   )

   const showPreExamModal = (namePatientModal: string, item: ItemProps) => (
      <CustomModal
         visible={modalVisible}
         title={namePatientModal}
         onClose={() => setModalVisible(!modalVisible)}
      >
         <Separate />
         <TextTitleCheckBox>Pré-exames</TextTitleCheckBox>
         <RowAlignCenter>
            <CustomCheckBox
               itemValue={item.exams?.refration!}
               changeValue={(newValue) => changeCurrentItem(newValue, 'refration')}
               itemTitle={'Refração'}
            />
            <CustomCheckBox
               itemValue={item.exams?.tono!}
               changeValue={(newValue) => changeCurrentItem(newValue, 'tono')}
               itemTitle={'Tonometria'}
            />
         </RowAlignCenter>
         <Separate />
         <TextTitleCheckBox>Colírios</TextTitleCheckBox>
         <RowAlignCenter>
            <CustomCheckBox
               itemValue={item.eyedrop1}
               changeValue={(newValue) => changeCurrentItem(newValue, 'eyedrop1')}
               itemTitle={'1'}
            />
            <CustomCheckBox
               itemValue={item.eyedrop1}
               changeValue={(newValue) => changeCurrentItem(newValue, 'eyedrop2')}
               itemTitle={'2'}
            />
            <CustomCheckBox
               itemValue={item.eyedrop1}
               changeValue={(newValue) => changeCurrentItem(newValue, 'eyedrop3')}
               itemTitle={'3'}
            />
         </RowAlignCenter>
      </CustomModal>
   )

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
            keyExtractor={(item) => item.id || "0"}
         />
         {showPreExamModal(namePatientModal, currentItem)}
      </>
   )
}