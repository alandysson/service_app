import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
   "Home": undefined;
   "Novo Paciente": undefined;
   "Novo Medico": undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
   HomeStackNavigatorParamList,
   'Novo Paciente',
   'Novo Medico'
>;