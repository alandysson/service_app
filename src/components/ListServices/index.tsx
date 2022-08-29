import React, { useEffect, useState } from "react"
import { Alert, FlatList, Modal, Pressable, Text, View } from "react-native"
import { LittleBtn, ModalContainer, ModalView, Row, Separate, TextButton, TextExit } from "./styles"
import { Card } from "../../styles/global"
import { theme } from "../../styles/theme"
import CheckBox from '@react-native-community/checkbox';

enum VARIANT {
   PRIMARY,
   SECONDARY
}

type ItemProps = {
   serviceCod: string,
   patient: string,
   doctor: string,
   refration: boolean,
   tono: boolean,
   eyedrop1: boolean,
   eyedrop2: boolean,
   eyedrop3: boolean
}

type ServiceProps = {
   item: ItemProps,
}

const staticalData = [
   {
      serviceCod: '1', patient: 'Alan', doctor: 'Joao', refration: false,
      tono: false,
      eyedrop1: false,
      eyedrop2: false,
      eyedrop3: false
   },
   {
      serviceCod: '2', patient: 'James', doctor: 'Lebron', refration: false,
      tono: false,
      eyedrop1: false,
      eyedrop2: false,
      eyedrop3: false
   },
   // { serviceCod: '3', patient: 'Ciçu', doctor: 'Tonho' },
   // { serviceCod: '4', patient: 'Xuxa', doctor: 'Paulo' },
   // { serviceCod: '5', patient: 'Ximbau', doctor: 'Lebron' }
]
export const ListServices = () => {
   const [data, setData] = useState<Array<ItemProps>>();
   const [modalVisible, setModalVisible] = useState(false);
   const [currentItem, setCurrentItem] = useState<ItemProps>({} as ItemProps);
   const [namePatientModal, setNamePatienteModal] = useState<string>("");

   const renderItem = ({ item }: ServiceProps) => (
      <>
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
         return value.serviceCod != currentItem.serviceCod
      })
      filteredCurrentItem?.push(cItem)
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
                     {cheboxItem(item.refration, 'refration')}
                     <Text>Refração</Text>

                     {cheboxItem(item.tono, 'tono')}
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
   useEffect(() => {
      setData(staticalData)
   }, [])
   return (
      <>
         <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.serviceCod}
         />
         {showModal(namePatientModal, currentItem)}
      </>
   )
}