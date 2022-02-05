declare module 'klazify' {
  
  import * as EStyleSheet from 'react-native-extended-stylesheet';
  
  /**
   * This method must be run before css() method.
   * @param opts
   * @private
   */
  function init(opts?: {
    theme?: {
      blue?: '#0d6efd',
      indigo?: '#6610f2',
      purple?: '#6f42c1',
      pink?: '#d63384',
      red?: '#dc3545',
      orange?: '#fd7e14',
      yellow?: '#ffc107',
      green?: '#198754',
      teal?: '#20c997',
      cyan?: '#0dcaf0',
      gray?: '#6c757d',
      'gray1'?: '#ECEFF4',
      'gray2'?: '#d6dfe9',
      'gray3'?: '#A7B3C3',
      'gray4'?: '#7A8796',
      'gray5'?: '#343a40',
      'gray-dark'?: '#343a40',
      primary?: '#0d6efd',
      secondary?: '#6c757d',
      success?: '#198754',
      info?: '#0dcaf0',
      warning?: '#ffc107',
      danger?: '#dc3545',
      white?: '#fff',
      light?: '#f8f9fa',
      dark?: '#212529',
      black?: '#000',
      text?: '#000',
      'text-light'?: '#FFF',
      'text-50'?: 'rgba(0,0,0,0.5)',
      'text-light-50'?: 'rgba(255,255,255,0.5)',
    },
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
