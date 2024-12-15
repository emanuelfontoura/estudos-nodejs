// const fs = require('fs/promises')
const fs = require('fs')
const http = require('http')

const server = http.createServer()

// jeito pesado
// server.on('request', async (req, res) => {
//     try{
//         const data = await fs.readFile('./big.file', 'utf8')
//         res.end(data)
//     }catch(err){
//         console.log(err)
//     }
// })

// com streams
// server.on('request', async (req, res) => {
//     const src = fs.createReadStream('./big.file')
//     src.on('data', (chunk) => {
//         console.log('Chunk 1 transferido: ' + chunk)
//     })
//     src.pipe(res)
// })

// server.listen(3000)

// ler chunk a chunk
const readableStream = fs.createReadStream('./read.txt', {encoding: 'utf-8', highWaterMark: 16 * 1024})

readableStream.on('data', (chunk) => {
     console.log(chunk)
})

readableStream.on('end', () => {
    console.log('Leitura finalizada.')
})

// escrever chunk a chunk
const writableStream = fs.createWriteStream('./write.txt', {encoding: 'utf-8', highWaterMark: 16 * 1024})

writableStream.write('Chunk 1')
writableStream.write('\nChunk 2')
writableStream.end()

writableStream.on('finish', () => {
    console.log('Escrita concluída!')
})