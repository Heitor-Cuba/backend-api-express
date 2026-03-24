import {prisma} from '../helpers/dbConnection.js';

export const createPub = async (pub) => {
    return await prisma.pub.create({
        data: pub
    })
}

export const getPub = async () => {
    return await prisma.pub.findMany()
}
