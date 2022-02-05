declare module 'klazify' {
  
  import * as EStyleSheet from 'react-native-extended-stylesheet';
  
  /**
   * This method must be run before css() method.
   * @param opts
   * @private
   */
  function init(opts?: {
    theme?: {
      blue?: string,
      indigo?: string,
      purple?: string,
      pink?: string,
      red?: string,
      orange?: string,
      yellow?: string,
      green?: string,
      teal?: string,
      cyan?: string,
      gray?: string,
      'gray1'?: string,
      'gray2'?: string,
      'gray3'?: string,
      'gray4'?: string,
      'gray5'?: string,
      'gray-dark'?: string,
      primary?: string,
      secondary?: string,
      success?: string,
      info?: string,
      warning?: string,
      danger?: string,
      white?: string,
      light?: string,
      dark?: string,
      black?: string,
      text?: string,
      'text-light'?: string,
      'text-50'?: string,
      'text-light-50'?: string,
    },
    extraGlobalVars?: EStyleSheet.AnyObject,
    customClasses?: EStyleSheet.AnyObject,
    logs?: boolean,
  });
  
  /**
   * Applies all rules for StyleSheets (from react-native)
   * and EStyleSheets (from react-native-extended-stylesheet)
   * @param styles
   * @private
   */
  function css(styles: string | object);
  
  export {init, css, EStyleSheet};
  
}
