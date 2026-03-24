import express from 'express'

import { getPubController } from '../controllers/pub/getPubControllers.js'
import { createPubController } from '../controllers/pub/createPubController.js'
import { updatePubController } from '../controllers/pub/updatePubController.js'
import { patchPubController } from '../controllers/pub/patchPubController.js'
import { deletePubController } from '../controllers/pub/deletePubController.js'

const router = express.Router()

router.get('/', getPubController)
router.post('/', createPubController)
router.put('/', updatePubController)
router.patch('/', patchPubController)
router.delete('/', deletePubController)

export default router
