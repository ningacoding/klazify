/**
 * In order to combine multiple transforms, just use nested <Views/>.
 * Example:
 * <View style={css('scale-50')}>
 *   <View style={css('rotate-45')}/>
 * </View>
 */

export const transforms = (remValue) => ({
  'scale-0': {transform: [{scale: 0}]},
  'scale-x-0': {transform: [{scaleX: 0}]},
  'scale-y-0': {transform: [{scaleY: 0}]},
  'scale-50': {transform: [{scale: .5}]},
  'scale-x-50': {transform: [{scaleX: .5}]},
  'scale-y-50': {transform: [{scaleY: .5}]},
  'scale-75': {transform: [{scale: .75}]},
  'scale-x-75': {transform: [{scaleX: .75}]},
  'scale-y-75': {transform: [{scaleY: .75}]},
  'scale-90': {transform: [{scale: .9}]},
  'scale-x-90': {transform: [{scaleX: .9}]},
  'scale-y-90': {transform: [{scaleY: .9}]},
  'scale-95': {transform: [{scale: .95}]},
  'scale-x-95': {transform: [{scaleX: .95}]},
  'scale-y-95': {transform: [{scaleY: .95}]},
  'scale-100': {transform: [{scale: 1}]},
  'scale-x-100': {transform: [{scaleX: 1}]},
  'scale-y-100': {transform: [{scaleY: 1}]},
  'scale-105': {transform: [{scale: 1.05}]},
  'scale-x-105': {transform: [{scaleX: 1.05}]},
  'scale-y-105': {transform: [{scaleY: 1.05}]},
  'scale-110': {transform: [{scale: 1.1}]},
  'scale-x-110': {transform: [{scaleX: 1.1}]},
  'scale-y-110': {transform: [{scaleY: 1.1}]},
  'scale-125': {transform: [{scale: 1.25}]},
  'scale-x-125': {transform: [{scaleX: 1.25}]},
  'scale-y-125': {transform: [{scaleY: 1.25}]},
  'scale-150': {transform: [{scale: 1.5}]},
  'scale-x-150': {transform: [{scaleX: 1.5}]},
  'scale-y-150': {transform: [{scaleY: 1.5}]},
  'rotate-0': {transform: [{rotate: '0deg'}]},
  'rotate-1': {transform: [{rotate: '1deg'}]},
  'rotate-2': {transform: [{rotate: '2deg'}]},
  'rotate-3': {transform: [{rotate: '3deg'}]},
  'rotate-6': {transform: [{rotate: '6deg'}]},
  'rotate-12': {transform: [{rotate: '12deg'}]},
  'rotate-45': {transform: [{rotate: '45deg'}]},
  'rotate-90': {transform: [{rotate: '90deg'}]},
  'rotate-180': {transform: [{rotate: '180deg'}]},
  'translate-x-0': {transform: [{translateX: 0}]},
  'translate-y-0': {transform: [{translateY: 0}]},
  'translate-x-px': {transform: [{translateX: 1}]},
  'translate-y-px': {transform: [{translateY: 1}]},
  'translate-x-0.5': {transform: [{translateX: 0.125 * remValue}]},
  'translate-y-0.5': {transform: [{translateY: 0.125 * remValue}]},
  'translate-x-1': {transform: [{translateX: 0.25 * remValue}]},
  'translate-y-1': {transform: [{translateY: 0.25 * remValue}]},
  'translate-x-1.5': {transform: [{translateX: 0.375 * remValue}]},
  'translate-y-1.5': {transform: [{translateY: 0.375 * remValue}]},
  'translate-x-2': {transform: [{translateX: 0.5 * remValue}]},
  'translate-y-2': {transform: [{translateY: 0.5 * remValue}]},
  'translate-x-2.5': {transform: [{translateX: 0.625 * remValue}]},
  'translate-y-2.5': {transform: [{translateY: 0.625 * remValue}]},
  'translate-x-3': {transform: [{translateX: 0.75 * remValue}]},
  'translate-y-3': {transform: [{translateY: 0.75 * remValue}]},
  'translate-x-3.5': {transform: [{translateX: 0.875 * remValue}]},
  'translate-y-3.5': {transform: [{translateY: 0.875 * remValue}]},
  'translate-x-4': {transform: [{translateX: remValue}]},
  'translate-y-4': {transform: [{translateY: remValue}]},
  'translate-x-5': {transform: [{translateX: 1.25 * remValue}]},
  'translate-y-5': {transform: [{translateY: 1.25 * remValue}]},
  'translate-x-6': {transform: [{translateX: 1.5 * remValue}]},
  'translate-y-6': {transform: [{translateY: 1.5 * remValue}]},
  'translate-x-7': {transform: [{translateX: 1.75 * remValue}]},
  'translate-y-7': {transform: [{translateY: 1.75 * remValue}]},
  'translate-x-8': {transform: [{translateX: 2 * remValue}]},
  'translate-y-8': {transform: [{translateY: 2 * remValue}]},
  'translate-x-9': {transform: [{translateX: 2.25 * remValue}]},
  'translate-y-9': {transform: [{translateY: 2.25 * remValue}]},
  'translate-x-10': {transform: [{translateX: 2.5 * remValue}]},
  'translate-y-10': {transform: [{translateY: 2.5 * remValue}]},
  'translate-x-11': {transform: [{translateX: 2.75 * remValue}]},
  'translate-y-11': {transform: [{translateY: 2.75 * remValue}]},
  'translate-x-12': {transform: [{translateX: 3 * remValue}]},
  'translate-y-12': {transform: [{translateY: 3 * remValue}]},
  'translate-x-14': {transform: [{translateX: 3.5 * remValue}]},
  'translate-y-14': {transform: [{translateY: 3.5 * remValue}]},
  'translate-x-16': {transform: [{translateX: 4 * remValue}]},
  'translate-y-16': {transform: [{translateY: 4 * remValue}]},
  'translate-x-20': {transform: [{translateX: 5 * remValue}]},
  'translate-y-20': {transform: [{translateY: 5 * remValue}]},
  'translate-x-24': {transform: [{translateX: 6 * remValue}]},
  'translate-y-24': {transform: [{translateY: 6 * remValue}]},
  'translate-x-28': {transform: [{translateX: 7 * remValue}]},
  'translate-y-28': {transform: [{translateY: 7 * remValue}]},
  'translate-x-32': {transform: [{translateX: 8 * remValue}]},
  'translate-y-32': {transform: [{translateY: 8 * remValue}]},
  'translate-x-36': {transform: [{translateX: 9 * remValue}]},
  'translate-y-36': {transform: [{translateY: 9 * remValue}]},
  'translate-x-40': {transform: [{translateX: 10 * remValue}]},
  'translate-y-40': {transform: [{translateY: 10 * remValue}]},
  'translate-x-44': {transform: [{translateX: 11 * remValue}]},
  'translate-y-44': {transform: [{translateY: 11 * remValue}]},
  'translate-x-48': {transform: [{translateX: 12 * remValue}]},
  'translate-y-48': {transform: [{translateY: 12 * remValue}]},
  'translate-x-52': {transform: [{translateX: 13 * remValue}]},
  'translate-y-52': {transform: [{translateY: 13 * remValue}]},
  'translate-x-56': {transform: [{translateX: 14 * remValue}]},
  'translate-y-56': {transform: [{translateY: 14 * remValue}]},
  'translate-x-60': {transform: [{translateX: 15 * remValue}]},
  'translate-y-60': {transform: [{translateY: 15 * remValue}]},
  'translate-x-64': {transform: [{translateX: 16 * remValue}]},
  'translate-y-64': {transform: [{translateY: 16 * remValue}]},
  'translate-x-72': {transform: [{translateX: 18 * remValue}]},
  'translate-y-72': {transform: [{translateY: 18 * remValue}]},
  'translate-x-80': {transform: [{translateX: 20 * remValue}]},
  'translate-y-80': {transform: [{translateY: 20 * remValue}]},
  'translate-x-96': {transform: [{translateX: 24 * remValue}]},
  'translate-y-96': {transform: [{translateY: 24 * remValue}]},
  // 'translate-x-1/2': {transform: [{translateX: 0.50 * remValue}]},
  // 'translate-x-1/3': {transform: [{translateX: 0.33333333 * remValue}]},
  // 'translate-x-2/3': {transform: [{translateX: 0.66666667 * remValue}]},
  // 'translate-x-1/4': {transform: [{translateX: 0.25 * remValue}]},
  // 'translate-x-2/4': {transform: [{translateX: 0.50 * remValue}]},
  // 'translate-x-3/4': {transform: [{translateX: 0.75 * remValue}]},
  // 'translate-x-full': {transform: [{translateX: 1 * remValue}]},
  // 'translate-y-1/2': {transform: [{translateY: 0.50 * remValue}]},
  // 'translate-y-1/3': {transform: [{translateY: 0.33333333 * remValue}]},
  // 'translate-y-2/3': {transform: [{translateY: 0.66666667 * remValue}]},
  // 'translate-y-1/4': {transform: [{translateY: 0.25 * remValue}]},
  // 'translate-y-2/4': {transform: [{translateY: 0.50 * remValue}]},
  // 'translate-y-3/4': {transform: [{translateY: 0.75 * remValue}]},
  // 'translate-y-full': {transform: [{translateY: 1 * remValue}]},

  'skew-x-0': {transform: [{skewX: '0deg'}]},
  'skew-y-0': {transform: [{skewY: '0deg'}]},
  'skew-x-1': {transform: [{skewX: '1deg'}]},
  'skew-y-1': {transform: [{skewY: '1deg'}]},
  'skew-x-2': {transform: [{skewX: '2deg'}]},
  'skew-y-2': {transform: [{skewY: '2deg'}]},
  'skew-x-3': {transform: [{skewX: '3deg'}]},
  'skew-y-3': {transform: [{skewY: '3deg'}]},
  'skew-x-6': {transform: [{skewX: '6deg'}]},
  'skew-y-6': {transform: [{skewY: '6deg'}]},
  'skew-x-12': {transform: [{skewX: '12deg'}]},
  'skew-y-12': {transform: [{skewY: '12deg'}]},
  'skew-x-13': {transform: [{skewX: '13deg'}]},
  'skew-y-13': {transform: [{skewY: '13deg'}]},
  'skew-x-14': {transform: [{skewX: '14deg'}]},
  'skew-y-14': {transform: [{skewY: '14deg'}]},
  'skew-x-15': {transform: [{skewX: '15deg'}]},
  'skew-y-15': {transform: [{skewY: '15deg'}]},
  'skew-x-16': {transform: [{skewX: '16deg'}]},
  'skew-y-16': {transform: [{skewY: '16deg'}]},
  'skew-x-17': {transform: [{skewX: '17deg'}]},
  'skew-y-17': {transform: [{skewY: '17deg'}]},
  'skew-x-18': {transform: [{skewX: '18deg'}]},
  'skew-y-18': {transform: [{skewY: '18deg'}]},
  'skew-x-19': {transform: [{skewX: '19deg'}]},
  'skew-y-19': {transform: [{skewY: '19deg'}]},
  'skew-x-20': {transform: [{skewX: '20deg'}]},
  'skew-y-20': {transform: [{skewY: '20deg'}]},
  'skew-x-21': {transform: [{skewX: '21deg'}]},
  'skew-y-21': {transform: [{skewY: '21deg'}]},
  'skew-x-22': {transform: [{skewX: '22deg'}]},
  'skew-y-22': {transform: [{skewY: '22deg'}]},
  'skew-x-23': {transform: [{skewX: '23deg'}]},
  'skew-y-23': {transform: [{skewY: '23deg'}]},
  'skew-x-24': {transform: [{skewX: '24deg'}]},
  'skew-y-24': {transform: [{skewY: '24deg'}]},

  '-scale-0': {transform: [{scale: -0}]},
  '-scale-x-0': {transform: [{scaleX: -0}]},
  '-scale-y-0': {transform: [{scaleY: -0}]},
  '-scale-50': {transform: [{scale: -.5}]},
  '-scale-x-50': {transform: [{scaleX: -.5}]},
  '-scale-y-50': {transform: [{scaleY: -.5}]},
  '-scale-75': {transform: [{scale: -.75}]},
  '-scale-x-75': {transform: [{scaleX: -.75}]},
  '-scale-y-75': {transform: [{scaleY: -.75}]},
  '-scale-90': {transform: [{scale: -.9}]},
  '-scale-x-90': {transform: [{scaleX: -.9}]},
  '-scale-y-90': {transform: [{scaleY: -.9}]},
  '-scale-95': {transform: [{scale: -.95}]},
  '-scale-x-95': {transform: [{scaleX: -.95}]},
  '-scale-y-95': {transform: [{scaleY: -.95}]},
  '-scale-100': {transform: [{scale: -1}]},
  '-scale-x-100': {transform: [{scaleX: -1}]},
  '-scale-y-100': {transform: [{scaleY: -1}]},
  '-scale-105': {transform: [{scale: -1.05}]},
  '-scale-x-105': {transform: [{scaleX: -1.05}]},
  '-scale-y-105': {transform: [{scaleY: -1.05}]},
  '-scale-110': {transform: [{scale: -1.1}]},
  '-scale-x-110': {transform: [{scaleX: -1.1}]},
  '-scale-y-110': {transform: [{scaleY: -1.1}]},
  '-scale-125': {transform: [{scale: -1.25}]},
  '-scale-x-125': {transform: [{scaleX: -1.25}]},
  '-scale-y-125': {transform: [{scaleY: -1.25}]},
  '-scale-150': {transform: [{scale: -1.5}]},
  '-scale-x-150': {transform: [{scaleX: -1.5}]},
  '-scale-y-150': {transform: [{scaleY: -1.5}]},
  '-rotate-0': {transform: [{rotate: '-0deg'}]},
  '-rotate-1': {transform: [{rotate: '-1deg'}]},
  '-rotate-2': {transform: [{rotate: '-2deg'}]},
  '-rotate-3': {transform: [{rotate: '-3deg'}]},
  '-rotate-6': {transform: [{rotate: '-6deg'}]},
  '-rotate-12': {transform: [{rotate: '-12deg'}]},
  '-rotate-45': {transform: [{rotate: '-45deg'}]},
  '-rotate-90': {transform: [{rotate: '-90deg'}]},
  '-rotate-180': {transform: [{rotate: '-180deg'}]},
  '-translate-x-0': {transform: [{translateX: 0}]},
  '-translate-y-0': {transform: [{translateY: 0}]},
  '-translate-x-px': {transform: [{translateX: -1}]},
  '-translate-y-px': {transform: [{translateY: -1}]},
  '-translate-x-0.5': {transform: [{translateX: 0.125 * -remValue}]},
  '-translate-y-0.5': {transform: [{translateY: 0.125 * -remValue}]},
  '-translate-x-1': {transform: [{translateX: 0.25 * -remValue}]},
  '-translate-y-1': {transform: [{translateY: 0.25 * -remValue}]},
  '-translate-x-1.5': {transform: [{translateX: 0.375 * -remValue}]},
  '-translate-y-1.5': {transform: [{translateY: 0.375 * -remValue}]},
  '-translate-x-2': {transform: [{translateX: 0.5 * -remValue}]},
  '-translate-y-2': {transform: [{translateY: 0.5 * -remValue}]},
  '-translate-x-2.5': {transform: [{translateX: 0.625 * -remValue}]},
  '-translate-y-2.5': {transform: [{translateY: 0.625 * -remValue}]},
  '-translate-x-3': {transform: [{translateX: 0.75 * -remValue}]},
  '-translate-y-3': {transform: [{translateY: 0.75 * -remValue}]},
  '-translate-x-3.5': {transform: [{translateX: 0.875 * -remValue}]},
  '-translate-y-3.5': {transform: [{translateY: 0.875 * -remValue}]},
  '-translate-x-4': {transform: [{translateX: -remValue}]},
  '-translate-y-4': {transform: [{translateY: -remValue}]},
  '-translate-x-5': {transform: [{translateX: 1.25 * -remValue}]},
  '-translate-y-5': {transform: [{translateY: 1.25 * -remValue}]},
  '-translate-x-6': {transform: [{translateX: 1.5 * -remValue}]},
  '-translate-y-6': {transform: [{translateY: 1.5 * -remValue}]},
  '-translate-x-7': {transform: [{translateX: 1.75 * -remValue}]},
  '-translate-y-7': {transform: [{translateY: 1.75 * -remValue}]},
  '-translate-x-8': {transform: [{translateX: 2 * -remValue}]},
  '-translate-y-8': {transform: [{translateY: 2 * -remValue}]},
  '-translate-x-9': {transform: [{translateX: 2.25 * -remValue}]},
  '-translate-y-9': {transform: [{translateY: 2.25 * -remValue}]},
  '-translate-x-10': {transform: [{translateX: 2.5 * -remValue}]},
  '-translate-y-10': {transform: [{translateY: 2.5 * -remValue}]},
  '-translate-x-11': {transform: [{translateX: 2.75 * -remValue}]},
  '-translate-y-11': {transform: [{translateY: 2.75 * -remValue}]},
  '-translate-x-12': {transform: [{translateX: 3 * -remValue}]},
  '-translate-y-12': {transform: [{translateY: 3 * -remValue}]},
  '-translate-x-14': {transform: [{translateX: 3.5 * -remValue}]},
  '-translate-y-14': {transform: [{translateY: 3.5 * -remValue}]},
  '-translate-x-16': {transform: [{translateX: 4 * -remValue}]},
  '-translate-y-16': {transform: [{translateY: 4 * -remValue}]},
  '-translate-x-20': {transform: [{translateX: 5 * -remValue}]},
  '-translate-y-20': {transform: [{translateY: 5 * -remValue}]},
  '-translate-x-24': {transform: [{translateX: 6 * -remValue}]},
  '-translate-y-24': {transform: [{translateY: 6 * -remValue}]},
  '-translate-x-28': {transform: [{translateX: 7 * -remValue}]},
  '-translate-y-28': {transform: [{translateY: 7 * -remValue}]},
  '-translate-x-32': {transform: [{translateX: 8 * -remValue}]},
  '-translate-y-32': {transform: [{translateY: 8 * -remValue}]},
  '-translate-x-36': {transform: [{translateX: 9 * -remValue}]},
  '-translate-y-36': {transform: [{translateY: 9 * -remValue}]},
  '-translate-x-40': {transform: [{translateX: 10 * -remValue}]},
  '-translate-y-40': {transform: [{translateY: 10 * -remValue}]},
  '-translate-x-44': {transform: [{translateX: 11 * -remValue}]},
  '-translate-y-44': {transform: [{translateY: 11 * -remValue}]},
  '-translate-x-48': {transform: [{translateX: 12 * -remValue}]},
  '-translate-y-48': {transform: [{translateY: 12 * -remValue}]},
  '-translate-x-52': {transform: [{translateX: 13 * -remValue}]},
  '-translate-y-52': {transform: [{translateY: 13 * -remValue}]},
  '-translate-x-56': {transform: [{translateX: 14 * -remValue}]},
  '-translate-y-56': {transform: [{translateY: 14 * -remValue}]},
  '-translate-x-60': {transform: [{translateX: 15 * -remValue}]},
  '-translate-y-60': {transform: [{translateY: 15 * -remValue}]},
  '-translate-x-64': {transform: [{translateX: 16 * -remValue}]},
  '-translate-y-64': {transform: [{translateY: 16 * -remValue}]},
  '-translate-x-72': {transform: [{translateX: 18 * -remValue}]},
  '-translate-y-72': {transform: [{translateY: 18 * -remValue}]},
  '-translate-x-80': {transform: [{translateX: 20 * -remValue}]},
  '-translate-y-80': {transform: [{translateY: 20 * -remValue}]},
  '-translate-x-96': {transform: [{translateX: 24 * -remValue}]},
  '-translate-y-96': {transform: [{translateY: 24 * -remValue}]},
  // '-translate-x-1/2': {transform: [{translateX: 0.50 * -remValue}]},
  // '-translate-x-1/3': {transform: [{translateX: 0.33333333 * -remValue}]},
  // '-translate-x-2/3': {transform: [{translateX: 0.66666667 * -remValue}]},
  // '-translate-x-1/4': {transform: [{translateX: 0.25 * -remValue}]},
  // '-translate-x-2/4': {transform: [{translateX: 0.50 * -remValue}]},
  // '-translate-x-3/4': {transform: [{translateX: 0.75 * -remValue}]},
  // '-translate-x-full': {transform: [{translateX: 1 * -remValue}]},
  // '-translate-y-1/2': {transform: [{translateY: 0.50 * -remValue}]},
  // '-translate-y-1/3': {transform: [{translateY: 0.33333333 * -remValue}]},
  // '-translate-y-2/3': {transform: [{translateY: 0.66666667 * -remValue}]},
  // '-translate-y-1/4': {transform: [{translateY: 0.25 * -remValue}]},
  // '-translate-y-2/4': {transform: [{translateY: 0.50 * -remValue}]},
  // '-translate-y-3/4': {transform: [{translateY: 0.75 * -remValue}]},
  // '-translate-y-full': {transform: [{translateY: 1 * -remValue}]},

  '-skew-x-0': {transform: [{skewX: '-0deg'}]},
  '-skew-y-0': {transform: [{skewY: '-0deg'}]},
  '-skew-x-1': {transform: [{skewX: '-1deg'}]},
  '-skew-y-1': {transform: [{skewY: '-1deg'}]},
  '-skew-x-2': {transform: [{skewX: '-2deg'}]},
  '-skew-y-2': {transform: [{skewY: '-2deg'}]},
  '-skew-x-3': {transform: [{skewX: '-3deg'}]},
  '-skew-y-3': {transform: [{skewY: '-3deg'}]},
  '-skew-x-6': {transform: [{skewX: '-6deg'}]},
  '-skew-y-6': {transform: [{skewY: '-6deg'}]},
  '-skew-x-12': {transform: [{skewX: '-12deg'}]},
  '-skew-y-12': {transform: [{skewY: '-12deg'}]},
  '-skew-x-13': {transform: [{skewX: '-13deg'}]},
  '-skew-y-13': {transform: [{skewY: '-13deg'}]},
  '-skew-x-14': {transform: [{skewX: '-14deg'}]},
  '-skew-y-14': {transform: [{skewY: '-14deg'}]},
  '-skew-x-15': {transform: [{skewX: '-15deg'}]},
  '-skew-y-15': {transform: [{skewY: '-15deg'}]},
  '-skew-x-16': {transform: [{skewX: '-16deg'}]},
  '-skew-y-16': {transform: [{skewY: '-16deg'}]},
  '-skew-x-17': {transform: [{skewX: '-17deg'}]},
  '-skew-y-17': {transform: [{skewY: '-17deg'}]},
  '-skew-x-18': {transform: [{skewX: '-18deg'}]},
  '-skew-y-18': {transform: [{skewY: '-18deg'}]},
  '-skew-x-19': {transform: [{skewX: '-19deg'}]},
  '-skew-y-19': {transform: [{skewY: '-19deg'}]},
  '-skew-x-20': {transform: [{skewX: '-20deg'}]},
  '-skew-y-20': {transform: [{skewY: '-20deg'}]},
  '-skew-x-21': {transform: [{skewX: '-21deg'}]},
  '-skew-y-21': {transform: [{skewY: '-21deg'}]},
  '-skew-x-22': {transform: [{skewX: '-22deg'}]},
  '-skew-y-22': {transform: [{skewY: '-22deg'}]},
  '-skew-x-23': {transform: [{skewX: '-23deg'}]},
  '-skew-y-23': {transform: [{skewY: '-23deg'}]},
  '-skew-x-24': {transform: [{skewX: '-24deg'}]},
  '-skew-y-24': {transform: [{skewY: '-24deg'}]},

});
