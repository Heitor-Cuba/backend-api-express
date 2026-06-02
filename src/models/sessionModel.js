import { prisma } from "../helpers/dbConnection.js";

export const createSession = async (userId, token) => {
    return await prisma.selection.session.create({
        data: {
            userId,
            token
        }
    })
}