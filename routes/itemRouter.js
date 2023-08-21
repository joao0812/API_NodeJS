import express from 'express'
const router = express.Router()

import itemController from '../controllers/itemController.js'

router.get('/:item_id', itemController.getItem)
router.get('/', itemController.getAllItem)

router.post('/create', express.urlencoded({ extended: true }), itemController.addItem)

export default router