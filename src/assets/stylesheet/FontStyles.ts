import {StyleSheet} from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const getFont = (font: string, size: number, color: string) => {
  return {fontFamily: font, fontSize: Fonts.n(size), color: color};
};

const FontStyles = StyleSheet.create({
  poppinM10Black: getFont(Fonts.POPPINS_B, 20, Colors.WhiteD9D9D9),
  poppinM10RWhite: getFont(Fonts.POPPINS_R, 16, Colors.white),
  poppinR16Gray636363: getFont(Fonts.POPPINS_R, 16, Colors.gray636363),
  poppinSB20White: getFont(Fonts.POPPINS_SB, 26, Colors.white),
  poppinsSB14Blue388DF2: getFont(Fonts.POPPINS_SB, 14, '#388DF2'),
  poppinsSB18Black: getFont(Fonts.POPPINS_SB, 18, '#333333'),
  poppinsR14DarkGrey: getFont(Fonts.POPPINS_R, 14, '#757575'),
  poppinsSB14White: getFont(Fonts.POPPINS_SB, 14, '#ffffff'),
  poppinsSB14Blue: getFont(Fonts.POPPINS_SB, 14, '#1DADE3'),





});

export default FontStyles;
