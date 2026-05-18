
const express = require('express')
const cors = require('cors')

const bilola = express()
bilola.use(cors())
bilola.use(express.json())
const PORT = 3000

const registros = []

bilola.get('/registros', (req, res) => {
    res.status(200).json(registros)
+
    const 
})

bilola.post('/registros', (req, res) => {
    const dados = req.body

    if (!dados.nome) {
        return res.status(400).json({
            erro: 'Campo de nome é obrigatório!'
        })
    }

    console.log('Dados da requisição:', JSON.stringify(dados, null, 2))
    registros.push(dados)

    return res.status(201).json({
        sucesso: true,
        mensagem: 'Registro criado com sucesso.',
        dados
    })
})

bilola.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
