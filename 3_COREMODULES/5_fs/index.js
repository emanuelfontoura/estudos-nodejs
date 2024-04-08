const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', ((err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(data)
        return res.end()
    }))
})

server.listen(3000, () => {
    console.log('Server rodando...')
})