import { getPub } from "../../models/pubModel.js"

export async function getPubController(req, res){

const result = await getPub()

    res.json({
    Message: "Usuarios listados com sucesso!",
    pub: result
    })
}
