const x = 10

try{
    x = 2
}catch(err){
    console.log('Erro: ' + err.message)
}

console.log('O programa continua') // VAI IMPRIMIR ISSO, POIS O TRY/CATCH NÃO ENCERRA O PROGRAMA