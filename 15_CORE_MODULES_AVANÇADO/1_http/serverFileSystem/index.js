const http = require('http')
const fs = require('fs/promises') 
// const fs = require('fs')
const url = require('url')

const htmlLoader = async (filePath, contentType, res) => {
    try{
        // const readableStream = fs.createReadStream(filePath, {encoding: 'utf-8'})
        const data = await fs.readFile(filePath, 'utf8')
        res.writeHead(200, {'Content-Type': contentType})
        res.end(data, 'utf8')
        // readableStream.pipe(res)
    }catch(error){
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end('Error 500 - Erro interno do servidor!')
    }
}

const server = http.createServer()

server.on('request', (req, res) => {
    const parsedUrl = url.parse(req.url)
    const pathUrl = parsedUrl.pathname.replace('/', '')
    if(pathUrl === ''){
        htmlLoader('./templates/home.html', 'text/html', res)
    }else if(pathUrl === 'summer'){
        htmlLoader('./templates/summer.html', 'text/html', res)
    }else if(pathUrl === 'winter'){
        htmlLoader('./templates/winter.html', 'text/html', res)
    }else{
        htmlLoader('./templates/404.html', 'text/html', res)
    }
})

server.listen(3000)