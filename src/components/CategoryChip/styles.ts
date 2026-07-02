import { StyleSheet } from 'react-native';

import Fonts from '../../assets/fonts/Fonts';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    height: 38,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: Colors.categoryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  selectedContainer: {
    backgroundColor: Colors.primary,
  },

  title: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: Colors.textPrimary,
  },

  selectedTitle: {
    color: Colors.white,
  },
});
