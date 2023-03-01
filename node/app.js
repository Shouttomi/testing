const _ = require('lodash')

const item = [1,2,[3],[4,[5]],[55,[6,[7]]]];

const newitems = _.flattenDeep(item);

console.log(newitems)