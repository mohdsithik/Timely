import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;

export function normalize(size: number) {
 const newSize = size * scale;
 return Math.round(PixelRatio.roundToNearestPixel(newSize));
}


export default {
 POPPINS_R: 'Poppins-Regular',
 POPPINS_B: 'Poppins-Bold',
 POPPINS_M: 'Poppins-Medium',
 POPPINS_SB: 'Poppins-SemiBold',
 fontSize: normalize,
 n: normalize,
};
