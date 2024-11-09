import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackScreenProps} from '../../navigation/Routes';
import Colors from '../../constants/Colors';
import Dimension from '../../constants/Dimension';
import {DeleteImage, Pause, PlusImage, Reset} from '../../assets/images/Images';
import CModal from '../../components/cModal/CModal';
import CreateTimer, {TimeInfo} from '../../components/createTimer/CreateTimer';
import {Title} from '../../constants/Strings';
import FontStyles from '../../assets/stylesheet/FontStyles';
import TimerCard from '../../components/timerCard/TimerCard';

export interface TimerDetail {
  timeInfo: TimeInfo;
  status: String;
  title: string;
}

const TimerLanding = ({}: RootStackScreenProps<'TimerLanding'>) => {
  const [visibleTimerModal, setIsVisibleTimerModal] = useState(false);
  const [timerList, setTimerList] = useState<TimerDetail[]>([]);

  console.log('timerList', timerList);

  const onPressOpenCircle = () => {
    setIsVisibleTimerModal(true);
  };

  const onCloseModal = () => {
    setIsVisibleTimerModal(false);
  };

  const onPressAdd = (timeInfo: TimeInfo) => {
    console.log(timeInfo);

    const newInfo: TimerDetail = {
      timeInfo: timeInfo,
      status: 'Added',
      title: '',
    };

    const modifiedList: TimerDetail[] =
      timerList.length > 0 ? [...timerList, newInfo] : [newInfo];

    setTimerList(modifiedList);
    onCloseModal();
  };

  const renderItem = ({item}: {item: TimerDetail}) => {
    return <TimerCard data={item} />;
  };
  return (
    <View style={styles.container}>
      {timerList.length === 0 ? (
        <View>
          <Text style={styles.startText}>{Title.START_TIMER}</Text>
        </View>
      ) : (
        <>
          <FlatList data={timerList} renderItem={renderItem} />
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
  startText: {
    textAlign: 'center',
    ...FontStyles.poppinSB20White,
  },
  addButton: {
    ...FontStyles.poppinM10RWhite,
    marginHorizontal: Dimension.n(20),
    marginVertical: Dimension.n(4),
  },
  addButtonCon: {
    backgroundColor: Colors.blue918FFF,
    borderRadius: Dimension.n(4),
    alignSelf: 'center',
  },
  countDown: {
    ...FontStyles.poppinSB20White,
    textAlign: 'center',
  },
  timerContainer: {
    backgroundColor: Colors.gray636363,
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: Dimension.n(20),
    paddingVertical: Dimension.n(12),
    borderRadius: Dimension.n(8),
  },
  bottomIcon: {
    marginHorizontal: Dimension.n(36),
    marginVertical: Dimension.n(16),
  },
  timerHeader: {
    marginHorizontal: Dimension.n(30),
    marginVertical: Dimension.n(16),
    borderWidth: 1,
    borderColor: Colors.gray636363,
    borderRadius: Dimension.n(8),
  },
  bottomListIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
