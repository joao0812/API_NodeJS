import express from 'express'
const router = express.Router()

import imageController from '../controllers/imageController.js'

router.get('/:experiment_id', imageController.getImage)
router.get('/', imageController.getAllImage)

router.post('/create', express.urlencoded({ extended: true }), imageController.addImage)

export default router