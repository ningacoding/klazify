const _mergeWith = require('lodash.mergewith');
const _merge = require('lodash.merge');

const source = {
  other: 'ok',
  transforms: [{translate: 'translate'}],
};
const target = {
  test: 'fail',
  other: 'fails',
  transforms: [{rotate: 'something'}],
};

console.log('RESULT', _mergeWith(source, target, (objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}));
