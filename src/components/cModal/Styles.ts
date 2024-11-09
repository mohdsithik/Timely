import { StyleSheet } from 'react-native';
import Dimension from '../../constants/Dimension';

const styles = StyleSheet.create({
 blurBg: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  opacity: 0.6,
 },
 modalContent: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  margin: Dimension.n(20),
  maxHeight: '90%',
 },
 modalBottomContent: {
  flex: 1,
  justifyContent: 'flex-end',
 },
 modalContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
 flex1: { flex: 1 },
});
export default styles;
