import { StyleSheet } from 'react-native';

import Fonts from '../../assets/fonts/Fonts';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },

  imageContainer: {
    height: '65%',
    backgroundColor: Colors.black,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  contentContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 30,
    paddingBottom: 34,
  },

  textContainer: {
    marginTop: -38,
  },

  title: {
    color: Colors.white,
    fontFamily: Fonts.semiBold,
    fontSize: 30,
    lineHeight: 40,
    textAlign: 'center',
  },

  description: {
    marginTop: 12,
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },

  button: {
    marginTop: 30,
  },
});
