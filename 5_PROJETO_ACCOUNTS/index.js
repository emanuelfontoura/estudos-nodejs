// módulos externos
import inquirer from 'inquirer'
import chalk from 'chalk'

// core modules
import fs from 'fs'

// main
operation()

function operation(){

    inquirer.prompt([{
        type: 'list',
        name : 'action', // key
        message : 'O que você deseja fazer?', // resposta à essa pergunta = value
        choices : [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }])
    .then(choice => {
        console.log(choice)
    })
    .catch(err => console.log(err))
}