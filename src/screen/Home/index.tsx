import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View } from "react-native";
import { Button } from '../../components/Button';
import { ListServices } from '../../components/ListServices';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { VARIANT } from '../../types';
import { Input, ButtonContainer, Search } from './styles';

export function Home() {
   const admin = true
   const navigation = useNavigation<HomeScreenNavigationProp>();

   return (
      <View style={{ flex: 1 }}>
         <Input placeholder='Digite o nome do médico' />
         <Search
            source={require("../../assets/images/icon_2.png")}
         />
         <ButtonContainer isAdmin={admin}>
            <Button
               onPress={() => navigation.navigate('Novo Paciente')}
               title='Cadastrar Paciente'
               color={VARIANT.PRIMARY}
            />

            {admin &&
               <Button
                  onPress={() => navigation.navigate('Novo Medico')}
                  title='Cadastrar Médico'
                  color={VARIANT.SECONDARY}
               />
            }
         </ButtonContainer>
         <ListServices />
      </View>
   )
}