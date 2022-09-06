import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/Home';
import PatientForm from '../screen/NewService';
import { HomeStackNavigatorParamList } from './types';
import { theme } from '../styles/theme';
import { NewDoctor } from '../screen/NewDoctor';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
   return (
      <HomeStack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: theme.color.gray,
            },
            headerTintColor: theme.color.primaryDark,
            headerTitleStyle: {
               fontWeight: '500',
               fontSize: 19,
               fontFamily: "Ubuntu-Regular"
            }
         }}>
         <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
         <HomeStack.Screen name="Novo Paciente" component={PatientForm} options={{ title: "Adicionar Paciente" }} />
         <HomeStack.Screen name="Novo Medico" component={NewDoctor} options={{ title: "Adicionar Médico" }} />
      </HomeStack.Navigator>
   );
};

export default HomeStackNavigator;