import { StyleSheet } from 'react-native';

import Fonts from '../../assets/fonts/Fonts';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 8,
    marginBottom: 20,

    shadowColor: Colors.black,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 128,
    borderRadius: 12,
  },

  ratingContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 28,
    paddingHorizontal: 8,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.35)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  rating: {
    color: Colors.white,
    fontFamily: Fonts.semiBold,
    fontSize: 12,
  },

  name: {
    marginTop: 10,
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 16,
  },

  subtitle: {
    marginTop: 4,
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },

  footer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  price: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 18,
  },

  addButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
