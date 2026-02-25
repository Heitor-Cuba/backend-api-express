//const express = require('express')
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Olá Mundo Express API")
})

app.get('/user', (req, res) => {
    res.send("Exemplo de GET na rota /user")
})

app.post('/user', (req, res) => {
    res.send("Exemplo de POST na rota /user")
})

app.put('/user', (req, res) => {
    res.send("Exemplo de PUT na rota /user")
})

app.patch('/user', (req, res) => {
    res.send("Exemplo de PATCH na rota /user")
})

app.delete('/user', (req, res) => {
    res.send("Exemplo de DELETE na rota /user")
})

// ^ Rotas da API: endereços que vão ficar escutando os métodos
// req: guarda as informações que chegam da requisição
// res: o que o express me da para responder o usuário

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})