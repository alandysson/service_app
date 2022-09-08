import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
   margin-top: 25px;
   padding: 15px;
`

export const Input = styled.TextInput`
   font-family: "Ubuntu-Regular";
   border: 1px solid ${theme.color.primary};
   background-color: #fff;
   border-radius: 3px;
   height: 43px;
   padding: 10px;
   margin-bottom: 20px;
   font-size: 15px;
`

export const ButtonContainer = styled.View`
   align-items: center;
`