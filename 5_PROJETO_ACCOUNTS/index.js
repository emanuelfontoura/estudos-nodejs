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
    .then(response => {
        switch (response.action){
            case 'Criar conta':
                createAccount()
                break
            case 'Consultar saldo':
                checkBalance()
                break
            case 'Depositar':
                deposit()
                break
            case 'Sacar':
                withdraw()
                break
            case 'Sair':
                exit()
                break
        }
    })
    .catch(err => console.log(err))
}

// components
function createAccount(){
    console.log(chalk.bgGreen.black('Obrigado por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    buildAccount()
}

function buildAccount(){
    inquirer.prompt([
        {
            name : 'accountName',
            message : 'Nome para a sua conta: '
        }
    ])
    .then(response => {
        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }
        if(existsAccount(response.accountName) || response.accountName.length === 0){
            console.log(chalk.bgRed.black('Esta conta já existe ou está sem nome!'))
            buildAccount()
            return
        }
        fs.writeFileSync(`accounts/${response.accountName}.json`, '{"balance":0}', (err => {
            if(err){
                console.log(err)
            }
        }))
        console.log(chalk.green('Conta criada com sucesso!'))
        operation()
    })
}

function checkBalance(){
    inquirer.prompt([
        {
            name : 'accountName',
            message : 'Nome da conta para consulta de saldo:'
        }
    ])
    .then(response => {
        const name = response.accountName
        if(!existsAccount(name)){
            return checkBalance()
        }else{
            const accountData = getAccount(response.accountName)
            const balance = Number(accountData.balance)
            console.log(chalk.bgBlue.black(`O saldo da conta é de: R$ ${balance},00`))
            operation()
        }
    })
    
}

function deposit(){
    inquirer.prompt([
        {
            name: 'accountName',
            message : 'Nome da conta para depósito: '
        },
        {
            name : 'depositValue',
            message : 'Valor para depósito: '
        }
    ])
    .then(response => {
        manipulationBalance(response.accountName, response.depositValue, deposit)
    })
    .catch(err => console.log(err))
}

function withdraw(){
    inquirer.prompt([
        {
            name: 'accountName',
            message : 'Nome da conta para saque: '
        },
        {
            name : 'withdrawValue',
            message : 'Valor para saque: '
        }
    ])
    .then(response => {
        manipulationBalance(response.accountName, response.withdrawValue, withdraw)
    })
    .catch(err => console.log(err))
}

function exit(){
    console.log('Obrigado por usar o Accounts!')
    process.exit()
}

// reuse
function existsAccount(accountName){
    if(fs.existsSync(`accounts/${accountName}.json`)){
        return true
    }else{
        return false
    }
}

function manipulationBalance(accountName, value, action){
    if(!existsAccount(accountName)){
        console.log(chalk.bgRed.black('Está conta não existe!'))
        return action()
    }else{
        const accountData = getAccount(accountName)
        if(!value || isNaN(Number(value))){
            console.log(chalk.bgRed.black('Preencha com algum valor!'))
            return action()
        }
        let actionTradution
        switch (action.name){
            case 'deposit':
                actionTradution = 'depositado'
                accountData.balance = Number(accountData.balance) + Number(value)
                break;
            case 'withdraw':
                actionTradution = 'sacado'
                if(Number(accountData.balance) < Number(value)){
                    console.log('Valor indisponível para saque!')
                    return action()
                }
                accountData.balance = Number(accountData.balance) - Number(value)
                break;
        }
        fs.writeFileSync(
            `accounts/${accountName}.json`,
            JSON.stringify(accountData),
            (err => {
                if(err){
                    console.log(err)
                }
            })
        )
        console.log(chalk.green(`Foi ${actionTradution} o valor de R${value},00 na conta ${accountName}.`))
        operation()
    }
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding : 'utf8',
        flag : 'r'
    })

    return JSON.parse(accountJSON)
}