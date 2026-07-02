import { StyleSheet } from 'react-native';

import Fonts from '../../assets/fonts/Fonts';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  map: {
    flex: 1,
  },

  backButton: {
    position: 'absolute',
    top: 52,
    left: 24,
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },

  locationButton: {
    position: 'absolute',
    top: 52,
    right: 24,
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 34,
  },

  timeText: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    textAlign: 'center',
  },

  statusText: {
    marginTop: 6,
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 14,
    textAlign: 'center',
  },

  statusAddress: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
  },

  progressRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 22,
    marginBottom: 18,
  },

  activeProgress: {
    flex: 1,
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.success,
  },

  inactiveProgress: {
    flex: 1,
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.border,
  },

  deliveryCard: {
    minHeight: 86,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },

  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  deliveryInfo: {
    flex: 1,
    marginLeft: 12,
  },

  deliveryTitle: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 16,
  },

  deliveryDescription: {
    marginTop: 4,
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 12,
    lineHeight: 18,
  },

  courierRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  courierLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },

  driverImage: {
    width: 56,
    height: 56,
    borderRadius: 14,
  },

  courierInfo: {
    flex: 1,
    marginLeft: 12,
  },

  courierName: {
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
    fontSize: 16,
  },

  courierRole: {
    marginTop: 4,
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },

  callButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
