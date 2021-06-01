import {StyleSheet} from 'react-native';

import {
  textScale,
  moderateScale,
  moderateScaleVertical,
} from './responsiveSize';
import colors from './colors';
import fontFamily from './fontFamily';
export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};
export default StyleSheet.create({
  fontSize10: {
    fontSize: textScale(10),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },

  fontSize12: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize11: {
    fontSize: textScale(11),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize13: {
    fontSize: textScale(13),
    color: colors.grey,
    fontFamily: fontFamily.regular,
  },
  fontSize15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },

  fontSize16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize17: {
    fontSize: textScale(17),
    color: colors.blackOpacity70,
    fontFamily: fontFamily.regular,
  },

  fontSize18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize24: {
    fontSize: textScale(24),
    color: colors.black,
    //fontFamily: fontFamily.regular,
  },
  fontBold16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold21: {
    fontSize: textScale(21),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRect: {
    height: moderateScaleVertical(48),
    minWidth:moderateScale(200),
    paddingHorizontal:moderateScale(10),
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeMain,
    borderRadius: 8,
  },
  shadowStyle: {
    backgroundColor: colors.white,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    // borderColor: colors.lightWhiteGrayColor,
    // borderWidth: 0.7,
  },
  buttonTextWhite: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(16),
    color: colors.white,
    textTransform: 'capitalize',
  },
  headingText: {
    fontFamily: fontFamily.bold,
    color: colors.blackOpacity90,
    fontSize: textScale(24),
  },

  fontSize40: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(40),
    color: colors.white,
  },

  fontSize28: {
    fontSize: textScale(28),
    fontFamily: fontFamily.bold,
    color: colors.blackColor,
  },

  fontSize30: {
    fontSize: textScale(30),
    fontFamily: fontFamily.medium,
    letterSpacing: 2,
    color: colors.black,
  },
  curveWhitebodyMain: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  curveWhitebodyContainer: {
    flex: 1,
    paddingTop: moderateScale(46),
    paddingHorizontal: moderateScale(24),
  },
});
