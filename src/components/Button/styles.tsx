import styled from 'styled-components/native'
import { theme } from "../../styles/theme";

export const StyledButton = styled.TouchableOpacity`
   justify-content: center;
   align-items: center;
   background-color: ${theme.color.primaryDark};
   border-radius: 3px;
   height: 38px;
   width: 150px;
   &:disabled{
      opacity:0.6 ;
   }
`

export const TxtButton = styled.Text`
   color: ${theme.color.fontWhite};
   font-size: 16px;
`