import { updatePub, validatePub } from "../../models/pubModel.js";

export async function updatePubController(req, res, next){
    try{
        const {id} = req.params
        const pub = req.body
        pub.id = +id

        const {success, error, data: pubValidated} = validatePub(pub)

        if(!success){
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: error
            })
        }

        const result = await updatePub(pubValidated, pubValidated.id)

        return res.json({
            message: "Publicação atualizada com sucesso!",
            pub: result
        })
    } catch(error) {
        if(error.code === 'P2025'){
            console.log(error.message)
            return res.status(404).json({
                message: "Publicação não encontrada para ser atualizada."
            })
        }
        next(error)
    }
}