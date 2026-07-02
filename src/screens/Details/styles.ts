import { StyleSheet } from 'react-native';

import Fonts from '../../assets/fonts/Fonts';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  content: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },

  image: {
    width: '100%',
    height: 226,
    borderRadius: 16,
    marginTop: 20,
  },

  infoRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoLeft: {
    flex: 1,
    paddingRight: 12,
  },

  name: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 20,
  },

  subtitle: {
    marginTop: 4,
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },

  ratingRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  rating: {
    marginLeft: 4,
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },

  ratingCount: {
    marginLeft: 4,
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
  },

  featureBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: Colors.iconBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginTop: 20,
    marginBottom: 20,
  },

  sectionTitle: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    marginBottom: 8,
    marginTop: 20,
  },

  description: {
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 14,
    lineHeight: 22,
  },

  readMore: {
    marginTop: 4,
    color: Colors.primary,
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },

  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sizeBox: {
    width: '30%',
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },

  selectedSizeBox: {
    borderColor: Colors.primary,
    backgroundColor: Colors.categoryBackground,
  },

  sizeText: {
    color: Colors.textPrimary,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },

  selectedSizeText: {
    color: Colors.primary,
    fontFamily: Fonts.semiBold,
  },

  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceLabel: {
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },

  price: {
    marginTop: 4,
    color: Colors.primary,
    fontFamily: Fonts.semiBold,
    fontSize: 18,
  },

  buyButton: {
    width: 180,
  },

  centerContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  errorText: {
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },

  retryButton: {
    width: 160,
  },
});
