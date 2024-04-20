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
        fs.writeFileSync(`accounts/${response.accountName}.json`, '{"balance":0}', ((err, data) => {
            if(err){
                console.log(err)
            }
        }))
        console.log(chalk.green('Conta criada com sucesso!'))
        operation()
    })
}

function checkBalance(){
    console.log('Consultar saldo')
}

function deposit(){
    inquirer.prompt([
        {
            name: 'accountName',
            message : 'Nome da conta para depósito: '
        },
    ])
    .then(responseAccountName => {
        if(!existsAccount(responseAccountName.accountName)){
            console.log(chalk.bgRed.black('Esta conta não existe!'))
            return deposit()
        }else{
            inquirer.prompt([
                {
                    name : 'depositValue',
                    message : 'Valor para depósito: '
                }
            ])
            .then(responseDepositValue => {
                addAmount(responseAccountName.accountName, responseDepositValue.depositValue)
                operation()
            })
        }
    })
    .catch(err => console.log(err))
}

function withdraw(){
    console.log('Sacar')
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

function addAmount(accountName, value){
    const accountData = getAccount(accountName)
    if(!value){
        console.log(chalk.bgRed.black('Preencha com algum valor!'))
        deposit()
    }
    accountData.balance = parseFloat(value) + parseFloat(accountData.balance)
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        (err => {
            if(err){
                console.log(err)
            }
        })
    )
    console.log(chalk.green(`Foi depositado o valor de R${value},00 na conta ${accountName}.`))
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding : 'utf8',
        flag : 'r'
    })

    return JSON.parse(accountJSON)
}