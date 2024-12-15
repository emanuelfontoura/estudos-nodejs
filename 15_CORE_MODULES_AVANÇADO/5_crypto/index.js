const crypto = require('crypto')

// hash

// instanciando o objeto hash usando algum algoritmo suportado
const hash = crypto.createHash('sha256')
const salt = crypto.randomBytes(16).toString('hex')
const passWithSalt = 'minha senha' + salt

// adicionando dados para ser hashado
hash.update(passWithSalt, 'utf8')

// finalizando o objeto hash
const resultHash = hash.digest('hex')

console.log(resultHash)

// crypto com hmac
const hmac = crypto.createHmac('sha256', 'secretKey')
hmac.update('content')
const signature = hmac.digest('hex')

console.log(signature)