declare module 'klazify' {
  
  import {StyleProp, ViewStyle} from 'react-native';
  import Color = require('color');
  
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
    extraGlobalVars?: {
      [key: string]: any;
    },
    customClasses?: () => {
      [key: string]: any;
    },
    logs?: boolean,
  });
  
  /**
   * Applies all rules for StyleSheets (from react-native)
   * and EStyleSheets (from react-native-extended-stylesheet)
   * Remember to run init() method at app startup.
   * @param styles
   * @private
   */
  function css(styles: string | object);
  
  /**
   * Returns a variable value.
   * Remember to run init() method at app startup.
   * @param variableName
   * @private
   */
  function value(variableName: string): any;
  
  /**
   * Returns a color value.
   * Check npm package 'color' for more info.
   * Remember to run init() method at app startup.
   * @param variableName
   * @private
   */
  function color(variableName: string): Color<any>;
  
  /**
   * Component that shows a popup layout.
   * Remember to run init() method at app startup.
   */
  interface Popover {
    children: any;
    content: any;
    style?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    popupStyle?: StyleProp<ViewStyle>;
  }
  
  export {init, css, color, value, Popover};
  
}

type NotDefault<T> = T extends 'default' ? never : T;
