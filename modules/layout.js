export const layout = {
  'aspect-square': {aspectRatio: 1},
  'aspect-video': {aspectRatio: 16 / 9},
  'container': {
    '@media (max-width: 640)': {maxWidth: 640},
    '@media (max-width: 768)': {maxWidth: 768},
    '@media (max-width: 1024)': {maxWidth: 1024},
    '@media (max-width: 1280)': {maxWidth: 1280},
    '@media (max-width: 1536)': {maxWidth: 1536},
  },
  'columns-1': {flex: 1},
  'columns-2': {flex: 2},
  'columns-3': {flex: 3},
  'columns-4': {flex: 4},
  'columns-5': {flex: 5},
  'columns-6': {flex: 6},
  'columns-7': {flex: 7},
  'columns-8': {flex: 8},
  'columns-9': {flex: 9},
  'columns-10': {flex: 10},
  'columns-11': {flex: 11},
  'columns-12': {flex: 12},
  'columns-auto': {width: 'auto'},
  'columns-3xs': {width: '16rem'},
  'columns-2xs': {width: '18rem'},
  'columns-xs': {width: '20rem'},
  'columns-sm': {width: '24rem'},
  'columns-md': {width: '28rem'},
  'columns-lg': {width: '32rem'},
  'columns-xl': {width: '36rem'},
  'columns-2xl': {width: '42rem'},
  'columns-3xl': {width: '48rem'},
  'columns-4xl': {width: '56rem'},
  'columns-5xl': {width: '64rem'},
  'columns-6xl': {width: '72rem'},
  'columns-7xl': {width: '80rem'},
  'hidden': {display: 'none'},
  'display-none': {display: 'none'},
  'display-flex': {display: 'flex'},
  'flex': {display: 'flex'},
  'overflow-hidden': {overflow: 'hidden'},
  'overflow-visible': {overflow: 'visible'},
  'overflow-scroll': {overflow: 'scroll'},
  'absolute': {position: 'absolute'},
  'relative': {position: 'relative'},

  'top-0': {top: 0},
  'right-0': {right: 0},
  'bottom-0': {bottom: 0},
  'left-0': {left: 0},
  'top-px': {top: 1},
  'right-px': {right: 1},
  'bottom-px': {bottom: 1},
  'left-px': {left: 1},
  'top-0.5': {top: '0.125rem'},
  'right-0.5': {right: '0.125rem'},
  'bottom-0.5': {bottom: '0.125rem'},
  'left-0.5': {left: '0.125rem'},
  'top-1': {top: '0.25rem'},
  'right-1': {right: '0.25rem'},
  'bottom-1': {bottom: '0.25rem'},
  'left-1': {left: '0.25rem'},
  'top-1.5': {top: '0.375rem'},
  'right-1.5': {right: '0.375rem'},
  'bottom-1.5': {bottom: '0.375rem'},
  'left-1.5': {left: '0.375rem'},
  'top-2': {top: '0.5rem'},
  'right-2': {right: '0.5rem'},
  'bottom-2': {bottom: '0.5rem'},
  'left-2': {left: '0.5rem'},
  'top-2.5': {top: '0.625rem'},
  'right-2.5': {right: '0.625rem'},
  'bottom-2.5': {bottom: '0.625rem'},
  'left-2.5': {left: '0.625rem'},
  'top-3': {top: '0.75rem'},
  'right-3': {right: '0.75rem'},
  'bottom-3': {bottom: '0.75rem'},
  'left-3': {left: '0.75rem'},
  'top-3.5': {top: '0.875rem'},
  'right-3.5': {right: '0.875rem'},
  'bottom-3.5': {bottom: '0.875rem'},
  'left-3.5': {left: '0.875rem'},
  'top-4': {top: '1rem'},
  'right-4': {right: '1rem'},
  'bottom-4': {bottom: '1rem'},
  'left-4': {left: '1rem'},
  'top-5': {top: '1.25rem'},
  'right-5': {right: '1.25rem'},
  'bottom-5': {bottom: '1.25rem'},
  'left-5': {left: '1.25rem'},
  'top-6': {top: '1.5rem'},
  'right-6': {right: '1.5rem'},
  'bottom-6': {bottom: '1.5rem'},
  'left-6': {left: '1.5rem'},
  'top-7': {top: '1.75rem'},
  'right-7': {right: '1.75rem'},
  'bottom-7': {bottom: '1.75rem'},
  'left-7': {left: '1.75rem'},
  'top-8': {top: '2rem'},
  'right-8': {right: '2rem'},
  'bottom-8': {bottom: '2rem'},
  'left-8': {left: '2rem'},
  'top-9': {top: '2.25rem'},
  'right-9': {right: '2.25rem'},
  'bottom-9': {bottom: '2.25rem'},
  'left-9': {left: '2.25rem'},
  'top-10': {top: '2.5rem'},
  'right-10': {right: '2.5rem'},
  'bottom-10': {bottom: '2.5rem'},
  'left-10': {left: '2.5rem'},
  'top-11': {top: '2.75rem'},
  'right-11': {right: '2.75rem'},
  'bottom-11': {bottom: '2.75rem'},
  'left-11': {left: '2.75rem'},
  'top-12': {top: '3rem'},
  'right-12': {right: '3rem'},
  'bottom-12': {bottom: '3rem'},
  'left-12': {left: '3rem'},
  'top-14': {top: '3.5rem'},
  'right-14': {right: '3.5rem'},
  'bottom-14': {bottom: '3.5rem'},
  'left-14': {left: '3.5rem'},
  'top-16': {top: '4rem'},
  'right-16': {right: '4rem'},
  'bottom-16': {bottom: '4rem'},
  'left-16': {left: '4rem'},
  'top-20': {top: '5rem'},
  'right-20': {right: '5rem'},
  'bottom-20': {bottom: '5rem'},
  'left-20': {left: '5rem'},
  'top-24': {top: '6rem'},
  'right-24': {right: '6rem'},
  'bottom-24': {bottom: '6rem'},
  'left-24': {left: '6rem'},
  'top-28': {top: '7rem'},
  'right-28': {right: '7rem'},
  'bottom-28': {bottom: '7rem'},
  'left-28': {left: '7rem'},
  'top-32': {top: '8rem'},
  'right-32': {right: '8rem'},
  'bottom-32': {bottom: '8rem'},
  'left-32': {left: '8rem'},
  'top-36': {top: '9rem'},
  'right-36': {right: '9rem'},
  'bottom-36': {bottom: '9rem'},
  'left-36': {left: '9rem'},
  'top-40': {top: '10rem'},
  'right-40': {right: '10rem'},
  'bottom-40': {bottom: '10rem'},
  'left-40': {left: '10rem'},
  'top-44': {top: '11rem'},
  'right-44': {right: '11rem'},
  'bottom-44': {bottom: '11rem'},
  'left-44': {left: '11rem'},
  'top-48': {top: '12rem'},
  'right-48': {right: '12rem'},
  'bottom-48': {bottom: '12rem'},
  'left-48': {left: '12rem'},
  'top-52': {top: '13rem'},
  'right-52': {right: '13rem'},
  'bottom-52': {bottom: '13rem'},
  'left-52': {left: '13rem'},
  'top-56': {top: '14rem'},
  'right-56': {right: '14rem'},
  'bottom-56': {bottom: '14rem'},
  'left-56': {left: '14rem'},
  'top-60': {top: '15rem'},
  'right-60': {right: '15rem'},
  'bottom-60': {bottom: '15rem'},
  'left-60': {left: '15rem'},
  'top-64': {top: '16rem'},
  'right-64': {right: '16rem'},
  'bottom-64': {bottom: '16rem'},
  'left-64': {left: '16rem'},
  'top-72': {top: '18rem'},
  'right-72': {right: '18rem'},
  'bottom-72': {bottom: '18rem'},
  'left-72': {left: '18rem'},
  'top-80': {top: '20rem'},
  'right-80': {right: '20rem'},
  'bottom-80': {bottom: '20rem'},
  'left-80': {left: '20rem'},
  'top-96': {top: '24rem'},
  'right-96': {right: '24rem'},
  'bottom-96': {bottom: '24rem'},
  'left-96': {left: '24rem'},
  'top-auto': {top: 'auto'},
  'top-1/2': {top: '50%'},
  'top-1/3': {top: '33.333333%'},
  'top-2/3': {top: '66.666667%'},
  'top-1/4': {top: '25%'},
  'top-2/4': {top: '50%'},
  'top-3/4': {top: '75%'},
  'top-full': {top: '100%'},
  'right-auto': {right: 'auto'},
  'right-1/2': {right: '50%'},
  'right-1/3': {right: '33.333333%'},
  'right-2/3': {right: '66.666667%'},
  'right-1/4': {right: '25%'},
  'right-2/4': {right: '50%'},
  'right-3/4': {right: '75%'},
  'right-full': {right: '100%'},
  'bottom-auto': {bottom: 'auto'},
  'bottom-1/2': {bottom: '50%'},
  'bottom-1/3': {bottom: '33.333333%'},
  'bottom-2/3': {bottom: '66.666667%'},
  'bottom-1/4': {bottom: '25%'},
  'bottom-2/4': {bottom: '50%'},
  'bottom-3/4': {bottom: '75%'},
  'bottom-full': {bottom: '100%'},
  'left-auto': {left: 'auto'},
  'left-1/2': {left: '50%'},
  'left-1/3': {left: '33.333333%'},
  'left-2/3': {left: '66.666667%'},
  'left-1/4': {left: '25%'},
  'left-2/4': {left: '50%'},
  'left-3/4': {left: '75%'},
  'left-full': {left: '100%'},

  '-top-0': {top: 0},
  '-right-0': {right: 0},
  '-bottom-0': {bottom: 0},
  '-left-0': {left: 0},
  '-top-px': {top: -1},
  '-right-px': {right: -1},
  '-bottom-px': {bottom: -1},
  '-left-px': {left: -1},
  '-top-0.5': {top: '-0.125rem'},
  '-right-0.5': {right: '-0.125rem'},
  '-bottom-0.5': {bottom: '-0.125rem'},
  '-left-0.5': {left: '-0.125rem'},
  '-top-1': {top: '-0.25rem'},
  '-right-1': {right: '-0.25rem'},
  '-bottom-1': {bottom: '-0.25rem'},
  '-left-1': {left: '-0.25rem'},
  '-top-1.5': {top: '-0.375rem'},
  '-right-1.5': {right: '-0.375rem'},
  '-bottom-1.5': {bottom: '-0.375rem'},
  '-left-1.5': {left: '-0.375rem'},
  '-top-2': {top: '-0.5rem'},
  '-right-2': {right: '-0.5rem'},
  '-bottom-2': {bottom: '-0.5rem'},
  '-left-2': {left: '-0.5rem'},
  '-top-2.5': {top: '-0.625rem'},
  '-right-2.5': {right: '-0.625rem'},
  '-bottom-2.5': {bottom: '-0.625rem'},
  '-left-2.5': {left: '-0.625rem'},
  '-top-3': {top: '-0.75rem'},
  '-right-3': {right: '-0.75rem'},
  '-bottom-3': {bottom: '-0.75rem'},
  '-left-3': {left: '-0.75rem'},
  '-top-3.5': {top: '-0.875rem'},
  '-right-3.5': {right: '-0.875rem'},
  '-bottom-3.5': {bottom: '-0.875rem'},
  '-left-3.5': {left: '-0.875rem'},
  '-top-4': {top: '-1rem'},
  '-right-4': {right: '-1rem'},
  '-bottom-4': {bottom: '-1rem'},
  '-left-4': {left: '-1rem'},
  '-top-5': {top: '-1.25rem'},
  '-right-5': {right: '-1.25rem'},
  '-bottom-5': {bottom: '-1.25rem'},
  '-left-5': {left: '-1.25rem'},
  '-top-6': {top: '-1.5rem'},
  '-right-6': {right: '-1.5rem'},
  '-bottom-6': {bottom: '-1.5rem'},
  '-left-6': {left: '-1.5rem'},
  '-top-7': {top: '-1.75rem'},
  '-right-7': {right: '-1.75rem'},
  '-bottom-7': {bottom: '-1.75rem'},
  '-left-7': {left: '-1.75rem'},
  '-top-8': {top: '-2rem'},
  '-right-8': {right: '-2rem'},
  '-bottom-8': {bottom: '-2rem'},
  '-left-8': {left: '-2rem'},
  '-top-9': {top: '-2.25rem'},
  '-right-9': {right: '-2.25rem'},
  '-bottom-9': {bottom: '-2.25rem'},
  '-left-9': {left: '-2.25rem'},
  '-top-10': {top: '-2.5rem'},
  '-right-10': {right: '-2.5rem'},
  '-bottom-10': {bottom: '-2.5rem'},
  '-left-10': {left: '-2.5rem'},
  '-top-11': {top: '-2.75rem'},
  '-right-11': {right: '-2.75rem'},
  '-bottom-11': {bottom: '-2.75rem'},
  '-left-11': {left: '-2.75rem'},
  '-top-12': {top: '-3rem'},
  '-right-12': {right: '-3rem'},
  '-bottom-12': {bottom: '-3rem'},
  '-left-12': {left: '-3rem'},
  '-top-14': {top: '-3.5rem'},
  '-right-14': {right: '-3.5rem'},
  '-bottom-14': {bottom: '-3.5rem'},
  '-left-14': {left: '-3.5rem'},
  '-top-16': {top: '-4rem'},
  '-right-16': {right: '-4rem'},
  '-bottom-16': {bottom: '-4rem'},
  '-left-16': {left: '-4rem'},
  '-top-20': {top: '-5rem'},
  '-right-20': {right: '-5rem'},
  '-bottom-20': {bottom: '-5rem'},
  '-left-20': {left: '-5rem'},
  '-top-24': {top: '-6rem'},
  '-right-24': {right: '-6rem'},
  '-bottom-24': {bottom: '-6rem'},
  '-left-24': {left: '-6rem'},
  '-top-28': {top: '-7rem'},
  '-right-28': {right: '-7rem'},
  '-bottom-28': {bottom: '-7rem'},
  '-left-28': {left: '-7rem'},
  '-top-32': {top: '-8rem'},
  '-right-32': {right: '-8rem'},
  '-bottom-32': {bottom: '-8rem'},
  '-left-32': {left: '-8rem'},
  '-top-36': {top: '-9rem'},
  '-right-36': {right: '-9rem'},
  '-bottom-36': {bottom: '-9rem'},
  '-left-36': {left: '-9rem'},
  '-top-40': {top: '-10rem'},
  '-right-40': {right: '-10rem'},
  '-bottom-40': {bottom: '-10rem'},
  '-left-40': {left: '-10rem'},
  '-top-44': {top: '-11rem'},
  '-right-44': {right: '-11rem'},
  '-bottom-44': {bottom: '-11rem'},
  '-left-44': {left: '-11rem'},
  '-top-48': {top: '-12rem'},
  '-right-48': {right: '-12rem'},
  '-bottom-48': {bottom: '-12rem'},
  '-left-48': {left: '-12rem'},
  '-top-52': {top: '-13rem'},
  '-right-52': {right: '-13rem'},
  '-bottom-52': {bottom: '-13rem'},
  '-left-52': {left: '-13rem'},
  '-top-56': {top: '-14rem'},
  '-right-56': {right: '-14rem'},
  '-bottom-56': {bottom: '-14rem'},
  '-left-56': {left: '-14rem'},
  '-top-60': {top: '-15rem'},
  '-right-60': {right: '-15rem'},
  '-bottom-60': {bottom: '-15rem'},
  '-left-60': {left: '-15rem'},
  '-top-64': {top: '-16rem'},
  '-right-64': {right: '-16rem'},
  '-bottom-64': {bottom: '-16rem'},
  '-left-64': {left: '-16rem'},
  '-top-72': {top: '-18rem'},
  '-right-72': {right: '-18rem'},
  '-bottom-72': {bottom: '-18rem'},
  '-left-72': {left: '-18rem'},
  '-top-80': {top: '-20rem'},
  '-right-80': {right: '-20rem'},
  '-bottom-80': {bottom: '-20rem'},
  '-left-80': {left: '-20rem'},
  '-top-96': {top: '-24rem'},
  '-right-96': {right: '-24rem'},
  '-bottom-96': {bottom: '-24rem'},
  '-left-96': {left: '-24rem'},
  '-top-1/2': {top: '-50%'},
  '-top-1/3': {top: '-33.333333%'},
  '-top-2/3': {top: '-66.666667%'},
  '-top-1/4': {top: '-25%'},
  '-top-2/4': {top: '-50%'},
  '-top-3/4': {top: '-75%'},
  '-top-full': {top: '-100%'},
  '-right-1/2': {right: '-50%'},
  '-right-1/3': {right: '-33.333333%'},
  '-right-2/3': {right: '-66.666667%'},
  '-right-1/4': {right: '-25%'},
  '-right-2/4': {right: '-50%'},
  '-right-3/4': {right: '-75%'},
  '-right-full': {right: '-100%'},
  '-bottom-1/2': {bottom: '-50%'},
  '-bottom-1/3': {bottom: '-33.333333%'},
  '-bottom-2/3': {bottom: '-66.666667%'},
  '-bottom-1/4': {bottom: '-25%'},
  '-bottom-2/4': {bottom: '-50%'},
  '-bottom-3/4': {bottom: '-75%'},
  '-bottom-full': {bottom: '-100%'},
  '-left-1/2': {left: '-50%'},
  '-left-1/3': {left: '-33.333333%'},
  '-left-2/3': {left: '-66.666667%'},
  '-left-1/4': {left: '-25%'},
  '-left-2/4': {left: '-50%'},
  '-left-3/4': {left: '-75%'},

  'inset-0': {top: 0, right: 0, bottom: 0, left: 0},
  'inset-x-0': {left: 0, right: 0},
  'inset-y-0': {top: 0, bottom: 0},
  'inset-px': {top: 1, right: 1, bottom: 1, left: 1},
  'inset-x-px': {left: 1, right: 1},
  'inset-y-px': {top: 1, bottom: 1},
  'inset-0.5': {top: '0.125rem', right: '0.125rem', bottom: '0.125rem', left: '0.125rem'},
  'inset-x-0.5': {left: '0.125rem', right: '0.125rem'},
  'inset-y-0.5': {top: '0.125rem', bottom: '0.125rem'},
  'inset-1': {top: '0.25rem', right: '0.25rem', bottom: '0.25rem', left: '0.25rem'},
  'inset-x-1': {left: '0.25rem', right: '0.25rem'},
  'inset-y-1': {top: '0.25rem', bottom: '0.25rem'},
  'inset-1.5': {top: '0.375rem', right: '0.375rem', bottom: '0.375rem', left: '0.375rem'},
  'inset-x-1.5': {left: '0.375rem', right: '0.375rem'},
  'inset-y-1.5': {top: '0.375rem', bottom: '0.375rem'},
  'inset-2': {top: '0.5rem', right: '0.5rem', bottom: '0.5rem', left: '0.5rem'},
  'inset-x-2': {left: '0.5rem', right: '0.5rem'},
  'inset-y-2': {top: '0.5rem', bottom: '0.5rem'},
  'inset-2.5': {top: '0.625rem', right: '0.625rem', bottom: '0.625rem', left: '0.625rem'},
  'inset-x-2.5': {left: '0.625rem', right: '0.625rem'},
  'inset-y-2.5': {top: '0.625rem', bottom: '0.625rem'},
  'inset-3': {top: '0.75rem', right: '0.75rem', bottom: '0.75rem', left: '0.75rem'},
  'inset-x-3': {left: '0.75rem', right: '0.75rem'},
  'inset-y-3': {top: '0.75rem', bottom: '0.75rem'},
  'inset-3.5': {top: '0.875rem', right: '0.875rem', bottom: '0.875rem', left: '0.875rem'},
  'inset-x-3.5': {left: '0.875rem', right: '0.875rem'},
  'inset-y-3.5': {top: '0.875rem', bottom: '0.875rem'},
  'inset-4': {top: '1rem', right: '1rem', bottom: '1rem', left: '1rem'},
  'inset-x-4': {left: '1rem', right: '1rem'},
  'inset-y-4': {top: '1rem', bottom: '1rem'},
  'inset-5': {top: '1.25rem', right: '1.25rem', bottom: '1.25rem', left: '1.25rem'},
  'inset-x-5': {left: '1.25rem', right: '1.25rem'},
  'inset-y-5': {top: '1.25rem', bottom: '1.25rem'},
  'inset-6': {top: '1.5rem', right: '1.5rem', bottom: '1.5rem', left: '1.5rem'},
  'inset-x-6': {left: '1.5rem', right: '1.5rem'},
  'inset-y-6': {top: '1.5rem', bottom: '1.5rem'},
  'inset-7': {top: '1.75rem', right: '1.75rem', bottom: '1.75rem', left: '1.75rem'},
  'inset-x-7': {left: '1.75rem', right: '1.75rem'},
  'inset-y-7': {top: '1.75rem', bottom: '1.75rem'},
  'inset-8': {top: '2rem', right: '2rem', bottom: '2rem', left: '2rem'},
  'inset-x-8': {left: '2rem', right: '2rem'},
  'inset-y-8': {top: '2rem', bottom: '2rem'},
  'inset-9': {top: '2.25rem', right: '2.25rem', bottom: '2.25rem', left: '2.25rem'},
  'inset-x-9': {left: '2.25rem', right: '2.25rem'},
  'inset-y-9': {top: '2.25rem', bottom: '2.25rem'},
  'inset-10': {top: '2.5rem', right: '2.5rem', bottom: '2.5rem', left: '2.5rem'},
  'inset-x-10': {left: '2.5rem', right: '2.5rem'},
  'inset-y-10': {top: '2.5rem', bottom: '2.5rem'},
  'inset-11': {top: '2.75rem', right: '2.75rem', bottom: '2.75rem', left: '2.75rem'},
  'inset-x-11': {left: '2.75rem', right: '2.75rem'},
  'inset-y-11': {top: '2.75rem', bottom: '2.75rem'},
  'inset-12': {top: '3rem', right: '3rem', bottom: '3rem', left: '3rem'},
  'inset-x-12': {left: '3rem', right: '3rem'},
  'inset-y-12': {top: '3rem', bottom: '3rem'},
  'inset-14': {top: '3.5rem', right: '3.5rem', bottom: '3.5rem', left: '3.5rem'},
  'inset-x-14': {left: '3.5rem', right: '3.5rem'},
  'inset-y-14': {top: '3.5rem', bottom: '3.5rem'},
  'inset-16': {top: '4rem', right: '4rem', bottom: '4rem', left: '4rem'},
  'inset-x-16': {left: '4rem', right: '4rem'},
  'inset-y-16': {top: '4rem', bottom: '4rem'},
  'inset-20': {top: '5rem', right: '5rem', bottom: '5rem', left: '5rem'},
  'inset-x-20': {left: '5rem', right: '5rem'},
  'inset-y-20': {top: '5rem', bottom: '5rem'},
  'inset-24': {top: '6rem', right: '6rem', bottom: '6rem', left: '6rem'},
  'inset-x-24': {left: '6rem', right: '6rem'},
  'inset-y-24': {top: '6rem', bottom: '6rem'},
  'inset-28': {top: '7rem', right: '7rem', bottom: '7rem', left: '7rem'},
  'inset-x-28': {left: '7rem', right: '7rem'},
  'inset-y-28': {top: '7rem', bottom: '7rem'},
  'inset-32': {top: '8rem', right: '8rem', bottom: '8rem', left: '8rem'},
  'inset-x-32': {left: '8rem', right: '8rem'},
  'inset-y-32': {top: '8rem', bottom: '8rem'},
  'inset-36': {top: '9rem', right: '9rem', bottom: '9rem', left: '9rem'},
  'inset-x-36': {left: '9rem', right: '9rem'},
  'inset-y-36': {top: '9rem', bottom: '9rem'},
  'inset-40': {top: '10rem', right: '10rem', bottom: '10rem', left: '10rem'},
  'inset-x-40': {left: '10rem', right: '10rem'},
  'inset-y-40': {top: '10rem', bottom: '10rem'},
  'inset-44': {top: '11rem', right: '11rem', bottom: '11rem', left: '11rem'},
  'inset-x-44': {left: '11rem', right: '11rem'},
  'inset-y-44': {top: '11rem', bottom: '11rem'},
  'inset-48': {top: '12rem', right: '12rem', bottom: '12rem', left: '12rem'},
  'inset-x-48': {left: '12rem', right: '12rem'},
  'inset-y-48': {top: '12rem', bottom: '12rem'},
  'inset-52': {top: '13rem', right: '13rem', bottom: '13rem', left: '13rem'},
  'inset-x-52': {left: '13rem', right: '13rem'},
  'inset-y-52': {top: '13rem', bottom: '13rem'},
  'inset-56': {top: '14rem', right: '14rem', bottom: '14rem', left: '14rem'},
  'inset-x-56': {left: '14rem', right: '14rem'},
  'inset-y-56': {top: '14rem', bottom: '14rem'},
  'inset-60': {top: '15rem', right: '15rem', bottom: '15rem', left: '15rem'},
  'inset-x-60': {left: '15rem', right: '15rem'},
  'inset-y-60': {top: '15rem', bottom: '15rem'},
  'inset-64': {top: '16rem', right: '16rem', bottom: '16rem', left: '16rem'},
  'inset-x-64': {left: '16rem', right: '16rem'},
  'inset-y-64': {top: '16rem', bottom: '16rem'},
  'inset-72': {top: '18rem', right: '18rem', bottom: '18rem', left: '18rem'},
  'inset-x-72': {left: '18rem', right: '18rem'},
  'inset-y-72': {top: '18rem', bottom: '18rem'},
  'inset-80': {top: '20rem', right: '20rem', bottom: '20rem', left: '20rem'},
  'inset-x-80': {left: '20rem', right: '20rem'},
  'inset-y-80': {top: '20rem', bottom: '20rem'},
  'inset-96': {top: '24rem', right: '24rem', bottom: '24rem', left: '24rem'},
  'inset-x-96': {left: '24rem', right: '24rem'},
  'inset-y-96': {top: '24rem', bottom: '24rem'},
  'inset-auto': {top: 'auto', right: 'auto', bottom: 'auto', left: 'auto'},
  'inset-1/2': {top: '50%', right: '50%', bottom: '50%', left: '50%'},
  'inset-1/3': {top: '33.333333%', right: '33.333333%', bottom: '33.333333%', left: '33.333333%'},
  'inset-2/3': {top: '66.666667%', right: '66.666667%', bottom: '66.666667%', left: '66.666667%'},
  'inset-1/4': {top: '25%', right: '25%', bottom: '25%', left: '25%'},
  'inset-2/4': {top: '50%', right: '50%', bottom: '50%', left: '50%'},
  'inset-3/4': {top: '75%', right: '75%', bottom: '75%', left: '75%'},
  'inset-full': {top: '100%', right: '100%', bottom: '100%', left: '100%'},
  'inset-x-auto': {left: 'auto', right: 'auto'},
  'inset-x-1/2': {left: '50%', right: '50%'},
  'inset-x-1/3': {left: '33.333333%', right: '33.333333%'},
  'inset-x-2/3': {left: '66.666667%', right: '66.666667%'},
  'inset-x-1/4': {left: '25%', right: '25%'},
  'inset-x-2/4': {left: '50%', right: '50%'},
  'inset-x-3/4': {left: '75%', right: '75%'},
  'inset-x-full': {left: '100%', right: '100%'},
  'inset-y-auto': {top: 'auto', bottom: 'auto'},
  'inset-y-1/2': {top: '50%', bottom: '50%'},
  'inset-y-1/3': {top: '33.333333%', bottom: '33.333333%'},
  'inset-y-2/3': {top: '66.666667%', bottom: '66.666667%'},
  'inset-y-1/4': {top: '25%', bottom: '25%'},
  'inset-y-2/4': {top: '50%', bottom: '50%'},
  'inset-y-3/4': {top: '75%', bottom: '75%'},
  'inset-y-full': {top: '100%', bottom: '100%'},
  'visible': {opacity: 1},
  'invisible': {opacity: 0},
  'z-0': {zIndex: 0},
  'z-10': {zIndex: 10},
  'z-20': {zIndex: 20},
  'z-30': {zIndex: 30},
  'z-40': {zIndex: 40},
  'z-50': {zIndex: 50},
  'z-auto': {zIndex: undefined},

  /**/
  'z-index-min': {position: 'absolute', zIndex: 0},
  'z-index-max': {position: 'absolute', zIndex: 9999},
  'transparent': {opacity: 0},
  'disabled': {opacity: 0.32},
  'inline': {alignSelf: 'flex-start', position: 'relative'},
  'align-right': {alignSelf: 'flex-end'},
  'img': {aspectRatio: 1, height: 'auto'},
  'img-4-9': {aspectRatio: 4 / 9, height: 'auto'},
  'img-16-9': {aspectRatio: 16 / 9, height: 'auto'},
  'img-9-4': {aspectRatio: 9 / 4, height: 'auto'},
  'img-9-16': {aspectRatio: 9 / 16, height: 'auto'},
  'center': {alignItems: 'center', justifyContent: 'center'},
  'position-absolute': {position: 'absolute'},
};
