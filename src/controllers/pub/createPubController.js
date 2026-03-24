import { createPub } from "../../models/pubModel.js";

export async function createPubController(req, res){
    const pub = req.body

    console.log ("Dados recebidos para criação do usuário", pub)

    const result = await createPub(pub)

    res.json({
        message: "Usuário criado com sucesso!",
        pub: result
    })
}
