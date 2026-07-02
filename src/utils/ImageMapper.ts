import { ImageSourcePropType } from 'react-native';

import { Images } from '../assets';

const ImageMapper: Record<string, ImageSourcePropType> = {
  coffeeMocha: Images.coffeeMocha,
  flatWhite: Images.flatWhite,
  cappuccino: Images.cappuccino,
  americano: Images.americano,
};

export default ImageMapper;
