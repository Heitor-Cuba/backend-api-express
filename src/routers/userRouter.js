import express from 'express'

import { getUserController } from '../controllers/user/getUsersControllers.js'
import { createUserController } from '../controllers/user/createUserController.js'
import { updateUserController } from '../controllers/user/updateUserController.js'
import { updateAvatarUserController } from '../controllers/user/updateAvatarUserController.js'
import { deleteAvatarUserController } from '../controllers/user/deleteUserController.js'

const router = express.Router()

router.get('/', getUserController)
router.post('/', createUserController)
router.put('/', updateUserController)
router.patch('/', updateAvatarUserController)
router.delete('/', deleteAvatarUserController)

export default router