import React, { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { VARIANT } from "../../types";
import { ModalContainer, ModalView, TextExit, TitleModal } from "./styles";

type ModalProps = {
   visible: boolean;
   title?: string;
   children?: JSX.Element | JSX.Element[],
   onClose: () => void
}

export const CustomModal = ({ visible, children, title, onClose }: ModalProps) => {
   return <Modal
      animationType="slide"
      transparent={true}
      presentationStyle={"overFullScreen"}
      visible={visible}
      onRequestClose={onClose}
   >
      <ModalContainer variant={VARIANT.SECONDARY}>
         <ModalView>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
               <TitleModal>{title}</TitleModal>
               <Pressable
                  onPress={onClose}
               >
                  <TextExit>X</TextExit>
               </Pressable>
            </View>
            {children}
         </ModalView>
      </ModalContainer>

   </Modal>
}