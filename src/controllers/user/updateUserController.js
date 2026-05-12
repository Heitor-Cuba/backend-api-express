import { updateUser, validateUser } from "../../models/userModel.js"

export async function updateUsersController(req, res){
    const {id} = res.params
    const user = req.body
    user.id = +id

    const {sucess, error, data: userValidated} = validateUser(user)

    if(!success){
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        })
    }

    const result = await updateUser(userValidated, userValidated.id)

    return res.json({
        message: "Usuário atualizado com sucesso!",
        user: result
    })
}
