import Color from 'color';
import EStyleSheet from 'react-native-extended-stylesheet';

export const base = () => ({
  'btn-block': {flex: 1},
  'link': {textDecorationLine: 'underline', color: '$primary'},
  'btn-padding': {paddingHorizontal: '$btnPaddingHorizontal', paddingVertical: '$btnPaddingVertical'},
  'btn-sm': {paddingHorizontal: '$btnPaddingHorizontal * 0.64', paddingVertical: '$btnPaddingVertical * 0.64'},
  'btn-md': {paddingHorizontal: '$btnPaddingHorizontal * 1.24', paddingVertical: '$btnPaddingVertical * 1.24'},
  'btn-lg': {paddingHorizontal: '$btnPaddingHorizontal * 1.48', paddingVertical: '$btnPaddingVertical * 1.48'},
  'btn-xl': {paddingHorizontal: '$btnPaddingHorizontal * 1.64', paddingVertical: '$btnPaddingVertical * 1.64'},
  'btn-2xl': {paddingHorizontal: '$btnPaddingHorizontal * 1.96', paddingVertical: '$btnPaddingVertical * 1.96'},
  'btn-3xl': {paddingHorizontal: '$btnPaddingHorizontal * 2.24', paddingVertical: '$btnPaddingVertical * 2.24'},
  'btn': {
    backgroundColor: '$primary',
    borderWidth: 1,
    borderColor: Color(EStyleSheet.value('$primary')).lighten(0.32).hex(),
    borderRadius: 5,
    paddingHorizontal: '$btnPaddingHorizontal',
    paddingVertical: '$btnPaddingVertical',
  },
  'card': {
    backgroundColor: Color(EStyleSheet.value('$bgBody')).lighten(0.2).hex(),
    borderRadius: 5,
    shadowOpacity: 0.16,
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    elevation: 4,
  },

  'input-active': {borderWidth: 1, borderColor: '$primary'},
  'input-error': {borderWidth: 1, borderColor: '$danger'},
  'input': {borderWidth: 1, borderColor: '$gray2', paddingHorizontal: '1rem', paddingVertical: '0.75rem', margin: 0},
  'text-area': {
    borderWidth: 1,
    borderColor: '$gray2',
    paddingHorizontal: '1rem',
    paddingVertical: '0.75rem',
    margin: 0,
    maxHeight: 100,
  },

  'shadow': {shadowOpacity: 0.16, shadowRadius: 4, shadowOffset: {height: 4, width: 0}, elevation: 4},
  'shadow-sm': {shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: {height: 2, width: 0}, elevation: 2},
  'shadow-md': {shadowOpacity: 0.16, shadowRadius: 6, shadowOffset: {height: 6, width: 0}, elevation: 6},
  'shadow-lg': {shadowOpacity: 0.16, shadowRadius: 8, shadowOffset: {height: 8, width: 0}, elevation: 8},
  'shadow-none': {shadowOpacity: 0, shadowRadius: 0, shadowOffset: {height: 0, width: 0}, elevation: 0},
  'tab': {marginBottom: -1},
  'tab-active': {marginBottom: -1},
  'tab-inactive': {marginTop: -1, borderBottomWidth: 1},

  'icon': {fontSize: '1.5rem'},
  'icon-xxs': {fontSize: '0.75rem'},
  'icon-xs': {fontSize: '1rem'},
  'icon-sm': {fontSize: '1.2rem'},
  'icon-md': {fontSize: '2rem'},
  'icon-lg': {fontSize: '2.35rem'},
  'icon-xl': {fontSize: '3rem'},
  'icon-2xl': {fontSize: '4rem'},
  'icon-3xl': {fontSize: '8rem'},
  'logo-smt-drawer': {fontSize: '6rem'},
  'icon-fullscreen': {fontSize: '12rem'},

  'badge-fixed': {position: 'absolute', right: '-1rem', top: '-1rem'},
  'badge': {
    backgroundColor: '$primary',
    padding: '0.5rem',
    marginVertical: 1,
    borderRadius: '9999rem',
    minWidth: '2.5rem',
    color: '$white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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
  'mh-input': {minHeight: '3rem'},
  'list-item': {alignSelf: 'center', maxWidth: '48rem', width: '100%'},
  'p-tag': {paddingHorizontal: '0.5rem', paddingVertical: '0.25rem'},
  'p-tag-sm': {paddingHorizontal: '0.48rem', paddingVertical: '0.24rem'},
});