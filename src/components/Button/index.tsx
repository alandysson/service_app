import React from "react";
import { VARIANT } from "../../types";
import { TxtButton, StyledButton } from "./styles"

interface Props {
   onPress: () => void;
   title: string;
   disabled?: boolean;
   color?: VARIANT
}

export const Button = ({ title, onPress, disabled, color }: Props) => {
   return <StyledButton
      style={{ opacity: disabled ? 0.4 : 1 }}
      onPress={onPress}
      disabled={disabled}
      variant={color}
   >
      <TxtButton>{title}</TxtButton>
   </StyledButton>
}