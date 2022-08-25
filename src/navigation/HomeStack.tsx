import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/Home';
import PatientForm from '../screen/NewService';
import { HomeStackNavigatorParamList } from './types';
import { theme } from '../styles/theme';


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
               fontSize: 19
            }
         }}>
         <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
         <HomeStack.Screen name="Novo Paciente" component={PatientForm} />
      </HomeStack.Navigator>
   );
};

export default HomeStackNavigator;