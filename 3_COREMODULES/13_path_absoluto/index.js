const path = require('path')

// PATH ABSOLUTO
console.log(path.resolve('arquivo.txt'))

// FORMAR UM PATH
const midFolder = 'relatorios'
const fileName = 'emanuel.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)