// módulo interno
const soma = require('./somar.js').soma

// módulo externo
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))
const a = Number(args['a'])
const b = Number(args['b'])

const resultado = soma(a, b)
console.log(resultado)