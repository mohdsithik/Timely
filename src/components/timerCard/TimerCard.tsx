import React, {FC, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DeleteImage, Pause, Reset} from '../../assets/images/Images';
import {TimerDetail} from '../../screens/timerlanding/TimerLanding';
import styles from './Styles';

interface TimerCardProps {
  data: TimerDetail;
}
const TimerCard: FC<TimerCardProps> = ({...props}) => {
  const [clickedStart, setIsClickedStart] = useState(false);
  const {data} = props;

  const onPressStart = () => {
    setIsClickedStart(true);
  };

  let timerText = `${data.timeInfo.hours} : ${data.timeInfo.minutes} : ${data.timeInfo.seconds}`;

  return (
    <View style={styles.timerHeader}>
      <View style={styles.timerContainer}>
        <View style={clickedStart ? {flex: 1} : {}}>
          <Text style={styles.countDown}>{timerText}</Text>
        </View>

        {!clickedStart && (
          <TouchableOpacity style={styles.addButtonCon} onPress={onPressStart}>
            <Text style={styles.addButton}>Start</Text>
          </TouchableOpacity>
        )}
      </View>

      {clickedStart && (
        <View style={styles.bottomListIcon}>
          <Image source={Reset} style={styles.bottomIcon} />
          <Image source={Pause} style={styles.bottomIcon} />
          <Image source={DeleteImage} style={styles.bottomIcon} />
        </View>
      )}
    </View>
  );
};

export default TimerCard;
