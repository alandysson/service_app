import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import PatientForm from "../src/screen/NewService";

describe('PatientForm.tsx', () => {
   it('should be disabled', () => {
      render(<PatientForm />)
      const button = screen.getByText(/Cadastrar/)
      expect(fireEvent(button, 'press')).toBeCalledTimes(0)
   });
});