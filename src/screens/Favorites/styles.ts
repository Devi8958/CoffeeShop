import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../assets/fonts/Fonts';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.divider,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },

  title: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 24,
  },

  description: {
    marginTop: 12,
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
});
