export const errorHandler = (error, req, res, next) => {
    console.lof(error.message)
    console.log(error.name)

    if (error?.message?.includes("in JSON at position")){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                message: "Erro no servidor, por favor tente novamente mais tarde."
    }

    res.status(500).json({
        message: "Erro no servidor, por favor tente novamente mais tarde."
    })
}
