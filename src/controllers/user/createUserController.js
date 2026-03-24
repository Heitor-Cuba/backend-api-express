import { createUser } from "../../models/userModel.js";

export async function createUserController(req, res){
    const user = req.body

    console.log ("Dados recebidos para criação do usuário", user)

    const result = await createUser(user)

    res.json({
        message: "Usuário criado com sucesso!",
        user: result
    })
}
