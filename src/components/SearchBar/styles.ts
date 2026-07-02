import { StyleSheet } from 'react-native';

import Fonts from '../../assets/fonts/Fonts';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    height: 52,
    marginTop: 24,
    borderRadius: 16,
    backgroundColor: Colors.textPrimary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },

  input: {
    flex: 1,
    marginHorizontal: 12,
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 14,
    paddingVertical: 0,
  },

  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
});
