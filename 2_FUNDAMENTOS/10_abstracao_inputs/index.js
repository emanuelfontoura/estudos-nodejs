import inquirer from 'inquirer'

inquirer.prompt([
    {
        name: 'p1',
        message: 'Média da primeira prova: '
    },
    {
        name: 'p2',
        message: 'Média da segunda prova: '
    }
])
.then(answers => {
    const media = (Number(answers.p1) + Number(answers.p2)) / Object.keys(answers).length
    console.log(`A média das notas é: ${media}`)
    if(media >= 6){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
})
.catch(err => console.log(err))