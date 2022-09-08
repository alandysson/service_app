import styled from "styled-components/native";
import { TextStyled } from "../../styles/global";
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

export const TextButton = styled(TextStyled) <IProps>`
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

export const Separate = styled.View`
   border: 0.5px solid ${theme.color.primary};
`

export const TextTitleCheckBox = styled(TextStyled)`
   padding: 6px 0px;
`

export const RowAlignCenter = styled.View`
   flex-direction: row;
   align-items: center;
   margin-bottom: 20px;
`

export const TextDescription = styled(TextStyled) <IProps>`
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
export const ExamImage = styled.Image`
   width: 45px;
   height: 45px;
`