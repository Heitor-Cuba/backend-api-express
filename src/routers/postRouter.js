import express from 'express'

import { createPostController } from '../controllers/post/createPostController.js'

const router = express.Router()

router.post('/', createPostController)

router.get('/', (req, res) => {
    res.send("Exemplo de GET na rota /post")
})

router.put('/', (req, res) => {
    res.send("Exemplo de PUT na rota /post")
})

router.patch('/', (req, res) => {
    res.send("Exemplo de PATCH na rota /post")
})

router.delete('/', (req, res) => {
    res.send("Exemplo de DELETE na rota /post")
})

export default router