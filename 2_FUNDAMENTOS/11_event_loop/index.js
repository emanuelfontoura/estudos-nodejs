function a(){
    console.log('Executando a()')
}

function b(){
    console.log('Executando b()')
}

function c(){
    console.log('Executando c()')
    a()
    b()
}

c()

// ORDEM SERÁ: c(), a(), b()