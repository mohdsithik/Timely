import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import Dimension from '../../constants/Dimension';
import {CloseImage} from '../../assets/images/Images';
import Colors from '../../constants/Colors';

const CreateTimer = () => {
  return (
    <View style={styles.container}>
      <Image source={CloseImage} style={styles.closeImage} />
      <TextInput
        value=""
        onChangeText={() => {}}
        style={styles.timernameCollector}
        placeholder="Enter Timer Name"
      />
    </View>
  );
};

export default CreateTimer;

const styles = StyleSheet.create({
  container: {
    padding: Dimension.n(20),
    backgroundColor: Colors.gray373737,
    borderRadius: Dimension.n(16),
  },
  closeImage: {
    alignSelf: 'flex-end',
    marginBottom:Dimension.n(20)
  },
  timernameCollector: {
    backgroundColor: Colors.gray595959,
    borderRadius: Dimension.n(6),
  },
});
