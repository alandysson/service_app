
import * as React from 'react';
import {
  View,
} from 'react-native';
import RootNavigator from './src/navigation';
import { theme } from './src/styles/theme';


const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: theme.color.gray }}>
      <RootNavigator />
    </View>
  );
};


export default App;
