import Color from 'color';
import EStyleSheet from 'react-native-extended-stylesheet';
import {margin} from './modules/margin';
import {padding} from './modules/padding';
import {flexbox} from './modules/flexbox';
import {layout} from './modules/layout';
import {border} from './modules/border';
import {background} from './modules/background';
import {width} from './modules/width';
import {height} from './modules/height';
import {typography} from './modules/typography';
import {transforms} from './modules/transforms';

/**
 * More info about extended stylesheet visit:
 * @link https://github.com/vitalets/react-native-extended-stylesheet
 */

/**
 *  React Native Stylesheet only supports a limited list of properties, so the classes are limited to the list below:
 *  ["alignContent","alignItems","alignSelf","aspectRatio","backfaceVisibility","backgroundColor","borderBottomColor","borderBottomEndRadius","borderBottomLeftRadius","borderBottomRightRadius","borderBottomStartRadius","borderBottomWidth","borderColor","borderEndColor","borderEndWidth","borderLeftColor","borderLeftWidth","borderRadius","borderRightColor","borderRightWidth","borderStartColor","borderStartWidth","borderStyle","borderTopColor","borderTopEndRadius","borderTopLeftRadius","borderTopRightRadius","borderTopStartRadius","borderTopWidth","borderWidth","bottom","color","decomposedMatrix","direction","display","elevation","end","flex","flexBasis","flexDirection","flexGrow","flexShrink","flexWrap","fontFamily","fontSize","fontStyle","fontVariant","fontWeight","height","includeFontPadding","justifyContent","left","letterSpacing","lineHeight","margin","marginBottom","marginEnd","marginHorizontal","marginLeft","marginRight","marginStart","marginTop","marginVertical","maxHeight","maxWidth","minHeight","minWidth","opacity","overflow","overlayColor","padding","paddingBottom","paddingEnd","paddingHorizontal","paddingLeft","paddingRight","paddingStart","paddingTop","paddingVertical","position","resizeMode","right","rotation","scaleX","scaleY","shadowColor","shadowOffset","shadowOpacity","shadowRadius","start","textAlign","textAlignVertical","textDecorationColor","textDecorationLine","textDecorationStyle","textShadowColor","textShadowOffset","textShadowRadius","textTransform","tintColor","top","transform","transformMatrix","translateX","translateY","width","writingDirection","zIndex"]
 */

const defaultClasses = () => ({

  'btn-block': {flex: 1},
  'link': {textDecorationLine: 'underline', color: '$primary'},
  'btn-padding': {paddingHorizontal: '$btnPaddingHorizontal', paddingVertical: '$btnPaddingVertical'},
  'btn-sm': {paddingHorizontal: '$btnPaddingHorizontal * 0.64', paddingVertical: '$btnPaddingVertical * 0.64'},
  'btn-md': {paddingHorizontal: '$btnPaddingHorizontal * 1.24', paddingVertical: '$btnPaddingVertical * 1.24'},
  'btn-lg': {paddingHorizontal: '$btnPaddingHorizontal * 1.48', paddingVertical: '$btnPaddingVertical * 1.48'},
  'btn-xl': {paddingHorizontal: '$btnPaddingHorizontal * 1.64', paddingVertical: '$btnPaddingVertical * 1.64'},
  'btn-2xl': {paddingHorizontal: '$btnPaddingHorizontal * 1.96', paddingVertical: '$btnPaddingVertical * 1.96'},
  'btn-3xl': {paddingHorizontal: '$btnPaddingHorizontal * 2.24', paddingVertical: '$btnPaddingVertical * 2.24'},
  'btn': {
    backgroundColor: '$primary',
    borderWidth: 1,
    borderColor: Color(EStyleSheet.value('$primary')).lighten(0.32).hex(),
    borderRadius: 5,
    paddingHorizontal: '$btnPaddingHorizontal',
    paddingVertical: '$btnPaddingVertical',
  },
  'card': {
    backgroundColor: Color(EStyleSheet.value('$bgBody')).lighten(0.2).hex(),
    borderRadius: 5,
    shadowOpacity: 0.16,
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    elevation: 4,
  },

  'input-active': {borderWidth: 1, borderColor: '$primary'},
  'input-error': {borderWidth: 1, borderColor: '$danger'},
  'input': {borderWidth: 1, borderColor: '$gray2', paddingHorizontal: '1rem', paddingVertical: '0.75rem', margin: 0},
  'text-area': {
    borderWidth: 1,
    borderColor: '$gray2',
    paddingHorizontal: '1rem',
    paddingVertical: '0.75rem',
    margin: 0,
    maxHeight: 100,
  },

  'shadow': {shadowOpacity: 0.16, shadowRadius: 4, shadowOffset: {height: 4, width: 0}, elevation: 4},
  'shadow-sm': {shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: {height: 2, width: 0}, elevation: 2},
  'shadow-md': {shadowOpacity: 0.16, shadowRadius: 6, shadowOffset: {height: 6, width: 0}, elevation: 6},
  'shadow-lg': {shadowOpacity: 0.16, shadowRadius: 8, shadowOffset: {height: 8, width: 0}, elevation: 8},
  'shadow-none': {shadowOpacity: 0, shadowRadius: 0, shadowOffset: {height: 0, width: 0}, elevation: 0},
  'tab': {marginBottom: -1},
  'tab-active': {marginBottom: -1},
  'tab-inactive': {marginTop: -1, borderBottomWidth: 1},
  'bottom-15': {bottom: '15rem'},
  'bottom-13': {bottom: '13rem'},
  'position-absolute': {position: 'absolute'},
  'top-15': {top: '15rem'},
  'top-13': {top: '13rem'},


  'icon': {fontSize: '1.5rem'},
  'icon-xxs': {fontSize: '0.75rem'},
  'icon-xs': {fontSize: '1rem'},
  'icon-sm': {fontSize: '1.2rem'},
  'icon-md': {fontSize: '2rem'},
  'icon-lg': {fontSize: '2.35rem'},
  'icon-xl': {fontSize: '3rem'},
  'icon-2xl': {fontSize: '4rem'},
  'icon-3xl': {fontSize: '8rem'},
  'logo-smt-drawer': {fontSize: '6rem'},
  'icon-fullscreen': {fontSize: '12rem'},

  'badge-fixed': {position: 'absolute', right: '-1rem', top: '-1rem'},
  'badge': {
    backgroundColor: '$primary',
    padding: '0.5rem',
    marginVertical: 1,
    borderRadius: '9999rem',
    minWidth: '2.5rem',
    color: '$white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  'badge-sm': {
    backgroundColor: '$primary',
    padding: '0.25rem',
    marginVertical: 1,
    borderRadius: 14,
    minWidth: '1.5rem',
    color: '$white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  'z-index-min': {position: 'absolute', zIndex: 0},
  'z-index-max': {position: 'absolute', zIndex: 9999},
  'mh-input': {minHeight: '3rem'},
  'right-13': {right: '13rem'},
  'right-15': {right: '15rem'},
  '-right-half': {right: '-0.5rem'},
  '-right-1': {right: '-1rem'},
  '-right-2': {right: '-2rem'},
  '-right-3': {right: '-3rem'},
  '-right-4': {right: '-4rem'},
  '-right-5': {right: '-5rem'},
  '-right-6': {right: '-6rem'},
  '-right-7': {right: '-7rem'},
  '-right-8': {right: '-8rem'},
  '-right-9': {right: '-9rem'},
  '-right-10': {right: '-10rem'},
  '-right-11': {right: '-11rem'},
  '-right-12': {right: '-12rem'},
  '-right-13': {right: '-13rem'},
  '-right-14': {right: '-14rem'},
  '-right-15': {right: '-15rem'},
  '-right-16': {right: '-16rem'},
  'left-13': {left: '13rem'},
  'left-15': {left: '15rem'},
  'list-item': {alignSelf: 'center', maxWidth: '48rem', width: '100%'},
  'transparent': {opacity: 0},
  'disabled': {opacity: 0.32},
  'p-tag': {paddingHorizontal: '0.5rem', paddingVertical: '0.25rem'},
  'p-tag-sm': {paddingHorizontal: '0.48rem', paddingVertical: '0.24rem'},

  ...background(),
  ...border,
  ...layout,
  ...flexbox,
  ...padding,
  ...margin,
  ...width,
  ...height,
  ...typography(),
  ...transforms,

// 'test': {boxShadow: 'auto'},
});

/**
 * TODO: replace scaleY with transform
 */
// 'invert': scaleY: -1,

export default defaultClasses;
