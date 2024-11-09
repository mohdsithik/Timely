import {StyleSheet} from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const getFont = (font: string, size: number, color: string) => {
  return {fontFamily: font, fontSize: Fonts.n(size), color: color};
};

const FontStyles = StyleSheet.create({


  poppinM10Black: getFont(Fonts.POPPINS_B, 30, Colors.WhiteD9D9D9),
});

export default FontStyles;
