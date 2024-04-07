import chalk from "chalk";
import inquirer from "inquirer";

inquirer.prompt([
    {
        name:'nome',
        message: "What's your name? "
    },
    {
        name:'idade',
        message: 'How old are you? '
    }
])
.then(respostas => {
    console.log(chalk.bgYellow.black(`Seu nome é: ${respostas['nome']}`))
    console.log(chalk.bgYellow.black(`Sua idade é: ${respostas['idade']}`))
})
.catch(err => {
    console.log('Erro: ' + err.message)
})