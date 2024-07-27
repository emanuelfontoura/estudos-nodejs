const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// rotas - endpoinst
app.get('/', (req, res) => {
    res.status(200).json({message: 'Primeira rota criada!'})
})

app.post('/createProduct', (req, res) => {
    const name = req.body.name
    const price = req.body.price
    if(!name){
        res.status(422).json({message: 'Erro. O nome do produto é obrigatório!'})
        return
    }
    console.log(name)
    console.log(price)
    res.status(201).json({message: `O produto ${name} foi inserido com o preço R$${price}`})
})

app.listen(3000, () => {
    console.log('Server iniciado com sucesso!')
})