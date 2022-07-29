import {ListRenderItem} from 'react-native';
import * as React from 'react';

declare module 'klazify' {
  
  import {StyleProp, ViewStyle} from 'react-native';
  // @ts-ignore
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
      slate50?: string,
      slate100?: string,
      slate200?: string,
      slate300?: string,
      slate400?: string,
      slate500?: string,
      slate600?: string,
      slate700?: string,
      slate800?: string,
      slate900?: string,
      gray50?: string,
      gray100?: string,
      gray200?: string,
      gray300?: string,
      gray400?: string,
      gray500?: string,
      gray600?: string,
      gray700?: string,
      gray800?: string,
      gray900?: string,
      zinc50?: string,
      zinc100?: string,
      zinc200?: string,
      zinc300?: string,
      zinc400?: string,
      zinc500?: string,
      zinc600?: string,
      zinc700?: string,
      zinc800?: string,
      zinc900?: string,
      neutral50?: string,
      neutral100?: string,
      neutral200?: string,
      neutral300?: string,
      neutral400?: string,
      neutral500?: string,
      neutral600?: string,
      neutral700?: string,
      neutral800?: string,
      neutral900?: string,
      stone50?: string,
      stone100?: string,
      stone200?: string,
      stone300?: string,
      stone400?: string,
      stone500?: string,
      stone600?: string,
      stone700?: string,
      stone800?: string,
      stone900?: string,
      red50?: string,
      red100?: string,
      red200?: string,
      red300?: string,
      red400?: string,
      red500?: string,
      red600?: string,
      red700?: string,
      red800?: string,
      red900?: string,
      orange50?: string,
      orange100?: string,
      orange200?: string,
      orange300?: string,
      orange400?: string,
      orange500?: string,
      orange600?: string,
      orange700?: string,
      orange800?: string,
      orange900?: string,
      amber50?: string,
      amber100?: string,
      amber200?: string,
      amber300?: string,
      amber400?: string,
      amber500?: string,
      amber600?: string,
      amber700?: string,
      amber800?: string,
      amber900?: string,
      yellow50?: string,
      yellow100?: string,
      yellow200?: string,
      yellow300?: string,
      yellow400?: string,
      yellow500?: string,
      yellow600?: string,
      yellow700?: string,
      yellow800?: string,
      yellow900?: string,
      lime50?: string,
      lime100?: string,
      lime200?: string,
      lime300?: string,
      lime400?: string,
      lime500?: string,
      lime600?: string,
      lime700?: string,
      lime800?: string,
      lime900?: string,
      green50?: string,
      green100?: string,
      green200?: string,
      green300?: string,
      green400?: string,
      green500?: string,
      green600?: string,
      green700?: string,
      green800?: string,
      green900?: string,
      emerald50?: string,
      emerald100?: string,
      emerald200?: string,
      emerald300?: string,
      emerald400?: string,
      emerald500?: string,
      emerald600?: string,
      emerald700?: string,
      emerald800?: string,
      emerald900?: string,
      teal50?: string,
      teal100?: string,
      teal200?: string,
      teal300?: string,
      teal400?: string,
      teal500?: string,
      teal600?: string,
      teal700?: string,
      teal800?: string,
      teal900?: string,
      cyan50?: string,
      cyan100?: string,
      cyan200?: string,
      cyan300?: string,
      cyan400?: string,
      cyan500?: string,
      cyan600?: string,
      cyan700?: string,
      cyan800?: string,
      cyan900?: string,
      sky50?: string,
      sky100?: string,
      sky200?: string,
      sky300?: string,
      sky400?: string,
      sky500?: string,
      sky600?: string,
      sky700?: string,
      sky800?: string,
      sky900?: string,
      blue50?: string,
      blue100?: string,
      blue200?: string,
      blue300?: string,
      blue400?: string,
      blue500?: string,
      blue600?: string,
      blue700?: string,
      blue800?: string,
      blue900?: string,
      indigo50?: string,
      indigo100?: string,
      indigo200?: string,
      indigo300?: string,
      indigo400?: string,
      indigo500?: string,
      indigo600?: string,
      indigo700?: string,
      indigo800?: string,
      indigo900?: string,
      violet50?: string,
      violet100?: string,
      violet200?: string,
      violet300?: string,
      violet400?: string,
      violet500?: string,
      violet600?: string,
      violet700?: string,
      violet800?: string,
      violet900?: string,
      purple50?: string,
      purple100?: string,
      purple200?: string,
      purple300?: string,
      purple400?: string,
      purple500?: string,
      purple600?: string,
      purple700?: string,
      purple800?: string,
      purple900?: string,
      fuchsia50?: string,
      fuchsia100?: string,
      fuchsia200?: string,
      fuchsia300?: string,
      fuchsia400?: string,
      fuchsia500?: string,
      fuchsia600?: string,
      fuchsia700?: string,
      fuchsia800?: string,
      fuchsia900?: string,
      pink50?: string,
      pink100?: string,
      pink200?: string,
      pink300?: string,
      pink400?: string,
      pink500?: string,
      pink600?: string,
      pink700?: string,
      pink800?: string,
      pink900?: string,
      rose50?: string,
      rose100?: string,
      rose200?: string,
      rose300?: string,
      rose400?: string,
      rose500?: string,
      rose600?: string,
      rose700?: string,
      rose800?: string,
      rose900?: string,
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
  interface PopoverProps {
    children?: React.ReactNode;
    content?: React.ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
    contentStyle?: StyleProp<ViewStyle> | undefined;
    popupStyle?: StyleProp<ViewStyle> | undefined;
  }
  
  /**
   * Component with useful selector with animation.
   * Remember to run init() method at app startup.
   */
  interface HorizontalSelectorProps<ItemT> {
    data: any[];
    initialIndex?: number;
    extraData?: any;
    renderItem?: ListRenderItem<ItemT> | null | undefined;
    renderIndicator?: ListRenderItem<ItemT> | null | undefined;
    itemStyle?: StyleProp<ViewStyle> | undefined;
    containerStyle?: StyleProp<ViewStyle> | undefined;
    selectorStyle?: StyleProp<ViewStyle> | undefined;
    indicatorStyle?: StyleProp<ViewStyle> | undefined;
    indicatorStyleWhenFirst?: StyleProp<ViewStyle> | undefined;
    indicatorStyleWhenLast?: StyleProp<ViewStyle> | undefined;
    animation?: string;
    animationDuration?: number;
    omitAnimationSelector?: boolean;
    onItemSelected?: ({item: any, index: number}) => void;
    onItemUnselected?: ({item: any, index: number}) => void;
  }
  
  // noinspection JSUnusedGlobalSymbols
  class Popover extends React.Component<PopoverProps> {
  }
  
  // noinspection JSUnusedGlobalSymbols
  class HorizontalSelector extends React.Component<HorizontalSelectorProps<any>, any> {
  }
  
  export {init, css, color, value, Popover, HorizontalSelector};
  
}

type NotDefault<T> = T extends 'default' ? never : T;
