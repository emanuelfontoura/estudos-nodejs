const _ = require('lodash')

const a = [1, 2, 3, 4, 5]
const b = [2, 3, 4, 5, 6, 7]

const diff = _.difference(b, a)

console.log(diff)