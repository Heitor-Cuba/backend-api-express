import express from 'express'

import { getUsersController } from '../controllers/user/getUsersControllers.js'
import { createUserController } from '../controllers/user/createUserController.js'
import { updateUsersController } from '../controllers/user/updateUserController.js'
import { updateAvatarUsersController } from '../controllers/user/updateAvatarUserController.js'
import { deleteUsersController } from '../controllers/user/deleteUserController.js'

const router = express.Router()

router.get('/', getUsersController)
router.post('/', createUserController)
router.put('/:id', updateUsersController)
router.patch('/:id', updateAvatarUsersController)
router.delete('/:id', deleteUsersController)

export default router
