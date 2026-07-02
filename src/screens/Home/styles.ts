import { StyleSheet } from 'react-native';

import Fonts from '../../assets/fonts/Fonts';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  listContent: {
    paddingBottom: 100,
    backgroundColor: Colors.white,
  },

  headerContainer: {
    backgroundColor: Colors.white,
  },

  topSection: {
    backgroundColor: Colors.darkGrey,
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 85,
  },

  locationLabel: {
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 6,
  },

  arrowContainer: {
    marginLeft: 6,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationText: {
    color: Colors.white,
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },

  locationArrow: {
    marginLeft: 6,
  },

  categoryList: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },

  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 24,
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
    marginBottom: 20,
  },

  retryButton: {
    width: 160,
  },

  emptyContainer: {
    paddingTop: 40,
    alignItems: 'center',
  },

  emptyText: {
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
});
