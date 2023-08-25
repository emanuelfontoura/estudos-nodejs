import chalk from 'chalk'
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))
const nota = args['nota']

if(nota >= 6){
    console.log(chalk.underline(`Sua nota foi ${nota}.`) + chalk.green.bold(" APROVADO!"))
}else{
    console.log(chalk.underline(`Sua nota foi ${nota}.`) + chalk.red.bold(" REPROVADO!"))
}