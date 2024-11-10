import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {RootStackScreenProps} from '../../navigation/Routes';
import {PlusImage} from '../../assets/images/Images';
import CModal from '../../components/cModal/CModal';
import CreateTimer, {TimeInfo} from '../../components/createTimer/CreateTimer';
import {Title} from '../../constants/Strings';
import TimerCard from '../../components/timerCard/TimerCard';
import styles from './Styles';
import CAlertModal from '../../components/cAlertModal/CAlertModal';
export interface TimerDetail {
  timeInfo: TimeInfo;
  status: String;
  title: string;
  id: number;
}

const TimerLanding = ({}: RootStackScreenProps<'TimerLanding'>) => {
  const [visibleTimerModal, setIsVisibleTimerModal] = useState(false);
  const [timerList, setTimerList] = useState<TimerDetail[]>([]);
  const [isAlertModal, setisAlertModal] = useState(false);

  const onCloseAlertModal = () => {
    setisAlertModal(false);
  };
  const onPressYes = () => {
    setisAlertModal(false);
    setIsVisibleTimerModal(true);
  };

  const onPressOpenCircle = () => {
    if (timerList.length < 5) {
      setIsVisibleTimerModal(true);
    } else {
      setisAlertModal(true);
    }
  };

  const onCloseModal = () => {
    setIsVisibleTimerModal(false);
  };

  const onPressAdd = (timeInfo: TimeInfo, timeName: string) => {
    console.log(timeInfo);

    const newInfo: TimerDetail = {
      timeInfo: timeInfo,
      status: Title.ADDED,
      title:
        timeName.length > 0
          ? timeName
          : ` ${Title.TIMER} ${timerList.length + 1}`,
      id: timerList.length + 1,
    };

    const modifiedList: TimerDetail[] =
      timerList.length > 0 ? [...timerList, newInfo] : [newInfo];

    setTimerList(modifiedList);
    onCloseModal();
  };

  const onHandleDetele = (clickedItem: TimerDetail) => {
    setTimerList(timerList.filter(timer => timer.id !== clickedItem.id));
  };

  const renderItem = ({item}: {item: TimerDetail}) => {
    return <TimerCard data={item} onHandleDelete={onHandleDetele} />;
  };
  
  return (
    <View style={styles.container}>
      {timerList.length === 0 ? (
        <View>
          <Text style={styles.startText}>{Title.START_TIMER}</Text>
        </View>
      ) : (
        <>
          {timerList.length > 0 && (
            <FlatList
              data={timerList}
              renderItem={renderItem}
              ListFooterComponent={<View style={styles.mB100} />}
            />
          )}
        </>
      )}

      <TouchableOpacity
        style={styles.floatingIcon}
        onPress={() => onPressOpenCircle()}>
        <Image source={PlusImage} style={styles.PlusImage} />
      </TouchableOpacity>

      <CModal visible={visibleTimerModal} onClose={onCloseModal}>
        <CreateTimer onCloseModal={onCloseModal} onPressAdd={onPressAdd} />
      </CModal>
      <CModal visible={isAlertModal} onClose={onCloseAlertModal}>
        <CAlertModal
          content={Title.YOU_HAVE_REACHED_THE_MAXIMUM}
          title={Title.TIMELY}
          buttons={[{text: Title.YES, onPress: onPressYes}]}
        />
      </CModal>
    </View>
  );
};

export default TimerLanding;
