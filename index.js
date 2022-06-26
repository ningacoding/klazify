import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import _get from 'lodash.get';
import _merge from 'lodash.merge';
import _keys from 'lodash.keys';
import _pick from 'lodash.pick';
import Color from 'color';
import defaultClasses from './classes.js';
import Popover from './utils/popover.js';

let classes;
let withLogs;

/**
 * This method must be run before css() method.
 * @param opts
 *
 * customClasses must be a function / method that returns an object, so EStyleSheet.value() is accesible
 *
 * @private
 */
const init = (opts = {
  values: undefined,
  extraGlobalVars: undefined,
  customClasses: () => undefined,
  logs: false,
}) => {

  // --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  // --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  // --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));

  withLogs = _get(opts, 'logs');

  const defaultTheme = {
    theme: 'default',
    defaultFontFamily: '',

    blue: '#0d6efd',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#d63384',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#198754',
    teal: '#20c997',
    cyan: '#0dcaf0',
    gray: '#6c757d',
    gray1: '#ECEFF4',
    gray2: '#d6dfe9',
    gray3: '#A7B3C3',
    gray4: '#7A8796',
    gray5: '#343a40',
    grayDark: '#343a40',
    primary: '#0d6efd',
    secondary: '#6c757d',
    success: '#198754',
    info: '#0dcaf0',
    warning: '#ffc107',
    danger: '#dc3545',
    white: '#fff',
    light: '#f8f9fa',
    dark: '#212529',
    black: '#000',

    text: '#000',
    textLight: '#FFF',
    bgBody: '#f8f9fa',

    btnPaddingHorizontal: '1rem',
    btnPaddingVertical: '0.75rem',
  };
  const colors = _merge(defaultTheme, _get(opts, 'values'));
  if (withLogs) {
    console.log('klazify', 'colors', colors);
  }
  const defaultGlobalVars = {

    $rem: 12,
    $theme: _get(colors, 'theme'),
    $defaultFontFamily: _get(colors, 'defaultFontFamily'),

    $blue: _get(colors, 'blue'),
    $indigo: _get(colors, 'indigo'),
    $purple: _get(colors, 'purple'),
    $pink: _get(colors, 'pink'),
    $red: _get(colors, 'red'),
    $orange: _get(colors, 'orange'),
    $yellow: _get(colors, 'yellow'),
    $green: _get(colors, 'green'),
    $teal: _get(colors, 'teal'),
    $cyan: _get(colors, 'cyan'),
    $gray: _get(colors, 'gray'),
    $gray1: _get(colors, 'gray1'),
    $gray2: _get(colors, 'gray2'),
    $gray3: _get(colors, 'gray3'),
    $gray4: _get(colors, 'gray4'),
    $gray5: _get(colors, 'gray5'),
    $grayDark: _get(colors, 'grayDark'),
    $primary: _get(colors, 'primary'),
    $secondary: _get(colors, 'secondary'),
    $success: _get(colors, 'success'),
    $info: _get(colors, 'info'),
    $warning: _get(colors, 'warning'),
    $danger: _get(colors, 'danger'),

    $white: _get(colors, 'white'),
    $light: _get(colors, 'light'),
    $dark: _get(colors, 'dark'),
    $black: _get(colors, 'black'),
    $text: _get(colors, 'text'),
    $textLight: _get(colors, 'textLight'),
    $bgBody: _get(colors, 'bgBody'),
    $btnPaddingHorizontal: _get(colors, 'btnPaddingHorizontal'),
    $btnPaddingVertical: _get(colors, 'btnPaddingVertical'),

    $slate50: '#f8fafc',
    $slate100: '#f1f5f9',
    $slate200: '#e2e8f0',
    $slate300: '#cbd5e1',
    $slate400: '#94a3b8',
    $slate500: '#64748b',
    $slate600: '#475569',
    $slate700: '#334155',
    $slate800: '#1e293b',
    $slate900: '#0f172a',
    $gray50: '#f9fafb',
    $gray100: '#f3f4f6',
    $gray200: '#e5e7eb',
    $gray300: '#d1d5db',
    $gray400: '#9ca3af',
    $gray500: '#6b7280',
    $gray600: '#4b5563',
    $gray700: '#374151',
    $gray800: '#1f2937',
    $gray900: '#111827',
    $zinc50: '#fafafa',
    $zinc100: '#f4f4f5',
    $zinc200: '#e4e4e7',
    $zinc300: '#d4d4d8',
    $zinc400: '#a1a1aa',
    $zinc500: '#71717a',
    $zinc600: '#52525b',
    $zinc700: '#3f3f46',
    $zinc800: '#27272a',
    $zinc900: '#18181b',
    $neutral50: '#fafafa',
    $neutral100: '#f5f5f5',
    $neutral200: '#e5e5e5',
    $neutral300: '#d4d4d4',
    $neutral400: '#a3a3a3',
    $neutral500: '#737373',
    $neutral600: '#525252',
    $neutral700: '#404040',
    $neutral800: '#262626',
    $neutral900: '#171717',
    $stone50: '#fafaf9',
    $stone100: '#f5f5f4',
    $stone200: '#e7e5e4',
    $stone300: '#d6d3d1',
    $stone400: '#a8a29e',
    $stone500: '#78716c',
    $stone600: '#57534e',
    $stone700: '#44403c',
    $stone800: '#292524',
    $stone900: '#1c1917',
    $red50: '#fef2f2',
    $red100: '#fee2e2',
    $red200: '#fecaca',
    $red300: '#fca5a5',
    $red400: '#f87171',
    $red500: '#ef4444',
    $red600: '#dc2626',
    $red700: '#b91c1c',
    $red800: '#991b1b',
    $red900: '#7f1d1d',
    $orange50: '#fff7ed',
    $orange100: '#ffedd5',
    $orange200: '#fed7aa',
    $orange300: '#fdba74',
    $orange400: '#fb923c',
    $orange500: '#f97316',
    $orange600: '#ea580c',
    $orange700: '#c2410c',
    $orange800: '#9a3412',
    $orange900: '#7c2d12',
    $amber50: '#fffbeb',
    $amber100: '#fef3c7',
    $amber200: '#fde68a',
    $amber300: '#fcd34d',
    $amber400: '#fbbf24',
    $amber500: '#f59e0b',
    $amber600: '#d97706',
    $amber700: '#b45309',
    $amber800: '#92400e',
    $amber900: '#78350f',
    $yellow50: '#fefce8',
    $yellow100: '#fef9c3',
    $yellow200: '#fef08a',
    $yellow300: '#fde047',
    $yellow400: '#facc15',
    $yellow500: '#eab308',
    $yellow600: '#ca8a04',
    $yellow700: '#a16207',
    $yellow800: '#854d0e',
    $yellow900: '#713f12',
    $lime50: '#f7fee7',
    $lime100: '#ecfccb',
    $lime200: '#d9f99d',
    $lime300: '#bef264',
    $lime400: '#a3e635',
    $lime500: '#84cc16',
    $lime600: '#65a30d',
    $lime700: '#4d7c0f',
    $lime800: '#3f6212',
    $lime900: '#365314',
    $green50: '#f0fdf4',
    $green100: '#dcfce7',
    $green200: '#bbf7d0',
    $green300: '#86efac',
    $green400: '#4ade80',
    $green500: '#22c55e',
    $green600: '#16a34a',
    $green700: '#15803d',
    $green800: '#166534',
    $green900: '#14532d',
    $emerald50: '#ecfdf5',
    $emerald100: '#d1fae5',
    $emerald200: '#a7f3d0',
    $emerald300: '#6ee7b7',
    $emerald400: '#34d399',
    $emerald500: '#10b981',
    $emerald600: '#059669',
    $emerald700: '#047857',
    $emerald800: '#065f46',
    $emerald900: '#064e3b',
    $teal50: '#f0fdfa',
    $teal100: '#ccfbf1',
    $teal200: '#99f6e4',
    $teal300: '#5eead4',
    $teal400: '#2dd4bf',
    $teal500: '#14b8a6',
    $teal600: '#0d9488',
    $teal700: '#0f766e',
    $teal800: '#115e59',
    $teal900: '#134e4a',
    $cyan50: '#ecfeff',
    $cyan100: '#cffafe',
    $cyan200: '#a5f3fc',
    $cyan300: '#67e8f9',
    $cyan400: '#22d3ee',
    $cyan500: '#06b6d4',
    $cyan600: '#0891b2',
    $cyan700: '#0e7490',
    $cyan800: '#155e75',
    $cyan900: '#164e63',
    $sky50: '#f0f9ff',
    $sky100: '#e0f2fe',
    $sky200: '#bae6fd',
    $sky300: '#7dd3fc',
    $sky400: '#38bdf8',
    $sky500: '#0ea5e9',
    $sky600: '#0284c7',
    $sky700: '#0369a1',
    $sky800: '#075985',
    $sky900: '#0c4a6e',
    $blue50: '#eff6ff',
    $blue100: '#dbeafe',
    $blue200: '#bfdbfe',
    $blue300: '#93c5fd',
    $blue400: '#60a5fa',
    $blue500: '#3b82f6',
    $blue600: '#2563eb',
    $blue700: '#1d4ed8',
    $blue800: '#1e40af',
    $blue900: '#1e3a8a',
    $indigo50: '#eef2ff',
    $indigo100: '#e0e7ff',
    $indigo200: '#c7d2fe',
    $indigo300: '#a5b4fc',
    $indigo400: '#818cf8',
    $indigo500: '#6366f1',
    $indigo600: '#4f46e5',
    $indigo700: '#4338ca',
    $indigo800: '#3730a3',
    $indigo900: '#312e81',
    $violet50: '#f5f3ff',
    $violet100: '#ede9fe',
    $violet200: '#ddd6fe',
    $violet300: '#c4b5fd',
    $violet400: '#a78bfa',
    $violet500: '#8b5cf6',
    $violet600: '#7c3aed',
    $violet700: '#6d28d9',
    $violet800: '#5b21b6',
    $violet900: '#4c1d95',
    $purple50: '#faf5ff',
    $purple100: '#f3e8ff',
    $purple200: '#e9d5ff',
    $purple300: '#d8b4fe',
    $purple400: '#c084fc',
    $purple500: '#a855f7',
    $purple600: '#9333ea',
    $purple700: '#7e22ce',
    $purple800: '#6b21a8',
    $purple900: '#581c87',
    $fuchsia50: '#fdf4ff',
    $fuchsia100: '#fae8ff',
    $fuchsia200: '#f5d0fe',
    $fuchsia300: '#f0abfc',
    $fuchsia400: '#e879f9',
    $fuchsia500: '#d946ef',
    $fuchsia600: '#c026d3',
    $fuchsia700: '#a21caf',
    $fuchsia800: '#86198f',
    $fuchsia900: '#701a75',
    $pink50: '#fdf2f8',
    $pink100: '#fce7f3',
    $pink200: '#fbcfe8',
    $pink300: '#f9a8d4',
    $pink400: '#f472b6',
    $pink500: '#ec4899',
    $pink600: '#db2777',
    $pink700: '#be185d',
    $pink800: '#9d174d',
    $pink900: '#831843',
    $rose50: '#fff1f2',
    $rose100: '#ffe4e6',
    $rose200: '#fecdd3',
    $rose300: '#fda4af',
    $rose400: '#fb7185',
    $rose500: '#f43f5e',
    $rose600: '#e11d48',
    $rose700: '#be123c',
    $rose800: '#9f1239',
    $rose900: '#881337',
  };
  /**
   * extraGlobalVars will override existing vars in defaultGlobalVars if some var name is exactly equal.
   * @type {any}
   */
  const rawGlobalVars = _merge(defaultGlobalVars, _get(opts, 'extraGlobalVars'));
  if (withLogs) {
    console.log('klazify', 'rawGlobalVars', rawGlobalVars);
  }
  EStyleSheet.build(rawGlobalVars);
  let customClassesMethod = _get(opts, 'customClasses');
  if (typeof customClassesMethod !== 'function') {
    if (!!customClassesMethod) {
      console.log('klazify -> warning: customClasses must be a method / function. (ignoring value).')
    }
    customClassesMethod = () => ({});
  }
  const allClasses = _merge(defaultClasses(), customClassesMethod());
  if (withLogs) {
    console.log('klazify', 'available classes ->\n', _keys(allClasses).join(','));
  }
  classes = EStyleSheet.create(allClasses);
};

/**
 * Applies all rules for StyleSheets (from react-native)
 * and EStyleSheets (from react-native-extended-stylesheet)
 *
 * @param styles: string with words (name of classes) separated by spaces
 * @param styles: object with styles to create
 * @returns {EStyleSheet.AnyObject}
 */
const css = (styles) => {
  if (typeof styles === 'string') {
    const picked = _pick(classes, styles.split(' '));
    if (withLogs) {
      console.log('klazify', '\nclasses input -> ', styles, '\nstyles ->\n', picked);
    }
    return _keys(picked).reduce((update, previous) => ({...update, ...picked[previous]}), {});
  }
  if (typeof styles === 'object') {
    return EStyleSheet.create({target: styles}).target;
  }
};
const value = (variableName) => EStyleSheet.value(variableName);
const color = (variableName) => Color(value(variableName));

export {css, init, color, value, Popover};
