const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual sua linguagem favorita?', (linguagem) => {
    console.log(`A sua linguagem favorita é ${linguagem}`)
    readline.close()
})