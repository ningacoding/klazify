declare module 'klazify' {
  
  import * as EStyleSheet from 'react-native-extended-stylesheet';
  
  /**
   * This method must be run before css() method.
   * @param opts
   * @private
   */
  function init(opts?: {
    theme?: EStyleSheet.AnyObject,
    extraGlobalVars?: EStyleSheet.AnyObject,
    customClasses?: EStyleSheet.AnyObject,
  });
  
  /**
   * Applies all rules for StyleSheets (from react-native)
   * and EStyleSheets (from react-native-extended-stylesheet)
   * @param styles
   * @private
   */
  function css(styles: string | object);
  
  export {init, css};
  
}
