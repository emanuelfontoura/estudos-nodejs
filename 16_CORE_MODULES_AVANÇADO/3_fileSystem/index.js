const fs = require('fs/promises')
const { existsSync, writeFileSync } = require('fs')

// ler
async function ler() {
    try{
        const data = await fs.readFile('./arquivo.txt', 'utf8')
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

// escrever
async function escrever() {
    try{
        await fs.writeFile('./arquivo.txt', 'MEU NOME É EMANUEL')
    }catch(err){
        console.log(err)
    }
}

// adicionar
async function adicionar() {
    try{
        await fs.appendFile('./arquivo.txt', '\nTENHO 21 ANOS DE DE IDADE')
    }catch(err){
        console.log(err)
    }
}

// excluir
async function excluir() {
    try{
        await fs.unlink('./arquivo.txt')
    }catch(err){
        console.log(err)
    }
}

// renomear
async function renomear() {
    try{
        await fs.rename('./arquivo.txt', './arquivo2.txt')
    }catch(err){
        console.log(err)
    }
}

// verificar se o arquivo existe e se não existir vai criar ele
function existsArq() {
    if(!existsSync('./arquivo.txt')){
        writeFileSync('./arquivo.txt', 'utf8', '')
    }
}

// abrir com open e depois escrever e ler
async function abrirComFd() {
    try{
        // abrir
        const fileHandle = await fs.open('./arquivo.txt', 'r+')

        // escrever
        const bufferWrite = Buffer.from('EU SOU EMANUEL FONTOURA')
        await fileHandle.write(bufferWrite, 0, bufferWrite.length)
        
        // ler
        const bufferRead = Buffer.alloc(1024)
        const { bytesRead } = await fileHandle.read(bufferRead, 0, bufferRead.length, 0)
        console.log(bufferRead.toString('utf8', 0, bytesRead))

        // fechar
        await fileHandle.close()

    }catch(err){
        console.log(err)
    }
}

// criando diretórios
async function criarDir() {
    try{
        await fs.mkdir('./teste')
    }catch(err){
        console.log(err)
    }
}

// ler diretórios
async function lerDir() {
    try{
        const files = await fs.readdir('./')
        console.log(files)
    }catch(err){
        console.log(err)
    }
}

// excluir diretórios
async function excluirDir() {
    try{
        await fs.rmdir('./teste')
    }catch(err){
        console.log(err)
    }
}

existsArq()
abrirComFd()