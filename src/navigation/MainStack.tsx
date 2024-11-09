import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TimerLanding from '../screens/timerlanding/TimerLanding';
import {RootStackParamList} from './Routes';
import {ScreenName} from './ScreenName';

const MainStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName={ScreenName.TIMERLANDING}>
      <Stack.Screen
        name={ScreenName.TIMERLANDING}
        component={TimerLanding}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
