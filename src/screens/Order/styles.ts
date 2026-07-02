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
    paddingBottom: 140,
  },

  tabContainer: {
    height: 44,
    borderRadius: 12,
    backgroundColor: Colors.divider,
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 24,
    padding: 4,
  },

  tabButton: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeTab: {
    backgroundColor: Colors.primary,
  },

  activeTabText: {
    color: Colors.white,
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },

  tabText: {
    color: Colors.textPrimary,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },

  sectionTitle: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    marginBottom: 12,
  },

  addressTitle: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },

  addressDescription: {
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 12,
    marginTop: 4,
  },

  addressActionRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },

  addressActionButton: {
    height: 28,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  addressActionText: {
    color: Colors.textPrimary,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },

  itemTopDivider: {
    height: 2,
    backgroundColor: Colors.divider,
    marginTop: 16,
    marginBottom: 16,
  },

  itemBottomDivider: {
    height: 3,
    backgroundColor: Colors.primary,
    opacity: 0.15,
    marginTop: 16,
    marginBottom: 20,
    marginHorizontal: -24,
  },

  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemImage: {
    width: 54,
    height: 54,
    borderRadius: 12,
  },

  itemInfo: {
    flex: 1,
    marginLeft: 12,
  },

  itemName: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 16,
  },

  itemSubtitle: {
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 12,
    marginTop: 4,
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  quantityText: {
    width: 34,
    textAlign: 'center',
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },

  discountBox: {
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  discountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  discountText: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  summaryLabel: {
    color: Colors.textPrimary,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },

  summaryValue: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },

  deliveryFeeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  oldDeliveryFee: {
    color: Colors.textPrimary,
    fontFamily: Fonts.regular,
    fontSize: 14,
    textDecorationLine: 'line-through',
  },

  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 34,
  },

  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  walletLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  paymentTitle: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },

  paymentPrice: {
    color: Colors.primary,
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    marginTop: 4,
  },

  orderButton: {
    width: '100%',
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
    textAlign: 'center',
  },
});
