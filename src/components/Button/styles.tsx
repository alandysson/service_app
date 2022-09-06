import styled from 'styled-components/native'
import { TextStyled } from '../../styles/global';
import { theme } from "../../styles/theme";
import { VARIANT } from '../../types';

type IStyledButton = {
   variant?: VARIANT
}

export const StyledButton = styled.TouchableOpacity<IStyledButton>`
   justify-content: center;
   align-items: center;
   ${props => {
      switch (props.variant) {
         case VARIANT.SECONDARY:
            return `
          background-color: ${theme.color.primary};
        `;
         case VARIANT.PRIMARY:
         default:
            return `
          background-color: ${theme.color.primaryDark};
        `;
      }
   }}
   border-radius: 3px;
   height: 33px;
   width: 150px;
   &:disabled{
      opacity:0.6 ;
   }
`

export const TxtButton = styled(TextStyled)`
   color: ${theme.color.fontWhite};
   font-size: 15px;
`