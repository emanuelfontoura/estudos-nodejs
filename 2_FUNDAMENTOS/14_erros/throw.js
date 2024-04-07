const x = '10'

// checar se X é um número

if(!Number.isInteger(x)){
    throw new Error('O valor de x não é um número inteiro.')
}else{
    console.log('X é um número inteiro.')
}

console.log('O programa continua') // NÃO VAI IMPRIMIR ISSO, POIS O PROGRAMA É ENCERRADO NO "THROW"