const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true) // q = query da url
    const filename = q.pathname.substring(1)

    if(filename.includes('html')){
        if(fs.existsSync(filename)){
            fs.readFile(filename, ((err, data) => {
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
                return res.end()
            }))
        }else{
            fs.readFile('404.html', ((err, data) => {
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
                return res.end()
            }))
        }
    }
})

server.listen(3000, () => {
    console.log('Server iniciado...')
})