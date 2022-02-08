declare module 'klazify' {
  
  import * as EStyleSheet from 'react-native-extended-stylesheet';
  import Color = require('color');
  import {ViewStyle} from 'react-native';
  
  /**
   * This method must be run before css() method.
   * @param opts
   * @private
   */
  function init(opts?: {
    values?: {
      theme?: NotDefault<string>,
      defaultFontFamily?: string,
      
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
      gray1?: string,
      gray2?: string,
      gray3?: string,
      gray4?: string,
      gray5?: string,
      grayDark?: string,
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
      textLight?: string,
      bgBody?: string,
      
      btnPaddingHorizontal?: string | number,
      btnPaddingVertical?: string | number,
    },
    extraGlobalVars?: EStyleSheet.AnyObject,
    customClasses?: () => EStyleSheet.AnyObject,
    logs?: boolean,
  });
  
  /**
   * Applies all rules for StyleSheets (from react-native)
   * and EStyleSheets (from react-native-extended-stylesheet)
   * @param styles
   * @private
   */
  function css(styles: string | object);
  
  function value(variableName: string): any;
  
  function color(variableName: string): Color<any>;
  
  interface Popover {
    inline?: boolean;
    children: any;
    content: any;
    style: ViewStyle;
  }
  
  export {init, css, color, value, Popover};
  
}

type NotDefault<T> = T extends 'default' ? never : T;
