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
import {base} from './modules/base';

/**
 * More info about extended stylesheet visit:
 * @link https://github.com/vitalets/react-native-extended-stylesheet
 */

/**
 *  React Native Stylesheet only supports a limited list of properties, so the classes are limited to the list below:
 *  ["alignContent","alignItems","alignSelf","aspectRatio","backfaceVisibility","backgroundColor","borderBottomColor","borderBottomEndRadius","borderBottomLeftRadius","borderBottomRightRadius","borderBottomStartRadius","borderBottomWidth","borderColor","borderEndColor","borderEndWidth","borderLeftColor","borderLeftWidth","borderRadius","borderRightColor","borderRightWidth","borderStartColor","borderStartWidth","borderStyle","borderTopColor","borderTopEndRadius","borderTopLeftRadius","borderTopRightRadius","borderTopStartRadius","borderTopWidth","borderWidth","bottom","color","decomposedMatrix","direction","display","elevation","end","flex","flexBasis","flexDirection","flexGrow","flexShrink","flexWrap","fontFamily","fontSize","fontStyle","fontVariant","fontWeight","height","includeFontPadding","justifyContent","left","letterSpacing","lineHeight","margin","marginBottom","marginEnd","marginHorizontal","marginLeft","marginRight","marginStart","marginTop","marginVertical","maxHeight","maxWidth","minHeight","minWidth","opacity","overflow","overlayColor","padding","paddingBottom","paddingEnd","paddingHorizontal","paddingLeft","paddingRight","paddingStart","paddingTop","paddingVertical","position","resizeMode","right","rotation","scaleX","scaleY","shadowColor","shadowOffset","shadowOpacity","shadowRadius","start","textAlign","textAlignVertical","textDecorationColor","textDecorationLine","textDecorationStyle","textShadowColor","textShadowOffset","textShadowRadius","textTransform","tintColor","top","transform","transformMatrix","translateX","translateY","width","writingDirection","zIndex"]
 */

const defaultClasses = () => ({

  ...base(),
  ...background(),
  ...border,
  ...layout,
  ...flexbox,
  ...padding,
  ...margin,
  ...width,
  ...height,
  ...typography(),
  ...transforms(),

});

export default defaultClasses;
