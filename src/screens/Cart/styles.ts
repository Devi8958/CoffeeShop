import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Fonts  from '../../assets/fonts/Fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  title: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
  },
});