import { getUsers } from "../../models/userModel.js"

export async function getUsersController(req, res){
    const result = await getUsers()

        res.json({
            Message: "Usuarios listados com sucesso!",
            Users: result
        })
}
