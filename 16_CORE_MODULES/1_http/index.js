const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    res.setHeader('Data-Custom', 'Dados')
    res.writeHead(200, {'Content-Type': 'text/html'})
    const q = url.parse(req.url, true).query
    res.write(
        `
            <h1>Servidor rodando</h1>
            <p>Ano: ${q.year}</p>
            <p>Mes: ${q.month}</p>
        `
    )
    res.end()
})

server.listen(3000)