import React from "react";
import { TxtButton, StyledButton } from "./styles"

interface Props {
   onPress: () => void;
   title: string;
   disabled?: boolean;
}

export const Button = ({ title, onPress, disabled }: Props) => {
   return <StyledButton
      style={{ opacity: disabled ? 0.4 : 1 }}
      onPress={onPress}
      disabled={disabled}
   >
      <TxtButton>{title}</TxtButton>
   </StyledButton>
}