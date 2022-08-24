import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/Home';
import PatientForm from '../screen/NewService';
import { HomeStackNavigatorParamList } from './types';


const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
   return (
      <HomeStack.Navigator>
         <HomeStack.Screen name="Home" component={Home} />
         <HomeStack.Screen name="Novo Paciente" component={PatientForm} />
      </HomeStack.Navigator>
   );
};

export default HomeStackNavigator;