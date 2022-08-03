const _pick = require('lodash.pick');
const _keys = require('lodash.keys');
const _merge = require('lodash.merge');
const _mergeWith = require('lodash.mergewith');

const formatFinder = (str, opts = {
  pattern: '%%',
}) => {
  let results;
  if (typeof str === 'string' && typeof opts.pattern === 'string' && opts.pattern.length === 2) {
    let patternStart = opts.pattern[0];
    let patternEnd = opts.pattern[1];
    let patternErrorStart = '[';
    let patternErrorEnd = ']';
    switch (patternStart) {
      case '[':
        patternStart = '\\[';
        patternErrorStart = '{';
        break;
    }
    switch (patternEnd) {
      case ']':
        patternEnd = '\\]';
        patternErrorEnd = '}';
        break;
    }
    const words = str.replace(/\\s/gmi, ' ').split(' ');
    results = words.map(word => {
      const matches = word.match(new RegExp(`${patternStart}(.*?)+${patternEnd}`, 'gmi'));
      const strMatch = matches?.[0];
      const keyStart = strMatch?.replace(new RegExp(patternStart, 'g'), '');
      const value = keyStart?.replace(new RegExp(patternEnd, 'g'), '');
      return {
        [word.replace(strMatch, '')]: value,
      }
    });
  }
  if (opts.pattern.length !== 2) {
    console.log('pattern must be a string with 2 characters, examples: [] or {}');
  }
  return results.reduce((prev, curr) => {
    return {
      ...prev,
      ...curr,
    };
  }, {});
};

export function ejectDynamicAndStatic(str) {
  const preValues = formatFinder(str, {pattern: '[]'});
  const staticValues = Object.keys(preValues).filter(key => !preValues[key]).join(' ');
  const dynamicValues = Object.keys(preValues).filter(key => !!preValues[key]).map(key => ({
    [key]: preValues[key],
  })).reduce((prev, curr) => {
    return {
      ...prev,
      ...curr,
    };
  }, {});
  return {
    staticValues,
    dynamicValues,
  }
}

export function generateDynamicClasses(dynamicValues, rem) {
  const keys = _keys(dynamicValues);
  return keys.map(key => {
    const isNegative = key.startsWith('-');
    const prop = (isNegative ? key.substring(1, key.length) : key).toLowerCase();
    let prop1a;
    let prop1b;
    let prop2a;
    let prop2b;
    const targetProp = prop.split('-')[0];

    /**
     * icon,
     *
     */
    const allowedProps = {
      left: 'left',
      right: 'right',
      top: 'top',
      bottom: 'bottom',
      border: 'border',
      icon: 'icon',
    };

    if (targetProp.length < 3) {
      if (targetProp.startsWith('p')) {
        prop1a = 'padding';
        prop2a = 'padding';
      }
      if (targetProp.startsWith('m')) {
        prop1a = 'margin';
        prop2a = 'margin';
      }
      if (targetProp.startsWith('b')) {
        prop1a = 'border';
        prop2a = 'border';
      }
      if (targetProp.startsWith('bg')) {
        prop1a = 'backgroundColor';
        prop2a = 'backgroundColor';
      }
    } else if (targetProp === 'icon') {
      prop1a = 'fontSize';
    } else {
      prop1a = allowedProps[prop.split('-')[0]];
      prop1b = prop.includes('-x-') ? 'x' : prop.includes('-y-') ? 'y' : undefined;
      if (prop1b) {
        prop2a = allowedProps[prop.split('-')[0]];
      }
    }

    if (targetProp.length < 3 || !!prop1b) {
      switch (prop1b || prop[1].toLowerCase()) {
        case 't':
          prop1b = 'Top';
          break;
        case 'r':
          prop1b = 'Right';
          break;
        case 'b':
          prop1b = 'Bottom';
          break;
        case 'l':
          prop1b = 'Left';
          break;
        case 'x':
          prop1b = 'Left';
          prop2b = 'Right';
          break;
        case 'y':
          prop1b = 'Top';
          prop2b = 'Bottom';
          break;
      }
    }

    const valueIsNumber = !isNaN(+dynamicValues[key]);
    const valueNumber = +dynamicValues[key] * (isNegative ? -1 : 1);
    const value = valueIsNumber ? ((valueNumber / 4) + 'rem') : dynamicValues[key];

    if (!prop1a) {
      return null;
    }

    if (prop2b && prop2a) {

      return {
        [key + dynamicValues[key]]: {
          [prop1a + prop1b]: value,
          [prop2a + prop2b]: value,
        },
      };
    }
    return {
      [key + '[' + dynamicValues[key] + ']']: {
        [prop1a + (prop1b || '')]: value,
      },
    };
  }).filter(x => !!x).reduce((prev, curr) => {
    return {
      ...prev,
      ...curr,
    };
  }, {});
}

// const input = 'top-[31] skew-x-[16] border-[8] icon-[16] px-4 pr-[7] mt-2 mb-[3] {} mx-6 mx-[7] p-[1] bg-[#CCC] b-[3] -p-[1] -pr-[1] left-[31] -right-[31] margin-[abc]';
//
// console.log('input', input);
//
// const {dynamicValues} = ejectDynamicAndStatic(input);
// const dynamicClasses = generateDynamicClasses(dynamicValues, 16);
//
// console.log('dynamicClasses', dynamicClasses);

