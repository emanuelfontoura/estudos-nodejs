const fs = require('fs')

if(!fs.existsSync('./minhapasta')){
    console.log('Não existe')
}else{
    console.log('Existe')
}

fs.mkdirSync('minhapasta')

if(!fs.existsSync('./minhapasta')){
    console.log('Não existe')
}else{
    console.log('Existe')
}