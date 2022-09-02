import styled from "styled-components/native";
import { theme } from "../../styles/theme";
import { VARIANT } from "../../types";
interface IProps {
   variant?: VARIANT
}

export const Row = styled.View`
   flex-direction: row;
   justify-content: space-between;
   padding: 5px;
`

export const LittleBtn = styled.TouchableOpacity<IProps>`
   height: 30px;
   justify-content: center;
   align-items: center;
   ${props => {
      switch (props.variant) {
         case VARIANT.SECONDARY:
            return `
          background-color: ${theme.color.gray};
        `;
         case VARIANT.PRIMARY:
         default:
            return `
          background-color: ${theme.color.primaryDark};
        `;
      }
   }}
   border-radius: 3px;
   border: 1px solid ${theme.color.primary};
   height: 25px;
   width: 100px;
`

export const TextButton = styled.Text<IProps>`
      ${props => {
      if (props.variant == VARIANT.SECONDARY) {
         return `
          color: ${theme.color.primary};
        `
      } else {
         return `
          color: ${theme.color.fontWhite};
        `
      }
   }}
`

export const ModalContainer = styled.View<IProps>`
   flex: 1;
   background-color: #f3f3f3; // i dont know why but put color.gray get different color
   align-items: center;
   justify-content: center;
   ${props => {
      if (props.variant == VARIANT.SECONDARY) {
         return `
          background-color: rgba(0,0,0,0.5);
        `
      }
   }}
`

export const ModalView = styled.View`
   width: 320px;
   background-color: #fff;
   border-radius: 3px;
   padding: 8px;
`

export const Separate = styled.View`
   border: 0.5px solid ${theme.color.primary};
`

export const TextExit = styled.Text`
   background-color: ${theme.color.primaryDark};
   color: ${theme.color.fontWhite};
   border-radius: 3px;
   padding: 6px;
   height: 30px;
   font-size: 14px;
`
export const TitleModal = styled.Text`
   font-size: 20px;
   padding: 6px 0px;
`
export const TextTitleCheckBox = styled.Text`
   padding: 6px 0px;
`

export const RowAlignCenter = styled.View`
   flex-direction: row;
   align-items: center;
   margin-bottom: 20px;
`

export const TextDescription = styled.Text<IProps>`
   padding: 3px;
   ${props => {
      if (props.variant == VARIANT.SECONDARY) {
         return `
          color: ${theme.color.grayDark};
        `
      } else {
         return `
          color: ${theme.color.primaryDark};
        `
      }
   }}
`