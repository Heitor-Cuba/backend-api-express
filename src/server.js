//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import pubRouter from './routers/pubRouter.js'
import { logger } from './middlewares/logger.js'

const app = express()
const port = 3000

app.use(logger)
app.use(express.json())
// req.body

app.get('/', (req, res) => {
    res.send("Olá Mundo Express API!")
})

app.use('/user', logger)
app.use('/user', userRouter)
app.use('/pub', pubRouter)

app.listen(port, () => {
    console.log(`Servidor rondando em http://localhost:${port}`)
})
