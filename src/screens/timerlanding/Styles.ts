import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Dimension from '../../constants/Dimension';
import FontStyles from '../../assets/stylesheet/FontStyles';

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
  mB100: {marginBottom: 100},
});

export default styles;
