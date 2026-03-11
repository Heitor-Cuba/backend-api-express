import { createUser } from "../../models/userModel";

export async function createUserController(req, res){
    
    const user = {
        avatar: "https://github.com/Heitor-Cuba.png",
        name: "Heitor Cuba",
        email: "heitorcuba@gmail.com",
        pass: "12345678"
    }

    const result = await createUser(user)

    res.json({
        message: "Usuário criado com sucesso!",
        user: result
    })
}