import React from 'react';
import {Text, View} from 'react-native';
import {RootStackScreenProps} from '../../navigation/Routes';

const TimerLanding = ({}: RootStackScreenProps<'TimerLanding'>) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <Text style={{backgroundColor: 'white', textAlign: 'center'}}>
        TimeLy
      </Text>
    </View>
  );
};

export default TimerLanding;
