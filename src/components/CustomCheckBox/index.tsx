import React from 'react'
import CheckBox from "@react-native-community/checkbox";
import { theme } from "../../styles/theme";
import { TextStyled } from '../../styles/global';

type CheckBoxProps = {
   itemValue: boolean;
   changeValue: (value: boolean) => void | undefined;
   itemTitle: string;
}

export const CustomCheckBox = ({ itemValue, changeValue, itemTitle }: CheckBoxProps) => (
   <>
      <CheckBox
         disabled={false}
         value={itemValue}
         onValueChange={changeValue}
         tintColors={{ true: theme.color.primaryDark }}
      />
      <TextStyled>{itemTitle}</TextStyled>
   </>
)