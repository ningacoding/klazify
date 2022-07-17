const _mergeWith = require('lodash.mergewith');
const _merge = require('lodash.merge');

const source = {
  transform: [{translate: '100%'}],
};
const target = {
  transform: [{rotate: 'something'}],
};

console.log('RESULT', _mergeWith(source, target, (objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}));
