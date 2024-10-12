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
server.on('request', async (req, res) => {
    const src = fs.createReadStream('./big.file')
    src.pipe(res)
})

server.listen(3000)