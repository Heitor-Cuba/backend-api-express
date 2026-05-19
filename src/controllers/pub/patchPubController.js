import { updatePub, validatePub } from "../../models/pubModel.js";

export async function patchPubController(req, res, next) {
    try{
        const {id} = req.params
        const pub = req.body

        const {success, error, data} = validatePub({id: +id, title: pub.title}, {description: true, author: true})

        if(!success){
                return res.status(400).json({
                        message: "Erro de validação",
                        fieldErrors: error
                })
        }

        const result = await updatePub(data, data.id)

        return res.json({
                message: "Título atualizado com sucesso!",
                publication: result
        })
    } catch(error) {
        if(error.code === 'P2025'){
            console.log(error.message)
            return res.status(404).json({
                    message: "Publicação não encontrada para ter o título atualizado."
            })
        }
        next(error)
    }
}