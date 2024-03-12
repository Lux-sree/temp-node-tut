const { INSPECT_MAX_BYTES } = require('buffer');
const _ = require('lodash');

const items =[1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newItems)