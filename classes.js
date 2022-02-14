import Color from 'color';
import EStyleSheet from 'react-native-extended-stylesheet';
import {css} from 'klazify';

/**
 * More info about extended stylesheet visit:
 * @link https://github.com/vitalets/react-native-extended-stylesheet
 */

const defaultClasses = () => ({
    // Alerts
    'text-alert-blue': {
        color: Color(EStyleSheet.value('$blue')).darken(0.48).hex(),
    },
    'alert-blue': {
        backgroundColor: Color(EStyleSheet.value('$blue')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$blue')).lighten(0.7).hex(),
    },
    'text-alert-indigo': {
        color: Color(EStyleSheet.value('$indigo')).darken(0.48).hex(),
    },
    'alert-indigo': {
        backgroundColor: Color(EStyleSheet.value('$indigo')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$indigo')).lighten(0.7).hex(),
    },
    'text-alert-purple': {
        color: Color(EStyleSheet.value('$purple')).darken(0.48).hex(),
    },
    'alert-purple': {
        backgroundColor: Color(EStyleSheet.value('$purple')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$purple')).lighten(0.7).hex(),
    },

    'text-alert-pink': {
        color: Color(EStyleSheet.value('$pink')).darken(0.48).hex(),
    },
    'alert-pink': {
        backgroundColor: Color(EStyleSheet.value('$pink')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$pink')).lighten(0.7).hex(),
    },

    'text-alert-red': {
        color: Color(EStyleSheet.value('$red')).darken(0.48).hex(),
    },
    'alert-red': {
        backgroundColor: Color(EStyleSheet.value('$red')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$red')).lighten(0.7).hex(),
    },

    'text-alert-orange': {
        color: Color(EStyleSheet.value('$orange')).darken(0.48).hex(),
    },
    'alert-orange': {
        backgroundColor: Color(EStyleSheet.value('$orange')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$orange')).lighten(0.7).hex(),
    },

    'text-alert-yellow': {
        color: Color(EStyleSheet.value('$yellow')).darken(0.48).hex(),
    },
    'alert-yellow': {
        backgroundColor: Color(EStyleSheet.value('$yellow')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$yellow')).lighten(0.7).hex(),
    },

    'text-alert-green': {
        color: Color(EStyleSheet.value('$green')).darken(0.48).hex(),
    },
    'alert-green': {
        backgroundColor: Color(EStyleSheet.value('$green')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$green')).lighten(0.7).hex(),
    },

    'text-alert-teal': {
        color: Color(EStyleSheet.value('$teal')).darken(0.48).hex(),
    },
    'alert-teal': {
        backgroundColor: Color(EStyleSheet.value('$teal')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$teal')).lighten(0.7).hex(),
    },

    'text-alert-cyan': {
        color: Color(EStyleSheet.value('$cyan')).darken(0.48).hex(),
    },
    'alert-cyan': {
        backgroundColor: Color(EStyleSheet.value('$cyan')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$cyan')).lighten(0.7).hex(),
    },

    'text-alert-gray': {
        color: Color(EStyleSheet.value('$gray')).darken(0.48).hex(),
    },
    'alert-gray': {
        backgroundColor: Color(EStyleSheet.value('$gray')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$gray')).lighten(0.7).hex(),
    },

    'text-alert-gray-dark': {
        color: Color(EStyleSheet.value('$grayDark')).darken(0.48).hex(),
    },
    'alert-gray-dark': {
        backgroundColor: Color(EStyleSheet.value('$grayDark')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$grayDark')).lighten(0.7).hex(),
    },

    'text-alert-primary': {
        color: Color(EStyleSheet.value('$primary')).darken(0.48).hex(),
    },
    'alert-primary': {
        backgroundColor: Color(EStyleSheet.value('$primary')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$primary')).lighten(0.7).hex(),
    },

    'text-alert-secondary': {
        color: Color(EStyleSheet.value('$secondary')).darken(0.48).hex(),
    },
    'alert-secondary': {
        backgroundColor: Color(EStyleSheet.value('$secondary')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$secondary')).lighten(0.7).hex(),
    },

    'text-alert-success': {
        color: Color(EStyleSheet.value('$success')).darken(0.48).hex(),
    },
    'alert-success': {
        backgroundColor: Color(EStyleSheet.value('$success')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$success')).lighten(0.7).hex(),
    },

    'text-alert-info': {
        color: Color(EStyleSheet.value('$info')).darken(0.48).hex(),
    },
    'alert-info': {
        backgroundColor: Color(EStyleSheet.value('$info')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$info')).lighten(0.7).hex(),
    },

    'text-alert-warning': {
        color: Color(EStyleSheet.value('$warning')).darken(0.48).hex(),
    },
    'alert-warning': {
        backgroundColor: Color(EStyleSheet.value('$warning')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$warning')).lighten(0.7).hex(),
    },

    'text-alert-danger': {
        color: Color(EStyleSheet.value('$danger')).darken(0.48).hex(),
    },
    'alert-danger': {
        backgroundColor: Color(EStyleSheet.value('$danger')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$danger')).lighten(0.7).hex(),
    },

    'text-alert-light': {
        color: Color(EStyleSheet.value('$light')).darken(0.48).hex(),
    },
    'alert-light': {
        backgroundColor: Color(EStyleSheet.value('$light')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$light')).lighten(0.7).hex(),
    },

    'text-alert-dark': {
        color: Color(EStyleSheet.value('$dark')).darken(0.48).hex(),
    },
    'alert-dark': {
        backgroundColor: Color(EStyleSheet.value('$dark')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$dark')).lighten(0.7).hex(),
    },

    'text-alert-black': {
        color: '$white',
    },
    'alert-black': {
        backgroundColor: Color(EStyleSheet.value('$black')).lighten(0.8).hex(),
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$black')).lighten(0.7).hex(),
    },

    // Borders

    /**
     * Rounded
     */
    'rounded': {borderRadius: '9999rem'},
    'rounded-1': {borderRadius: 1},
    'rounded-2': {borderRadius: 2},
    'rounded-3': {borderRadius: 3},
    'rounded-4': {borderRadius: 4},
    'rounded-5': {borderRadius: 5},
    'rounded-6': {borderRadius: 6},
    'rounded-7': {borderRadius: 7},
    'rounded-8': {borderRadius: 8},
    'rounded-10': {borderRadius: 10},
    'rounded-16': {borderRadius: 8},
    'rounded-24': {borderRadius: 8},
    'rounded-32': {borderRadius: 8},

    'rounded-1-rem': {borderRadius: '1rem'},
    'rounded-2-rem': {borderRadius: '2rem'},
    'rounded-3-rem': {borderRadius: '3rem'},
    'rounded-4-rem': {borderRadius: '4rem'},
    'rounded-5-rem': {borderRadius: '5rem'},
    'rounded-6-rem': {borderRadius: '6rem'},
    'rounded-7-rem': {borderRadius: '7rem'},
    'rounded-8-rem': {borderRadius: '8rem'},

    'rounded-t-1': {borderTopLeftRadius: 1, borderTopRightRadius: 1},
    'rounded-t-2': {borderTopLeftRadius: 2, borderTopRightRadius: 2},
    'rounded-t-3': {borderTopLeftRadius: 3, borderTopRightRadius: 3},
    'rounded-t-4': {borderTopLeftRadius: 4, borderTopRightRadius: 4},
    'rounded-t-5': {borderTopLeftRadius: 5, borderTopRightRadius: 5},
    'rounded-t-6': {borderTopLeftRadius: 6, borderTopRightRadius: 6},
    'rounded-t-7': {borderTopLeftRadius: 7, borderTopRightRadius: 7},
    'rounded-t-8': {borderTopLeftRadius: 8, borderTopRightRadius: 8},

    'rounded-b-1': {borderBottomLeftRadius: 1, borderBottomRightRadius: 1},
    'rounded-b-2': {borderBottomLeftRadius: 2, borderBottomRightRadius: 2},
    'rounded-b-3': {borderBottomLeftRadius: 3, borderBottomRightRadius: 3},
    'rounded-b-4': {borderBottomLeftRadius: 4, borderBottomRightRadius: 4},
    'rounded-b-5': {borderBottomLeftRadius: 5, borderBottomRightRadius: 5},
    'rounded-b-6': {borderBottomLeftRadius: 6, borderBottomRightRadius: 6},
    'rounded-b-7': {borderBottomLeftRadius: 7, borderBottomRightRadius: 7},
    'rounded-b-8': {borderBottomLeftRadius: 8, borderBottomRightRadius: 8},

    'rounded-l-1': {borderBottomLeftRadius: 1, borderTopLeftRadius: 1},
    'rounded-r-1': {borderBottomRightRadius: 1, borderTopRightRadius: 1},
    'rounded-tl-1': {borderTopLeftRadius: 1},
    'rounded-tr-1': {borderTopRightRadius: 1},
    'rounded-bl-1': {borderBottomLeftRadius: 1},
    'rounded-br-1': {borderBottomRightRadius: 1},
    'rounded-l-2': {borderBottomLeftRadius: 2, borderTopLeftRadius: 2},
    'rounded-r-2': {borderBottomRightRadius: 2, borderTopRightRadius: 2},
    'rounded-tl-2': {borderTopLeftRadius: 2},
    'rounded-tr-2': {borderTopRightRadius: 2},
    'rounded-bl-2': {borderBottomLeftRadius: 2},
    'rounded-br-2': {borderBottomRightRadius: 2},
    'rounded-l-3': {borderBottomLeftRadius: 3, borderTopLeftRadius: 3},
    'rounded-r-3': {borderBottomRightRadius: 3, borderTopRightRadius: 3},
    'rounded-tl-3': {borderTopLeftRadius: 3},
    'rounded-tr-3': {borderTopRightRadius: 3},
    'rounded-bl-3': {borderBottomLeftRadius: 3},
    'rounded-br-3': {borderBottomRightRadius: 3},
    'rounded-l-4': {borderBottomLeftRadius: 4, borderTopLeftRadius: 4},
    'rounded-r-4': {borderBottomRightRadius: 4, borderTopRightRadius: 4},
    'rounded-tl-4': {borderTopLeftRadius: 4},
    'rounded-tr-4': {borderTopRightRadius: 4},
    'rounded-bl-4': {borderBottomLeftRadius: 4},
    'rounded-br-4': {borderBottomRightRadius: 4},
    'rounded-l-5': {borderBottomLeftRadius: 5, borderTopLeftRadius: 5},
    'rounded-r-5': {borderBottomRightRadius: 5, borderTopRightRadius: 5},
    'rounded-tl-5': {borderTopLeftRadius: 5},
    'rounded-tr-5': {borderTopRightRadius: 5},
    'rounded-bl-5': {borderBottomLeftRadius: 5},
    'rounded-br-5': {borderBottomRightRadius: 5},
    'rounded-l-6': {borderBottomLeftRadius: 6, borderTopLeftRadius: 6},
    'rounded-r-6': {borderBottomRightRadius: 6, borderTopRightRadius: 6},
    'rounded-tl-6': {borderTopLeftRadius: 6},
    'rounded-tr-6': {borderTopRightRadius: 6},
    'rounded-bl-6': {borderBottomLeftRadius: 6},
    'rounded-br-6': {borderBottomRightRadius: 6},
    'rounded-l-7': {borderBottomLeftRadius: 7, borderTopLeftRadius: 7},
    'rounded-r-7': {borderBottomRightRadius: 7, borderTopRightRadius: 7},
    'rounded-tl-7': {borderTopLeftRadius: 7},
    'rounded-tr-7': {borderTopRightRadius: 7},
    'rounded-bl-7': {borderBottomLeftRadius: 7},
    'rounded-br-7': {borderBottomRightRadius: 7},
    'rounded-l-8': {borderBottomLeftRadius: 8, borderTopLeftRadius: 8},
    'rounded-r-8': {borderBottomRightRadius: 8, borderTopRightRadius: 8},
    'rounded-tl-8': {borderTopLeftRadius: 8},
    'rounded-tr-8': {borderTopRightRadius: 8},
    'rounded-bl-8': {borderBottomLeftRadius: 8},
    'rounded-br-8': {borderBottomRightRadius: 8},

    'rounded-top-x-5': {borderTopLeftRadius: 5, borderTopRightRadius: 5},
    'rounded-top-x-2rem': {borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem'},
    'rounded-bottom-x-2rem': {borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem'},


    // Breadcrumbs


    // Button Groups


    // Button Modifiers

    'btn-block': {
        flex: 1,
    },
    'link': {
        textDecorationLine: 'underline',
        color: '$primary',
    },
    'btn-padding': {
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-lg': {
        paddingHorizontal: '$btnPaddingHorizontal * 1.5',
        paddingVertical: '$btnPaddingVertical * 1.5',
    },
    'btn-sm': {
        paddingHorizontal: '$btnPaddingHorizontal / 1.5',
        paddingVertical: '$btnPaddingVertical / 1.5',
    },


    // Buttons
    'btn': {
        backgroundColor: '$primary',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$primary')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },


    'btn-outline': {
        borderWidth: 1,
        borderColor: '$primary',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-custom': {
        borderWidth: 1,
        borderColor: '$danger',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-blue': {
        borderWidth: 1,
        borderColor: '$blue',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-indigo': {
        borderWidth: 1,
        borderColor: '$indigo',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-purple': {
        borderWidth: 1,
        borderColor: '$purple',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-pink': {
        borderWidth: 1,
        borderColor: '$pink',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-orange': {
        borderWidth: 1,
        borderColor: '$orange',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-yellow': {
        borderWidth: 1,
        borderColor: '$yellow',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-green': {
        borderWidth: 1,
        borderColor: '$green',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-teal': {
        borderWidth: 1,
        borderColor: '$teal',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-cyan': {
        borderWidth: 1,
        borderColor: '$cyan',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-gray': {
        borderWidth: 1,
        borderColor: '$gray',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-gray-1': {
        borderWidth: 1,
        borderColor: '$gray1',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-gray-2': {
        borderWidth: 1,
        borderColor: '$gray2',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-gray-3': {
        borderWidth: 1,
        borderColor: '$gray3',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-gray-4': {
        borderWidth: 1,
        borderColor: '$gray4',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-gray-5': {
        borderWidth: 1,
        borderColor: '$gray5',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-gray-dark': {
        borderWidth: 1,
        borderColor: '$grayDark',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-primary': {
        borderWidth: 1,
        borderColor: '$primary',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-secondary': {
        borderWidth: 1,
        borderColor: '$secondary',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-success': {
        borderWidth: 1,
        borderColor: '$success',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-info': {
        borderWidth: 1,
        borderColor: '$info',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-red': {
        borderWidth: 1,
        borderColor: '$red',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-warning': {
        borderWidth: 1,
        borderColor: '$warning',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-danger': {
        borderWidth: 1,
        borderColor: '$danger',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-white': {
        backgroundColor: '$white',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$white')).darken(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-light': {
        borderWidth: 1,
        borderColor: '$light',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-dark': {
        borderWidth: 1,
        borderColor: '$dark',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-outline-black': {
        borderWidth: 1,
        borderColor: '$black',
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },

    'btn-custom': {
        backgroundColor: '$danger',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$danger')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-blue': {
        backgroundColor: '$blue',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$blue')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-indigo': {
        backgroundColor: '$indigo',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$indigo')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-purple': {
        backgroundColor: '$purple',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$purple')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-pink': {
        backgroundColor: '$pink',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$pink')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-orange': {
        backgroundColor: '$orange',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$orange')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-yellow': {
        backgroundColor: '$yellow',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$yellow')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-green': {
        backgroundColor: '$green',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$green')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-teal': {
        backgroundColor: '$teal',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$teal')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-cyan': {
        backgroundColor: '$cyan',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$cyan')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-gray': {
        backgroundColor: '$gray',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$gray')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-gray-1': {
        backgroundColor: '$gray1',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$gray1')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-gray-2': {
        backgroundColor: '$gray2',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$gray2')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-gray-3': {
        backgroundColor: '$gray3',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$gray3')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-gray-4': {
        backgroundColor: '$gray4',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$gray4')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-gray-5': {
        backgroundColor: '$gray5',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$gray5')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-gray-dark': {
        backgroundColor: '$grayDark',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$grayDark')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-primary': {
        backgroundColor: '$primary',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$primary')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-secondary': {
        backgroundColor: '$secondary',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$secondary')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-success': {
        backgroundColor: '$success',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$success')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-info': {
        backgroundColor: '$info',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$info')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-red': {
        backgroundColor: '$red',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$red')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-warning': {
        backgroundColor: '$warning',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$warning')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-danger': {
        backgroundColor: '$danger',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$danger')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-white': {
        backgroundColor: '$white',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$white')).darken(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-light': {
        backgroundColor: '$light',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$light')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-dark': {
        backgroundColor: '$dark',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$dark')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },
    'btn-black': {
        backgroundColor: '$black',
        borderWidth: 1,
        borderColor: Color(EStyleSheet.value('$black')).lighten(0.32).hex(),
        borderRadius: 5,
        paddingHorizontal: '$btnPaddingHorizontal',
        paddingVertical: '$btnPaddingVertical',
    },

    // Cards
    'card': {
        backgroundColor: Color(EStyleSheet.value('$bgBody')).lighten(0.2).hex(),
        borderRadius: 5,
        shadowOpacity: 0.16,
        shadowRadius: 4,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        elevation: 4,
    },


    // Carousel


    // Collapse


    // Colors
    'bg-transparent': {backgroundColor: 'transparent'},
    'bg-blue': {backgroundColor: '$blue'},
    'bg-indigo': {backgroundColor: '$indigo'},
    'bg-purple': {backgroundColor: '$purple'},
    'bg-pink': {backgroundColor: '$pink'},
    'bg-red': {backgroundColor: '$red'},
    'bg-orange': {backgroundColor: '$orange'},
    'bg-yellow': {backgroundColor: '$yellow'},
    'bg-green': {backgroundColor: '$green'},
    'bg-teal': {backgroundColor: '$teal'},
    'bg-cyan': {backgroundColor: '$cyan'},
    'bg-gray': {backgroundColor: '$gray'},
    'bg-gray-1': {backgroundColor: '$gray1'},
    'bg-gray-2': {backgroundColor: '$gray2'},
    'bg-gray-3': {backgroundColor: '$gray3'},
    'bg-gray-4': {backgroundColor: '$gray4'},
    'bg-gray-5': {backgroundColor: '$gray5'},
    'bg-gray-dark': {backgroundColor: '$grayDark'},
    'bg-primary': {backgroundColor: '$primary'},
    'bg-secondary': {backgroundColor: '$secondary'},
    'bg-success': {backgroundColor: '$success'},
    'bg-info': {backgroundColor: '$info'},
    'bg-warning': {backgroundColor: '$warning'},
    'bg-danger': {backgroundColor: '$danger'},
    'bg-white': {backgroundColor: '$white'},
    'bg-light': {backgroundColor: '$light'},
    'bg-dark': {backgroundColor: '$dark'},
    'bg-black': {backgroundColor: '$black'},

    'bg-body': {backgroundColor: '$bgBody'},
    'bg-popover': {backgroundColor: Color(EStyleSheet.value('$bgBody')).lighten(0.75).hex()},
    'bg-panel': {backgroundColor: Color(EStyleSheet.value('$bgBody')).lighten(0.4).hex()},
    'bg-panel-50': {backgroundColor: Color(EStyleSheet.value('$bgBody')).lighten(0.2).hex()},


    // Custom Forms


    // Display


    // Dropdowns


    // Figure


    // Flexbox
    'justify-content-between': {
        justifyContent: 'space-between',
    },
    'align-items-start': {
        justifyContent: 'flex-start',
    },
    'align-items-end': {
        justifyContent: 'flex-end',
    },
    'align-items-center': {
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    'align-self-start': {
        alignSelf: 'flex-start',
    },
    'align-self-center': {
        alignSelf: 'center',
    },
    'align-self-end': {
        alignSelf: 'flex-end',
    },


    'justify-content-center': {
        justifyContent: 'center',
    },


    // Form Input Groups

    'input-active': {
        borderWidth: 1,
        borderColor: '$primary',
    },
    'input-error': {
        borderWidth: 1,
        borderColor: '$danger',
    },
    'input': {
        borderWidth: 1,
        borderColor: '$gray2',
        paddingHorizontal: '1rem',
        paddingVertical: '0.75rem',
        margin: 0,
    },
    'text-area': {
        borderWidth: 1,
        borderColor: '$gray2',
        paddingHorizontal: '1rem',
        paddingVertical: '0.75rem',
        margin: 0,
        maxHeight: 100,
    },


    // Forms


    // Grid
    'col': {
        flex: 1,
        flexDirection: 'column',
    },
    'col-auto': {
        flexDirection: 'column',
    },
    'col-1': {
        flex: 1,
    },
    'col-10': {
        flex: 10,
    },
    'col-11': {
        flex: 11,
    },
    'col-12': {
        flex: 12,
    },
    'col-2': {
        flex: 2,
    },
    'col-3': {
        flex: 3,
    },
    'col-4': {
        flex: 4,
    },
    'col-5': {
        flex: 5,
    },
    'col-6': {
        flex: 6,
    },
    'col-7': {
        flex: 7,
    },
    'col-8': {
        flex: 8,
    },
    'col-9': {
        flex: 9,
    },


    'container': {
        flex: 1,
        backgroundColor: '$white',
    },


    'row': {
        flexDirection: 'row',
    },


    // Images


    // Jumbotron


    // List Group


    // List group


    // Media Objects


    // Misc


    'shadow': {
        shadowOpacity: 0.16,
        shadowRadius: 4,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        elevation: 4,
    },
    'shadow-sm': {
        shadowOpacity: 0.16,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        elevation: 2,
    },
    'shadow-md': {
        shadowOpacity: 0.16,
        shadowRadius: 6,
        shadowOffset: {
            height: 6,
            width: 0,
        },
        elevation: 6,
    },
    'shadow-lg': {
        shadowOpacity: 0.16,
        shadowRadius: 8,
        shadowOffset: {
            height: 8,
            width: 0,
        },
        elevation: 8,
    },
    'shadow-none': {
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 0,
    },


    // Modal


    // Modals


    // Navbar


    // Navs


    'tab': {
        marginBottom: -1,
    },
    'tab-active': {
        marginBottom: -1,
    },
    'tab-inactive': {
        marginTop: -1,
        borderBottomWidth: 1,
    },


    // Pagination


    'bottom-0': {bottom: '0rem'},
    'bottom-1': {bottom: '1rem'},
    'bottom-2': {bottom: '2rem'},
    'bottom-3': {bottom: '3rem'},
    'bottom-4': {bottom: '4rem'},
    'bottom-5': {bottom: '5rem'},
    'bottom-6': {bottom: '6rem'},
    'bottom-7': {bottom: '7rem'},
    'bottom-8': {bottom: '8rem'},
    'bottom-9': {bottom: '9rem'},
    'bottom-10': {bottom: '10rem'},
    'bottom-11': {bottom: '11rem'},
    'bottom-12': {bottom: '12rem'},
    'bottom-13': {bottom: '13rem'},
    'bottom-14': {bottom: '14rem'},
    'bottom-15': {bottom: '15rem'},
    'bottom-16': {bottom: '16rem'},


    'position-absolute': {
        position: 'absolute',
    },


    'top-0': {top: '0rem'},
    'top-1': {top: '1rem'},
    'top-2': {top: '2rem'},
    'top-3': {top: '3rem'},
    'top-4': {top: '4rem'},
    'top-5': {top: '5rem'},
    'top-6': {top: '6rem'},
    'top-7': {top: '7rem'},
    'top-8': {top: '8rem'},
    'top-9': {top: '9rem'},
    'top-10': {top: '10rem'},
    'top-11': {top: '11rem'},
    'top-12': {top: '12rem'},
    'top-13': {top: '13rem'},
    'top-14': {top: '14rem'},
    'top-15': {top: '15rem'},
    'top-16': {top: '16rem'},


    // Progress


    // Scrollspy


    // Sizing


    // Spacing


    /**
     * Padding
     */
    'p-half': {padding: '0.5rem'},
    'py-1-half': {padding: '1.5rem'},
    'p-0': {padding: undefined},
    'p-1': {padding: '1rem'},
    'p-2': {padding: '2rem'},
    'p-3': {padding: '3rem'},
    'p-4': {padding: '4rem'},
    'p-5': {padding: '5rem'},
    'p-6': {padding: '6rem'},
    'p-7': {padding: '7rem'},
    'p-8': {padding: '8rem'},
    'py-half': {paddingVertical: '0.5rem'},
    'py-0.75': {paddingVertical: '0.75rem'},
    'py-1': {paddingVertical: '1rem'},
    'py-2': {paddingVertical: '2rem'},
    'py-3': {paddingVertical: '3rem'},
    'py-4': {paddingVertical: '4rem'},
    'py-5': {paddingVertical: '5rem'},
    'py-6': {paddingVertical: '6rem'},
    'py-7': {paddingVertical: '7rem'},
    'py-8': {paddingVertical: '8rem'},
    'px-half': {paddingHorizontal: '0.5rem'},
    'px-1': {paddingHorizontal: '1rem'},
    'px-1-half': {paddingHorizontal: '1.5rem'},
    'px-2': {paddingHorizontal: '2rem'},
    'px-3': {paddingHorizontal: '3rem'},
    'px-4': {paddingHorizontal: '4rem'},
    'px-5': {paddingHorizontal: '5rem'},
    'px-6': {paddingHorizontal: '6rem'},
    'px-7': {paddingHorizontal: '7rem'},
    'px-8': {paddingHorizontal: '8rem'},
    'pt-0': {paddingTop: '0rem'},
    'pt-half': {paddingTop: '0.5rem'},
    'pt-1': {paddingTop: '1rem'},
    'pt-2': {paddingTop: '2rem'},
    'pt-3': {paddingTop: '3rem'},
    'pt-4': {paddingTop: '4rem'},
    'pt-5': {paddingTop: '5rem'},
    'pt-6': {paddingTop: '6rem'},
    'pt-7': {paddingTop: '7rem'},
    'pt-8': {paddingTop: '8rem'},
    'pr-half': {paddingRight: '0.5rem'},
    'pr-1': {paddingRight: '1rem'},
    'pr-1-half': {paddingRight: '1.5rem'},
    'pr-2': {paddingRight: '2rem'},
    'pr-3': {paddingRight: '3rem'},
    'pr-4': {paddingRight: '4rem'},
    'pr-5': {paddingRight: '5rem'},
    'pr-6': {paddingRight: '6rem'},
    'pr-7': {paddingRight: '7rem'},
    'pr-8': {paddingRight: '8rem'},
    'pb-0': {paddingBottom: '0rem'},
    'pb-half': {paddingBottom: '0.5rem'},
    'pb-1': {paddingBottom: '1rem'},
    'pb-2': {paddingBottom: '2rem'},
    'pb-3': {paddingBottom: '3rem'},
    'pb-4': {paddingBottom: '4rem'},
    'pb-5': {paddingBottom: '5rem'},
    'pb-6': {paddingBottom: '6rem'},
    'pb-7': {paddingBottom: '7rem'},
    'pb-8': {paddingBottom: '8rem'},
    'pl-half': {paddingLeft: '0.5rem'},
    'pl-1': {paddingLeft: '1rem'},
    'pl-2': {paddingLeft: '2rem'},
    'pl-3': {paddingLeft: '3rem'},
    'pl-4': {paddingLeft: '4rem'},
    'pl-5': {paddingLeft: '5rem'},
    'pl-6': {paddingLeft: '6rem'},
    'pl-7': {paddingLeft: '7rem'},
    'pl-8': {paddingLeft: '8rem'},


    // Tables


    // Text


    'text-justify': {
        textAlign: 'justify',
    },


    'text': {
        fontFamily: '$defaultFontFamily',
        fontSize: '1.16rem',
        color: '$text',
    },
    'text-blue': {color: '$blue'},
    'text-indigo': {color: '$indigo'},
    'text-purple': {color: '$purple'},
    'text-pink': {color: '$pink'},
    'text-red': {color: '$red'},
    'text-orange': {color: '$orange'},
    'text-yellow': {color: '$yellow'},
    'text-green': {color: '$green'},
    'text-teal': {color: '$teal'},
    'text-cyan': {color: '$cyan'},
    'text-gray': {color: '$gray'},
    'text-primary': {color: '$primary'},
    'text-secondary': {color: '$secondary'},
    'text-success': {color: '$success'},
    'text-info': {color: '$info'},
    'text-warning': {color: '$warning'},
    'text-danger': {color: '$danger'},
    'text-white': {color: '$white'},
    'text-dark': {color: '$dark'},
    'text-black': {color: '$black'},
    'text-light': {color: '$textLight'},
    'text-gray-1': {color: '$gray1'},
    'text-gray-2': {color: '$gray2'},
    'text-gray-3': {color: '$gray3'},
    'text-gray-4': {color: '$gray4'},
    'text-gray-5': {color: '$gray5'},
    'text-gray-dark': {color: '$grayDark'},
    'text-50': {color: Color(EStyleSheet.value('$text')).lighten(0.5).hex()},
    'text-light-50': {color: Color(EStyleSheet.value('$textLight')).lighten(0.75).hex()},

    // Toast


    // Toasts


    // Tooltips


    // Typography


    'h1': {
        fontFamily: '$defaultFontFamily',
        fontSize: '3rem',
        fontWeight: 'bold',
        paddingVertical: '1rem',
        color: '$text',
    },
    'h2': {
        fontFamily: '$defaultFontFamily',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        paddingVertical: '1rem',
        color: '$text',
    },
    'h3': {
        fontFamily: '$defaultFontFamily',
        fontSize: '2rem',
        fontWeight: 'bold',
        paddingVertical: '1rem',
        color: '$text',
    },
    'h4': {
        fontFamily: '$defaultFontFamily',
        fontSize: '1.6rem',
        fontWeight: 'bold',
        paddingVertical: '1rem',
        color: '$text',
    },
    'h5': {
        fontFamily: '$defaultFontFamily',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        paddingVertical: '1rem',
        color: '$text',
    },
    'h6': {
        fontFamily: '$defaultFontFamily',
        fontSize: '1rem',
        fontWeight: 'bold',
        paddingVertical: '1rem',
        color: '$text',
    },


    'text-center': {
        textAlign: 'center',
    },


    /**
     * Layout and Flex
     */

    'statusbar-space': {
        // paddingTop: getStatusBarHeight(undefined, true)
    },
    'col-reverse': {flexDirection: 'column-reverse'},
    'row-reverse': {flexDirection: 'row-reverse'},
    'flex-wrap': {flexWrap: 'wrap'},

    'flex-end': {alignItems: 'flex-end'},
    'flex-start': {alignItems: 'flex-start'},

    'flex': {
        flex: 1,
    },
    'flex-grow': {
        flexGrow: 1,
    },
    'flex-remove': {
        flex: 0,
        flexGrow: 0,
    },
    'inline': {
        alignSelf: 'flex-start',
        position: 'relative',
    },
    'align-right': {alignSelf: 'flex-end'},

    /**
     * Text section
     */
    'text-sm': {
        fontSize: '0.75rem',
        fontWeight: '500',
    },
    'text-md': {
        fontSize: '1.5rem',
    },
    'text-lg': {
        fontSize: '2rem',
    },
    'text-xl': {
        fontSize: '2.5rem',
    },
    'text-xxl': {
        fontSize: '3rem',
    },

    'text-title': {fontSize: '1.8rem'},
    'text-subtitle': {fontSize: '1.4rem'},
    'text-btn': {fontSize: '1.16rem'},
    'text-bold': {fontWeight: 'bold'},
    'text-disabled': {color: Color(EStyleSheet.value('$textLight')).lighten(0.5).hex()},
    'text-link': {textDecorationLine: 'underline'},
    'text-align-left': {textAlign: 'left'},
    'text-align-right': {textAlign: 'right'},
    'text-align-center': {textAlign: 'center'},
    'icon': {fontSize: '1.5rem'},
    'icon-xxs': {fontSize: '0.75rem'},
    'icon-xs': {fontSize: '1rem'},
    'icon-sm': {fontSize: '1.2rem'},
    'icon-md': {fontSize: '2rem'},
    'icon-lg': {
        fontSize: '2.35rem',
    },
    'icon-xl': {
        fontSize: '3rem',
    },
    'icon-xxl': {
        fontSize: '4rem',
    },
    'icon-xxxl': {
        fontSize: '8rem',
    },
    'logo-smt-drawer': {
        fontSize: '6rem',
    },
    'icon-fullscreen': {
        fontSize: '12rem',
    },

    /**
     * Width
     */
    'width-auto': {width: 'auto'},

    /**
     * Width
     */
    'w-half': {width: '0.5rem'},
    'w-1': {width: '1rem'},
    'w-1-half': {width: '1.5rem'},
    'w-2': {width: '2rem'},
    'w-3': {width: '3rem'},
    'w-4': {width: '4rem'},
    'w-5': {width: '5rem'},
    'w-6': {width: '6rem'},
    'w-7': {width: '7rem'},
    'w-8': {width: '8rem'},
    'w-9': {width: '9rem'},
    'w-10': {width: '10rem'},
    'w-11': {width: '11rem'},
    'w-12': {width: '12rem'},
    'w-13': {width: '13rem'},
    'w-14': {width: '14rem'},
    'w-15': {width: '15rem'},
    'w-16': {width: '16rem'},
    'w-17': {width: '17rem'},
    'w-18': {width: '18rem'},
    'w-19': {width: '19rem'},
    'w-20': {width: '20rem'},
    'w-21': {width: '21rem'},
    'w-22': {width: '22rem'},
    'w-23': {width: '23rem'},
    'w-24': {width: '24rem'},

    'w-25-p': {width: '25%'},
    'w-50-p': {width: '50%'},
    'w-100-p': {width: '100%'},

    /**
     * Height
     */
    'h-half': {height: '0.5rem'},
    'h-1': {height: '1rem'},
    'h-1-half': {height: '1.5rem'},
    'h-2': {height: '2rem'},
    'h-3': {height: '3rem'},
    'h-4': {height: '4rem'},
    'h-5': {height: '5rem'},
    'h-6': {height: '6rem'},
    'h-7': {height: '7rem'},
    'h-8': {height: '8rem'},
    'h-9': {height: '9rem'},
    'h-10': {height: '10rem'},
    'h-12': {height: '12rem'},
    'h-15': {height: '15rem'},
    'h-16': {height: '16rem'},
    'h-20': {height: '20rem'},
    'h-21': {height: '21rem'},
    'h-22': {height: '22rem'},

    /**
     * Max Width
     */

    // "mw-1": {maxWidth: "1rem"},
    // "mw-2": {maxWidth: "2rem"},
    // "mw-3": {maxWidth: "3rem"},
    // "mw-4": {maxWidth: "4rem"},
    // "mw-5": {maxWidth: "5rem"},
    // "mw-6": {maxWidth: "6rem"},
    // "mw-7": {maxWidth: "7rem"},
    // "mw-8": {maxWidth: "8rem"},
    // "mw-9": {maxWidth: "9rem"},
    // "mw-10": {maxWidth: "10rem"},
    // "mw-12": {maxWidth: "12rem"},
    // "mw-16": {maxWidth: "16rem"},
    // "mw-24": {maxWidth: "24rem"},
    // "mw-32": {maxWidth: "32rem"},
    // "mw-48": {maxWidth: "48rem"},
    // "mw-64": {maxWidth: "64rem"},
    // "mw-128": {maxWidth: "128rem"},

    'w-max-1': {maxWidth: '1rem'},
    'w-max-2': {maxWidth: '2rem'},
    'w-max-3': {maxWidth: '3rem'},
    'w-max-4': {maxWidth: '4rem'},
    'w-max-5': {maxWidth: '5rem'},
    'w-max-6': {maxWidth: '6rem'},
    'w-max-7': {maxWidth: '7rem'},
    'w-max-8': {maxWidth: '8rem'},
    'w-max-9': {maxWidth: '9rem'},
    'w-max-10': {maxWidth: '10rem'},
    'w-max-11': {maxWidth: '11rem'},
    'w-max-12': {maxWidth: '12rem'},
    'w-max-13': {maxWidth: '13rem'},
    'w-max-14': {maxWidth: '14rem'},
    'w-max-15': {maxWidth: '15rem'},
    'w-max-16': {maxWidth: '16rem'},
    'w-max-24': {maxWidth: '24rem'},

    'w-min-1': {minWidth: '1rem'},
    'w-min-2': {minWidth: '2rem'},
    'w-min-3': {minWidth: '3rem'},
    'w-min-4': {minWidth: '4rem'},
    'w-min-5': {minWidth: '5rem'},
    'w-min-6': {minWidth: '6rem'},
    'w-min-7': {minWidth: '7rem'},
    'w-min-8': {minWidth: '8rem'},
    'w-min-9': {minWidth: '9rem'},
    'w-min-10': {minWidth: '10rem'},
    'w-min-11': {minWidth: '11rem'},
    'w-min-12': {minWidth: '12rem'},
    'w-min-13': {minWidth: '13rem'},
    'w-min-14': {minWidth: '14rem'},
    'w-min-15': {minWidth: '15rem'},
    'w-min-16': {minWidth: '16rem'},

    'h-min-1': {minHeight: '1rem'},
    'h-min-2': {minHeight: '2rem'},
    'h-min-3': {minHeight: '3rem'},
    'h-min-4': {minHeight: '4rem'},
    'h-min-5': {minHeight: '5rem'},
    'h-min-6': {minHeight: '6rem'},
    'h-min-7': {minHeight: '7rem'},
    'h-min-8': {minHeight: '8rem'},
    'h-min-9': {minHeight: '9rem'},
    'h-min-10': {minHeight: '10rem'},
    'h-min-11': {minHeight: '11rem'},
    'h-min-12': {minHeight: '12rem'},
    'h-min-13': {minHeight: '13rem'},
    'h-min-14': {minHeight: '14rem'},
    'h-min-15': {minHeight: '15rem'},
    'h-min-16': {minHeight: '16rem'},

    /**
     * Margin
     */
    'm-half': {margin: '0.5rem'},
    'm-1': {margin: '1rem'},
    'm-2': {margin: '2rem'},
    'm-3': {margin: '3rem'},
    'm-4': {margin: '4rem'},
    'm-5': {margin: '5rem'},
    'm-6': {margin: '6rem'},
    'm-7': {margin: '7rem'},
    'm-8': {margin: '8rem'},
    'my-half': {marginVertical: '0.5rem'},
    'my-1': {marginVertical: '1rem'},
    'my-2': {marginVertical: '2rem'},
    'my-3': {marginVertical: '3rem'},
    'my-4': {marginVertical: '4rem'},
    'my-5': {marginVertical: '5rem'},
    'my-6': {marginVertical: '6rem'},
    'my-7': {marginVertical: '7rem'},
    'my-8': {marginVertical: '8rem'},
    'mx-half': {marginHorizontal: '0.5rem'},
    'mx-1': {marginHorizontal: '1rem'},
    'mx-2': {marginHorizontal: '2rem'},
    'mx-3': {marginHorizontal: '3rem'},
    'mx-4': {marginHorizontal: '4rem'},
    'mx-5': {marginHorizontal: '5rem'},
    'mx-6': {marginHorizontal: '6rem'},
    'mx-7': {marginHorizontal: '7rem'},
    'mx-8': {marginHorizontal: '8rem'},
    'mt-half': {marginTop: '0.5rem'},
    'mt-q3': {marginTop: '0.75rem'},
    'mt-1': {marginTop: '1rem'},
    'mt-2': {marginTop: '2rem'},
    'mt-3': {marginTop: '3rem'},
    'mt-4': {marginTop: '4rem'},
    'mt-5': {marginTop: '5rem'},
    'mt-6': {marginTop: '6rem'},
    'mt-7': {marginTop: '7rem'},
    'mt-8': {marginTop: '8rem'},
    'mt-half-negative': {marginTop: '-0.5rem'},
    'mt-1-negative': {marginTop: '-1rem'},
    'mt-2-negative': {marginTop: '-2rem'},
    'mt-3-negative': {marginTop: '-3rem'},
    'mt-4-negative': {marginTop: '-4rem'},
    'mt-5-negative': {marginTop: '-5rem'},
    'mt-6-negative': {marginTop: '-6rem'},
    'mt-7-negative': {marginTop: '-7rem'},
    'mt-8-negative': {marginTop: '-8rem'},
    'm-half-negative': {margin: '-0.5rem'},
    'mr-half': {marginRight: '0.5rem'},
    'mr-1': {marginRight: '1rem'},
    'mr-1-half': {marginRight: '1.5rem'},
    'mr-2': {marginRight: '2rem'},
    'mr-3': {marginRight: '3rem'},
    'mr-4': {marginRight: '4rem'},
    'mr-5': {marginRight: '5rem'},
    'mr-6': {marginRight: '6rem'},
    'mr-7': {marginRight: '7rem'},
    'mr-8': {marginRight: '8rem'},
    'mb-0': {marginBottom: '0rem'},
    'mb-half': {marginBottom: '0.5rem'},
    'mb-1': {marginBottom: '1rem'},
    'mb-2': {marginBottom: '2rem'},
    'mb-3': {marginBottom: '3rem'},
    'mb-4': {marginBottom: '4rem'},
    'mb-5': {marginBottom: '5rem'},
    'mb-6': {marginBottom: '6rem'},
    'mb-7': {marginBottom: '7rem'},
    'mb-8': {marginBottom: '8rem'},
    'mb-half-negative': {marginBottom: '-0.5rem'},
    'mb-1-negative': {marginBottom: '-1rem'},
    'mb-2-negative': {marginBottom: '-2rem'},
    'mb-3-negative': {marginBottom: '-3rem'},
    'mb-4-negative': {marginBottom: '-4rem'},
    'mb-5-negative': {marginBottom: '-5rem'},
    'mb-6-negative': {marginBottom: '-6rem'},
    'mb-7-negative': {marginBottom: '-7rem'},
    'mb-8-negative': {marginBottom: '-8rem'},
    'ml-half-negative': {marginLeft: '-0.5rem'},
    'ml-1-negative': {marginLeft: '-1rem'},
    'ml-2-negative': {marginLeft: '-2rem'},
    'ml-3-negative': {marginLeft: '-3rem'},
    'ml-4-negative': {marginLeft: '-4rem'},
    'ml-5-negative': {marginLeft: '-5rem'},
    'ml-6-negative': {marginLeft: '-6rem'},
    'ml-7-negative': {marginLeft: '-7rem'},
    'ml-8-negative': {marginLeft: '-8rem'},
    'ml-half': {marginLeft: '0.5rem'},
    'ml-1': {marginLeft: '1rem'},
    'ml-2': {marginLeft: '2rem'},
    'ml-3': {marginLeft: '3rem'},
    'ml-4': {marginLeft: '4rem'},
    'ml-5': {marginLeft: '5rem'},
    'ml-6': {marginLeft: '6rem'},
    'ml-7': {marginLeft: '7rem'},
    'ml-8': {marginLeft: '8rem'},


    /**
     * Others
     */
    'img': {
        aspectRatio: 1,
        height: 'auto',
    },
    'img-4-9': {
        aspectRatio: 4 / 9,
        height: 'auto',
    },
    'img-16-9': {
        aspectRatio: 16 / 9,
        height: 'auto',
    },
    'center': {
        alignItems: 'center',
        justifyContent: 'center',
    },
    'b-transparent': {borderColor: 'transparent'},
    'b-blue': {borderColor: '$blue'},
    'b-indigo': {borderColor: '$indigo'},
    'b-purple': {borderColor: '$purple'},
    'b-pink': {borderColor: '$pink'},
    'b-red': {borderColor: '$red'},
    'b-orange': {borderColor: '$orange'},
    'b-yellow': {borderColor: '$yellow'},
    'b-green': {borderColor: '$green'},
    'b-teal': {borderColor: '$teal'},
    'b-cyan': {borderColor: '$cyan'},
    'b-gray': {borderColor: '$gray'},
    'b-gray-1': {borderColor: '$gray1'},
    'b-gray-2': {borderColor: '$gray2'},
    'b-gray-3': {borderColor: '$gray3'},
    'b-gray-4': {borderColor: '$gray4'},
    'b-gray-5': {borderColor: '$gray5'},
    'b-grayDark': {borderColor: '$grayDark'},
    'b-primary': {borderColor: '$primary'},
    'b-secondary': {borderColor: '$secondary'},
    'b-success': {borderColor: '$success'},
    'b-info': {borderColor: '$info'},
    'b-warning': {borderColor: '$warning'},
    'b-danger': {borderColor: '$danger'},
    'b-white': {borderColor: '$white'},
    'b-light': {borderColor: '$light'},
    'b-dark': {borderColor: '$dark'},
    'b-black': {borderColor: '$black'},
    'badge': {
        backgroundColor: "$primary",
        position: "absolute",
        padding: '0.5rem',
        marginVertical: 1,
        borderRadius: 28,
        minWidth: 28,
        color: '$white',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        right: '-1rem',
        top: '-1rem',
    },
    'badge-sm': {
        backgroundColor: '$primary',
        padding: '0.25rem',
        marginVertical: 1,
        borderRadius: 14,
        minWidth: '1.5rem',
        color: '$white',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    'badge-blue': {
        backgroundColor: "$blue",
    },
    'badge-indigo': {
        backgroundColor: "$indigo",
    },
    'badge-purple': {
        backgroundColor: "$purple",
    },
    'badge-pink': {
        backgroundColor: "$pink",
    },
    'badge-red': {
        backgroundColor: "$red",
    },
    'badge-orange': {
        backgroundColor: "$orange",
    },
    'badge-yellow': {
        backgroundColor: "$yellow",
    },
    'badge-green': {
        backgroundColor: "$green",
    },
    'badge-teal': {
        backgroundColor: "$teal",
    },
    'badge-cyan': {
        backgroundColor: "$cyan",
    },
    'badge-gray': {
        backgroundColor: "$gray",
    },
    'badge-gray-1': {
        backgroundColor: "$gray1",
    },
    'badge-gray-2': {
        backgroundColor: "$gray2",
    },
    'badge-gray-3': {
        backgroundColor: "$gray3",
    },
    'badge-gray-4': {
        backgroundColor: "$gray4",
    },
    'badge-gray-5': {
        backgroundColor: "$gray5",
    },
    'badge-gray-dark': {
        backgroundColor: "$grayDark",
    },
    'badge-primary': {
        backgroundColor: "$primary",
    },
    'badge-secondary': {
        backgroundColor: "$secondary",
    },
    'badge-success': {
        backgroundColor: "$success",
    },
    'badge-info': {
        backgroundColor: "$info",
    },
    'badge-warning': {
        backgroundColor: "$warning",
    },
    'badge-danger': {
        backgroundColor: "$danger",
    },
    'badge-white': {
        backgroundColor: "$white",
    },
    'badge-light': {
        backgroundColor: "$light",
    },
    'badge-dark': {
        backgroundColor: "$dark",
    },
    'badge-black': {
        backgroundColor: "$black",
    },

    'bl-0': {borderLeftWidth: 0, borderColor: 'transparent'},
    'br-0': {borderRightWidth: 0, borderColor: 'transparent'},
    'b-0': {borderWidth: 0, borderColor: 'transparent'},
    'b-1': {borderWidth: 1, borderColor: '$gray2'},
    'b-2': {borderWidth: 2, borderColor: '$gray2'},
    'bt-1': {borderTopWidth: 1, borderColor: '$gray2'},
    'br-1': {borderRightWidth: 1, borderColor: '$gray2'},
    'bb-0': {borderBottomWidth: 0},
    'bb-1': {borderBottomWidth: 1, borderColor: '$gray2'},
    'bl-1': {borderLeftWidth: 1, borderColor: '$gray2'},
    'bx-1': {borderLeftWidth: 1, borderRightWidth: 1, borderColor: '$gray2'},
    'by-1': {borderTopWidth: 1, borderBottomWidth: 1, borderColor: '$gray2'},
    'bt-2': {borderBottomWidth: 2, borderColor: '$gray2'},
    'br-2': {borderBottomWidth: 2, borderColor: '$gray2'},
    'bb-2': {borderBottomWidth: 2, borderColor: '$gray2'},
    'bl-2': {borderBottomWidth: 2, borderColor: '$gray2'},
    'bx-2': {borderBottomWidth: 2, borderColor: '$gray2'},
    'by-2': {borderBottomWidth: 2, borderColor: '$gray2'},
    'bt-3': {borderBottomWidth: 3, borderColor: '$gray2'},
    'br-3': {borderBottomWidth: 3, borderColor: '$gray2'},
    'bb-3': {borderBottomWidth: 3, borderColor: '$gray2'},
    'bl-3': {borderBottomWidth: 3, borderColor: '$gray2'},
    'bx-3': {borderBottomWidth: 3, borderColor: '$gray2'},
    'by-3': {borderBottomWidth: 3, borderColor: '$gray2'},
    'bt-4': {borderBottomWidth: 4, borderColor: '$gray2'},
    'br-4': {borderBottomWidth: 4, borderColor: '$gray2'},
    'bb-4': {borderBottomWidth: 4, borderColor: '$gray2'},
    'bl-4': {borderBottomWidth: 4, borderColor: '$gray2'},
    'bx-4': {borderBottomWidth: 4, borderColor: '$gray2'},
    'by-4': {borderBottomWidth: 4, borderColor: '$gray2'},
    'bt-5': {borderBottomWidth: 5, borderColor: '$gray2'},
    'br-5': {borderBottomWidth: 5, borderColor: '$gray2'},
    'bb-5': {borderBottomWidth: 5, borderColor: '$gray2'},
    'bl-5': {borderBottomWidth: 5, borderColor: '$gray2'},
    'bx-5': {borderBottomWidth: 5, borderColor: '$gray2'},
    'by-5': {borderBottomWidth: 5, borderColor: '$gray2'},
    'bt-6': {borderBottomWidth: 6, borderColor: '$gray2'},
    'br-6': {borderBottomWidth: 6, borderColor: '$gray2'},
    'bb-6': {borderBottomWidth: 6, borderColor: '$gray2'},
    'bl-6': {borderBottomWidth: 6, borderColor: '$gray2'},
    'bx-6': {borderBottomWidth: 6, borderColor: '$gray2'},
    'by-6': {borderBottomWidth: 6, borderColor: '$gray2'},

    'z-index-max': {
        position: 'absolute',
        zIndex: 9999,
    },
    'mh-input': {
        minHeight: '3rem',
    },


    'right-0': {right: '0rem'},
    'right-1': {right: '1rem'},
    'right-2': {right: '2rem'},
    'right-3': {right: '3rem'},
    'right-4': {right: '4rem'},
    'right-5': {right: '5rem'},
    'right-6': {right: '6rem'},
    'right-7': {right: '7rem'},
    'right-8': {right: '8rem'},
    'right-9': {right: '9rem'},
    'right-10': {right: '10rem'},
    'right-11': {right: '11rem'},
    'right-12': {right: '12rem'},
    'right-13': {right: '13rem'},
    'right-14': {right: '14rem'},
    'right-15': {right: '15rem'},
    'right-16': {right: '16rem'},

    'right-0-negative': {right: '-0rem'},
    'right-half-negative': {right: '-0.5rem'},
    'right-1-negative': {right: '-1rem'},
    'right-2-negative': {right: '-2rem'},
    'right-3-negative': {right: '-3rem'},
    'right-4-negative': {right: '-4rem'},
    'right-5-negative': {right: '-5rem'},
    'right-6-negative': {right: '-6rem'},
    'right-7-negative': {right: '-7rem'},
    'right-8-negative': {right: '-8rem'},
    'right-9-negative': {right: '-9rem'},
    'right-10-negative': {right: '-10rem'},
    'right-11-negative': {right: '-11rem'},
    'right-12-negative': {right: '-12rem'},
    'right-13-negative': {right: '-13rem'},
    'right-14-negative': {right: '-14rem'},
    'right-15-negative': {right: '-15rem'},
    'right-16-negative': {right: '-16rem'},

    'left-0': {left: '0rem'},
    'left-1': {left: '1rem'},
    'left-2': {left: '2rem'},
    'left-3': {left: '3rem'},
    'left-4': {left: '4rem'},
    'left-5': {left: '5rem'},
    'left-6': {left: '6rem'},
    'left-7': {left: '7rem'},
    'left-8': {left: '8rem'},
    'left-9': {left: '9rem'},
    'left-10': {left: '10rem'},
    'left-11': {left: '11rem'},
    'left-12': {left: '12rem'},
    'left-13': {left: '13rem'},
    'left-14': {left: '14rem'},
    'left-15': {left: '15rem'},
    'left-16': {left: '16rem'},

    'list-item': {
        alignSelf: 'center',
        maxWidth: '48rem',
        width: '100%',
    },

    'transparent': {
        opacity: 0,
    },
    'disabled': {
        opacity: 0.32,
    },

    'p-tag': {
        paddingHorizontal: '0.5rem',
        paddingVertical: '0.25rem',
    },
    'p-tag-sm': {
        paddingHorizontal: '0.48rem',
        paddingVertical: '0.24rem',
    },

});

/**
 * TODO: replace scaleY with transform
 */
// 'invert': scaleY: -1,

export default defaultClasses;
