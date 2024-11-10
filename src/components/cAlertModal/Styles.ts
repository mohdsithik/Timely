
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Dimension from '../../constants/Dimension';
import FontStyles from '../../assets/stylesheet/FontStyles';

const styles = StyleSheet.create({
 modalContainer: {
  backgroundColor: Colors.white,
  width: Dimension.SCREEN_WIDTH - Dimension.n(32),
  paddingHorizontal: Dimension.n(20),
  paddingVertical: Dimension.n(20),
  borderRadius: Dimension.n(18),
  maxHeight: '80%',
 },
 title: {
  ...FontStyles.poppinsSB18Black,
  marginVertical: Dimension.n(8),
  textAlign: 'center',
  
 },
 bulletText: {
  marginBottom: 5,
  ...FontStyles.poppinsR14DarkGrey,
  textAlign:'center',
  marginVertical: Dimension.n(18),
 },
 buttonContainer: {
  flexDirection: 'row',
  marginTop: Dimension.n(20),
 },
 singleButton: {
  justifyContent: 'center',
  alignItems: 'center',
 },
 buttonWrapper: {
  alignSelf: 'center',
  borderRadius: Dimension.n(30),
//   overflow: 'hidden',
 },
 multiButtonWrapper: {
  flex: 1,
  marginHorizontal: Dimension.n(4),
 },
 buttonText2: {
  ...FontStyles.poppinsSB14White,
  textAlign: 'center',
  alignItems: 'center',
  backgroundColor: '#1DADE3',
  paddingVertical: Dimension.n(8),
  paddingHorizontal: Dimension.n(24),
 },
 buttonText: { 
    ...FontStyles.poppinsSB14Blue, 
    textAlign: 'center',
     alignItems: 'center',
    },
 textAllignLeft: { textAlign: 'left' },
 textAllignRight: { textAlign: 'right' },
});
export default styles;
