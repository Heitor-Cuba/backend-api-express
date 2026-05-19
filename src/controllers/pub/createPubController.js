import { createPub, validatePub  } from "../../models/pubModel.js"

export async function createPub(req, res){
    const publication = req.body

    const {success, error, data} = validatePub(pub, {id: true})

    if(!success){
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        })
    }

    const result = await createPub(data)

    res.json({
        message: "Publicação criada com sucesso!",
        pub: result
    })
}