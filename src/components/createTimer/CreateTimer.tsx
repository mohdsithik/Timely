import React, {FC, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Dimension from '../../constants/Dimension';
import {CloseImage} from '../../assets/images/Images';
import Colors from '../../constants/Colors';
import FontStyles from '../../assets/stylesheet/FontStyles';
import {Title} from '../../constants/Strings';
import {TimerPicker} from 'react-native-timer-picker';
import styles from './Styles';
import CAlertModal from '../cAlertModal/CAlertModal';
import CModal from '../cModal/CModal';

export interface TimeInfo {
  hours: number;
  minutes: number;
  seconds: number;
}

interface CreateTimerProps {
  onCloseModal: () => void;
  onPressAdd: (timeInfo: TimeInfo, timerName: string) => void;
}

const CreateTimer: FC<CreateTimerProps> = ({...props}) => {
  const {onCloseModal, onPressAdd} = props;

  const [value, setValue] = useState('');
  const [time, setTime] = useState<TimeInfo>();
  const [isAlertModal, setisAlertModal] = useState(false);

  const onHandleAdd = () => {
    if (time) {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        setisAlertModal(true);
      } else {
        onPressAdd(time, value);
      }
    }
  };

  const onCloseAlertModal = () => {
    setisAlertModal(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCloseModal}>
        <Image source={CloseImage} style={styles.closeImage} />
      </TouchableOpacity>
      <View style={styles.timerCon}>
        <TimerPicker
          padWithNItems={1}
          minuteLabel=":"
          secondLabel=""
          hourLabel=":"
          styles={{
            backgroundColor: 'transparent',
            pickerItem: {
              ...FontStyles.poppinM10Black,
            },
            pickerLabel: {
              ...FontStyles.poppinR16Gray636363,
            },
            pickerLabelContainer: {
              marginTop: -6,
            },
            pickerItemContainer: {
              width: Dimension.n(90),
              height: Dimension.n(60),
            },
          }}
          initialValue={{
            hours: 0,
            minutes: 1,
            seconds: 0,
          }}
          onDurationChange={info => {
            setTime(info);
          }}
        />
      </View>

      <View style={styles.summitCon}>
        <TextInput
          value={value}
          onChangeText={text => {
            setValue(text);
          }}
          style={styles.timernameCollector}
          placeholder={Title.ENTER_TIMER_NAME}
          placeholderTextColor={Colors.white}
          numberOfLines={1}
        />
        <TouchableOpacity style={styles.addButtonCon} onPress={onHandleAdd}>
          <Text style={styles.addButton}>{Title.ADD}</Text>
        </TouchableOpacity>
      </View>

      <CModal visible={isAlertModal} onClose={onCloseAlertModal}>
        <CAlertModal
          content={Title.PLEASE_SELECT_VALIDTIME_RANGE}
          title={Title.TIMELY}
          buttons={[{text: Title.CLOSE, onPress: onCloseAlertModal}]}
        />
      </CModal>
    </View>
  );
};

export default CreateTimer;
