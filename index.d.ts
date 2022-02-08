declare module 'klazify' {
  
  import * as EStyleSheet from 'react-native-extended-stylesheet';
  import React from 'react';
  import Color = require('color');
  
  /**
   * This method must be run before css() method.
   * @param opts
   * @private
   */
  function init(opts?: {
    theme?: {
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
  
  function color(variableName: string): Color<any>;
  
  interface Popover {
    inline?: boolean;
    children: React.Component;
    content: React.Component;
  }
  
  export {init, css, color, Popover};
  
}
