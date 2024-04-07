const chalk = require('chalk')
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Qual o seu nome?", (language) => {
    console.log(chalk.bold("Seja bem-vindo(a)") + chalk.red(` ${language}`))
    rl.close()
})