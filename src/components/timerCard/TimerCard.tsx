import React, {FC, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DeleteImage, Pause, Play, Reset} from '../../assets/images/Images';
import {TimerDetail} from '../../screens/timerlanding/TimerLanding';
import styles from './Styles';
import FontStyles from '../../assets/stylesheet/FontStyles';
import Dimension from '../../constants/Dimension';

interface TimerCardProps {
  data: TimerDetail;
  onHandleDelete: (item: TimerDetail) => void;
}
const TimerCard: FC<TimerCardProps> = ({...props}) => {
  const [clickedStart, setIsClickedStart] = useState(false);
  const [pause, setIsPause] = useState(false);
  const {data, onHandleDelete} = props;

  const {hours, minutes, seconds} = data.timeInfo;
  const [timeLeft, setTimeLeft] = useState(
    hours * 3600 + minutes * 60 + seconds,
  );

  const onPressStart = () => {
    setIsClickedStart(true);
  };
  const onpressReset = () => {
    setTimeLeft(hours * 3600 + minutes * 60 + seconds);
  };
  const onPressPause = () => {
    setIsPause(true);
  };
  const onPressPlay = () => {
    if (timeLeft <= 0) {
      onpressReset();
    }
    setIsPause(false);
  };
  const onPressDelete = () => {
    onHandleDelete(data);
  };

  useEffect(() => {
    if (clickedStart && !pause) {
      if (timeLeft <= 0) {
        setIsPause(true);
        return;
      }

      const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft, clickedStart, pause]);

  const formatTime = (time: number) => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <View>
      <Text
        style={{
          ...FontStyles.poppinM10RWhite,
          marginHorizontal: Dimension.n(36),
          marginBottom: Dimension.n(-10),
        }}>
        {data.title}
      </Text>
      <View style={styles.timerHeader}>
        <View style={styles.timerContainer}>
          <View style={clickedStart ? {flex: 1} : {}}>
            <Text
              style={[styles.countDown, clickedStart && {textAlign: 'center'}]}>
              {formatTime(timeLeft)}
            </Text>
          </View>

          {!clickedStart && (
            <TouchableOpacity
              style={styles.addButtonCon}
              onPress={onPressStart}>
              <Text style={styles.addButton}>Start</Text>
            </TouchableOpacity>
          )}
        </View>

        {clickedStart && (
          <View style={styles.bottomListIcon}>
            <TouchableOpacity onPress={onpressReset}>
              <Image source={Reset} style={styles.bottomIcon} />
            </TouchableOpacity>
            {!pause ? (
              <TouchableOpacity onPress={onPressPause}>
                <Image source={Pause} style={styles.bottomIcon1} />{' '}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onPressPlay}>
                <Image source={Play} style={styles.bottomIcon1} />{' '}
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={onPressDelete}>
              <Image source={DeleteImage} style={styles.bottomIcon2} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default TimerCard;
