import inquirer from "inquirer"

inquirer.prompt([
    {
        name: "p1",
        message: "Qual a primeira nota?"
    },
    {
        name: "p2",
        message: "Qual a segunda nota?"
    }
])
.then(respostas => {
    const media = (parseInt(respostas.p1) + parseInt(respostas.p2))/2
    if(media >= 6){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
})
.catch(err => console.log(err))