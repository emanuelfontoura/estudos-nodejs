const fs = require('fs')

fs.unlink('arquivo.txt', (err) => {
    if(err){
        fs.appendFile('log.txt', `${JSON.stringify(err)}, \r\n`, ((err, data) => {
            return
        }))
        return
    }
    console.log('Arquivo deletado!')
})