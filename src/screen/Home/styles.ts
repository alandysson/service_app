import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Input = styled.TextInput`
   border: 1px solid ${theme.color.primary};
   background: #fff;
   border-radius: 3px;
   height: 38px;
   margin: 30px 10px;
   padding: 10px;
   margin-bottom: 20px;
   font-size: 15px;
`

export const ButtonContainer = styled.View`
   flex: 1;
   margin-bottom: 5px;
   justify-content: flex-end;
   align-items: center;
`

export const Search = styled.Image`
   width: 20px;
   height: 20px;
   position: absolute;
   right: 30px;
   top: 38px;
`