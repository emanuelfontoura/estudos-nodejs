const crypto = require('crypto')
const fs = require('fs')

const hash = crypto.createHash('sha256')

const rs = fs.createReadStream('./src.txt', {encoding: 'utf-8'})
const ws = fs.createWriteStream('./sink.txt', {encoding: 'utf-8'})

rs.on('data', (chunk) => {
    hash.update(chunk, 'utf-8')
})

rs.on('end', async () => {
    const resultHash = hash.digest('hex')
    ws.write(resultHash)
})

