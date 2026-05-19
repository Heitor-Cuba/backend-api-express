import { deletePub, validatePub } from "../../models/pubModel.js";

export async function deletePubController(req, res, next){
    try{
        const id = req.params.id

        const {success, error, data} = validatePub({id: +id}, {title: true, description: true, author: true})

        if(!success){
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: error
            })
        }

        const result = await deletePublication(data.id) 

        return res.json({
            message: "Publicação deletada com sucesso!",
            pub: result
        })
    }catch(error) {
        if(error.code === 'P2025'){
            console.log(error.message)
            return res.status(404).json({
                message: "Publicação não encontrada para ser deletada."
            })
        }
        next(error)
    }
}