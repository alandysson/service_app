import styled from "styled-components/native"
import { theme } from "../../styles/theme"

export const Container = styled.View`
   margin-top: 60px;
   padding: 15px;
`

export const Input = styled.TextInput`
   border: 1px solid ${theme.color.primary};
   background-color: #fff;
   border-radius: 3px;
   height: 48px;
   padding: 10px;
   margin-bottom: 20px;
   font-size: 15px;
`

export const Border = styled.View`
   border: 1px solid ${theme.color.primary};
   background-color: #fff;
   border-radius: 3px;
   height: 50px;
`