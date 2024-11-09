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

});

export default FontStyles;
