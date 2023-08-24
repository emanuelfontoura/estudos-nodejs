const minimist = require('minimist')
const somar = require('./somar.js').somar

const args = minimist(process.argv.slice(2))

console.log(`O resultado da soma é: ${somar(args['a'], args['b'])}`)