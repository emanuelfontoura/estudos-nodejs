// nome e idade
console.log(process.argv)

const nome = process.argv[2].slice(5)
const idade = process.argv[3].slice(6)

console.log(`Seja bem-vindo ${nome}`)
console.log(`Você tem ${idade} anos`)