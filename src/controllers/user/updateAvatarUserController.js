import { updateUser, validateUser } from "../../models/userModel";

export async function updateUsersController(req, res){
    const {id} = req.params
    const user = req.body

    const {success, error, data} = validateUser({id: +id, avatar: user.avatar}, {name: true, pass: true, email: true})

    if(!success){
        return res.status(400).json({
            message: "Erro na validação",
            fieldErrors: error
        })
    }

    const result = await updateUser(data, data.id)

    return res.json({
        message: "Avatar atualizado com sucesso!",
        user: result
    })
}
