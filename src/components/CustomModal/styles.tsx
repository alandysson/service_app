import styled from "styled-components/native";
import { TextStyled } from "../../styles/global";
import { theme } from "../../styles/theme";
import { VARIANT } from "../../types";

interface IProps {
   variant?: VARIANT
}

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

export const TitleModal = styled(TextStyled)`
   font-size: 20px;
   padding: 6px 0px;
`

export const TextExit = styled(TextStyled)`
   background-color: ${theme.color.primaryDark};
   color: ${theme.color.fontWhite};
   border-radius: 3px;
   padding: 6px;
   height: 30px;
   font-size: 14px;
`