const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log('Chunk: ' + chunk)
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.end('Dados recebidos com sucesso');
        });
    } else {
        res.end('Envie uma requisição POST para testar');
    }
});

server.listen(3000, () => {
    console.log('Servidor está escutando na porta 3000');
});