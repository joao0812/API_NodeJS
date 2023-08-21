import express from 'express'
const router = express.Router()

import areaController from '../controllers/areaController.js'

router.get('/:area_id', areaController.getArea)
router.get('/', areaController.getAllArea)

router.post('/create', express.urlencoded({ extended: true }), areaController.addArea)

export default router