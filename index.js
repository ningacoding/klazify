import EStyleSheet from 'react-native-extended-stylesheet';
import _get from 'lodash.get';
import _merge from 'lodash.merge';
import _keys from 'lodash.keys';
import _pick from 'lodash.pick';
import defaultClasses from './classes';
import Popover from './utils/popover';
import Color from 'color';

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
    const customClassesMethod = _get(opts, 'customClasses');
    if (!!customClassesMethod && typeof customClassesMethod !== 'function') {
        throw new Error('customClasses must be a method / function.');
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
