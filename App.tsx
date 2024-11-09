import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from './src/navigation/MainStack';
import {StatusBar} from 'react-native';
import Colors from './src/constants/Colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.BlackB1B1B} />
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
