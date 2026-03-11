import express from 'express'

import { getPostsController } from '../controllers/post/getPostsControllers.js'
import { createPostController } from '../controllers/post/createPostController.js'
import { updatePostController } from '../controllers/post/updatePostController.js'
import { updateAvatarPostController } from '../controllers/post/updateAvatarPostController.js'
import { deleteAvatarPostController } from '../controllers/post/deletePostController.js'

const router = express.Router()

router.get('/', createPostController)
router.post('/', getPostsController)
router.put('/', updatePostController)
router.patch('/', updateAvatarPostController)
router.delete('/', deleteAvatarPostController)

export default router