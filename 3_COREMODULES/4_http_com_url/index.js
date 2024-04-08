const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    
    if(!name){
        res.end(
            '<h1>Preencha um nome: </h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar" /></form>'
        )
    }else{
        res.end(
            `<h1>Seja bem-vindo ${name}</h1>`
        )
    }
})

server.listen(3000, () => {
    console.log('Server iniciado...')
})