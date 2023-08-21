import express from 'express'
const router = express.Router()

import positionController from '../controllers/positionController.js'

router.get('/:position_id', positionController.getPosition)
router.get('/', positionController.getAllPosition)

router.post('/create', express.urlencoded({ extended: true }), positionController.addPosition)

export default router