import { StyleSheet } from 'react-native';

import Fonts from '../../assets/fonts/Fonts';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 24,
    marginTop: -55,
  },

  container: {
    height: 140,
    borderRadius: 16,
    overflow: 'hidden',
    padding: 16,
    justifyContent: 'center',
  },

  image: {
    borderRadius: 16,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.error,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },

  badgeText: {
    color: Colors.white,
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },
  titleWrapper: {
    marginTop: 6,
  },

  lineWrapper: {
    alignSelf: 'flex-start',
    position: 'relative',
  },

  lineBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 3,
    height: 18,
    backgroundColor: Colors.textPrimary,
  },

  title: {
    color: Colors.white,
    fontFamily: Fonts.semiBold,
    fontSize: 32,
    lineHeight: 38,
  },
});
