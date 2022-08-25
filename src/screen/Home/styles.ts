import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Input = styled.TextInput`
   border: 1px solid ${theme.color.primary};
   background: #fff;
   border-radius: 3px;
   height: 38px;
   margin: 15px 10px;
   padding: 10px;
   margin-bottom: 20px;
   font-size: 15px;
`

export const ButtonContainer = styled.View`
   margin-bottom: 15px;
   justify-content: flex-end;
   align-items: center;
`

export const Search = styled.Image`
   width: 20px;
   height: 20px;
   position: absolute;
   right: 30px;
   top: 24px;
`