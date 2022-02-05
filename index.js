import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash';
import defaultClasses from './classes';

let classes;
let withLogs;

/**
 * This method must be run before css() method.
 * @param opts
 * @private
 */
const init = (opts = {
    theme: undefined,
    extraGlobalVars: undefined,
    customClasses: () => undefined,
    logs: false,
}) => {

    // --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    // --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    // --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));

    withLogs = _.get(opts, 'logs');

    const defaultColors = {
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
        'gray1': '#ECEFF4',
        'gray2': '#d6dfe9',
        'gray3': '#A7B3C3',
        'gray4': '#7A8796',
        'gray5': '#343a40',
        'gray-dark': '#343a40',
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
        'text-light': '#FFF',
        'text-50': 'rgba(0,0,0,0.5)',
        'text-light-50': 'rgba(255,255,255,0.5)',
    };
    const colors = _.merge(defaultColors, _.get(opts, 'theme'));
    if (withLogs) {
        console.log('klazify', 'colors', colors);
    }
    const defaultGlobalVars = {
        $rem: 8,
        $blue: _.get(colors, 'blue'),
        $indigo: _.get(colors, 'indigo'),
        $purple: _.get(colors, 'purple'),
        $pink: _.get(colors, 'pink'),
        $red: _.get(colors, 'red'),
        $orange: _.get(colors, 'orange'),
        $yellow: _.get(colors, 'yellow'),
        $green: _.get(colors, 'green'),
        $teal: _.get(colors, 'teal'),
        $cyan: _.get(colors, 'cyan'),
        $gray: _.get(colors, 'gray'),
        $gray1: _.get(colors, 'gray1'),
        $gray2: _.get(colors, 'gray2'),
        $gray3: _.get(colors, 'gray3'),
        $gray4: _.get(colors, 'gray4'),
        $gray5: _.get(colors, 'gray5'),
        '$gray-dark': _.get(colors, 'gray-dark'),
        $primary: _.get(colors, 'primary'),
        $secondary: _.get(colors, 'secondary'),
        $success: _.get(colors, 'success'),
        $info: _.get(colors, 'info'),
        $warning: _.get(colors, 'warning'),
        $danger: _.get(colors, 'danger'),
        $white: _.get(colors, 'white'),
        $light: _.get(colors, 'light'),
        $dark: _.get(colors, 'dark'),
        $black: _.get(colors, 'black'),
        $text: _.get(colors, 'text'),
        '$text-light': _.get(colors, 'text-light'),
        '$text-50': _.get(colors, 'text-50'),
        '$text-light-50': _.get(colors, 'text-light-50'),
    };
    /**
     * extraGlobalVars will override existing vars in defaultGlobalVars if some var name is exactly equal.
     * @type {any}
     */
    const rawGlobalVars = _.merge(defaultGlobalVars, _.get(opts, 'extraGlobalVars'));
    if (withLogs) {
        console.log('klazify', 'rawGlobalVars', rawGlobalVars);
    }
    EStyleSheet.build(rawGlobalVars);
    const customClassesMethod = _.get(opts, 'customClasses');
    if (typeof customClassesMethod !== 'function') {
        throw new Error('customClasses must be a method / function.');
    }
    const allClasses = _.merge(defaultClasses, customClassesMethod());
    if (withLogs) {
        console.log('klazify', 'available classes ->\n', _.keys(allClasses).join(','));
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
        const picked = _.pick(classes, styles.split(' '));
        if (withLogs) {
            console.log('klazify', 'classes input -> ', styles, 'styles ->\n', picked);
        }
        return _.keys(picked).reduce((update, previous) => ({...update, ...picked[previous]}), {});
    }
    if (typeof styles === 'object') {
        return EStyleSheet.create({target: styles}).target;
    }
};

export {css, init, EStyleSheet};
