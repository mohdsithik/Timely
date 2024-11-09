import {StyleSheet} from 'react-native';
import FontStyles from '../../assets/stylesheet/FontStyles';
import Colors from '../../constants/Colors';
import Dimension from '../../constants/Dimension';

const styles = StyleSheet.create({
  countDown: {
    ...FontStyles.poppinSB20White,
   
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
    width:Dimension.n(20),
    height:Dimension.n(20)
  },
  bottomIcon1: {
    marginHorizontal: Dimension.n(36),
    marginVertical: Dimension.n(16),
    width:Dimension.n(25),
    height:Dimension.n(25)
  },
  bottomIcon2: {
    marginHorizontal: Dimension.n(36),
    marginVertical: Dimension.n(16),
    width:Dimension.n(20),
    height:Dimension.n(22)
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
  addButtonCon: {
    backgroundColor: Colors.blue918FFF,
    borderRadius: Dimension.n(4),
    alignSelf: 'center',
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
});

export default styles;
