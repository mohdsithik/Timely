import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const rem = SCREEN_WIDTH / 375;

export function normalize(size: number) {
 const newSize = size * rem;
 return Math.round(PixelRatio.roundToNearestPixel(newSize));
}



export default {
 n: normalize,
 SCREEN_WIDTH,
 SCREEN_HEIGHT,
};
