import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackScreenProps} from '../../navigation/Routes';
import Colors from '../../constants/Colors';
import Dimension from '../../constants/Dimension';
import {PlusImage} from '../../assets/images/Images';
import CModal from '../../components/cModal/CModal';
import CreateTimer from '../../components/createTimer/CreateTimer';
import FontStyles from '../../assets/stylesheet/FontStyles';

const TimerLanding = ({}: RootStackScreenProps<'TimerLanding'>) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingIcon}>
        <Image source={PlusImage} style={styles.PlusImage} />
      </TouchableOpacity>

      <CModal visible={false} onClose={() => {}}>
        <CreateTimer/>
      </CModal>
    </View>
  );
};

export default TimerLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.BlackB1B1B,
  },
  floatingIcon: {
    position: 'absolute',
    width: Dimension.n(70),
    height: Dimension.n(70),
    backgroundColor: Colors.WhiteD9D9D9,
    borderRadius: Dimension.n(50),
    bottom: Dimension.n(25),
    right: Dimension.n(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlusImage: {
    width: Dimension.n(35),
    height: Dimension.n(35),
  },
});
