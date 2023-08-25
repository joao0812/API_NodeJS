import express from 'express'
const router = express.Router()

import itemController from '../controllers/itemController.js'

router
    .get('/:id', itemController.getOne)
    .get('/', itemController.getAll)
    .post('/', express.urlencoded({ extended: true }), itemController.addItem)
    .put('/:id', express.urlencoded({ extended: true }), itemController.updateOne)
    .delete('/:id', itemController.removeOne)

export default router