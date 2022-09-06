import styled from "styled-components/native";
import { theme } from "../../styles/theme";

type IButtonContainer = {
   isAdmin?: boolean
}

export const Input = styled.TextInput`
   font-family: "Ubuntu-Regular";
   border: 1px solid ${theme.color.primary};
   background: #fff;
   border-radius: 3px;
   height: 38px;
   margin: 15px 10px;
   padding: 10px;
   margin-bottom: 20px;
   font-size: 15px;
`

export const ButtonContainer = styled.View<IButtonContainer>`
   ${props => {
      if (props.isAdmin) {
         return `
            flex-direction: row;
         `
      } else {
         return `
            align-items: center;
         `
      }
   }
   }
   justify-content: space-between;
   margin-bottom: 15px;
   padding: 9px;
   /* align-items: center; */
`

export const Search = styled.Image`
   width: 20px;
   height: 20px;
   position: absolute;
   right: 30px;
   top: 24px;
`