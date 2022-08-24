import React, { useState } from "react"
import { Alert, FlatList, Modal, Pressable, Text, View } from "react-native"
import { LittleBtn, ModalContainer, ModalView, Row, Separate, TextButton, TextExit } from "./styles"
import { Card } from "../../styles/global"
import { theme } from "../../styles/theme"

enum VARIANT {
   PRIMARY,
   SECONDARY
}

type ServiceProps = {
   serviceCod: string,
   patient: string,
   doctor: string
}

type ItemProps = {
   item: ServiceProps,
}

const staticalData = [
   { serviceCod: '1', patient: 'Alan', doctor: 'Joao' },
   { serviceCod: '2', patient: 'James', doctor: 'Lebron' },
   { serviceCod: '3', patient: 'Ciçu', doctor: 'Tonho' },
   { serviceCod: '4', patient: 'Xuxa', doctor: 'Paulo' },
   { serviceCod: '5', patient: 'Ximbau', doctor: 'Lebron' }
]
export const ListServices = () => {
   const [modalVisible, setModalVisible] = useState(true);
   const renderItem = ({ item }: ItemProps) => (
      <Card>
         <Row>
            <Text style={{ color: theme.color.grayDark }}>Paciente: {item.patient}</Text>
            <LittleBtn onPress={() => setModalVisible(true)} variant={VARIANT.PRIMARY}>
               <TextButton>Maquinas</TextButton>
            </LittleBtn>
         </Row>
         <Row>
            <Text style={{ color: theme.color.primaryDark }}>Médico: {item.doctor}</Text>
            <LittleBtn onPress={() => setModalVisible(true)} variant={VARIANT.SECONDARY}>
               <TextButton variant={VARIANT.SECONDARY}>Colirios</TextButton>
            </LittleBtn>
         </Row>
      </Card>
   )

   const showModal = () => (
      <ModalContainer>
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
               Alert.alert("Modal has been closed.");
               setModalVisible(!modalVisible);
            }}
         >
            <ModalContainer>
               <ModalView>
                  <Text style={{ fontSize: 20, paddingTop: 6, paddingBottom: 6 }}>Alan Rolim</Text>
                  <Separate />
                  <Pressable
                     onPress={() => setModalVisible(!modalVisible)}
                  >
                     <Text style={{ paddingTop: 6, paddingBottom: 6 }}>Pré-exames</Text>
                     <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text></Text>
                        <TextExit>Fechar X</TextExit>
                     </View>
                  </Pressable>
               </ModalView>
            </ModalContainer>
         </Modal>
      </ModalContainer>
   )
   return (
      <>
         {showModal()}
         <FlatList
            data={staticalData}
            renderItem={renderItem}
            keyExtractor={item => item.serviceCod}
         />
      </>
   )
}