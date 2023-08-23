import express from 'express'
const router = express.Router()

import itemController from '../controllers/itemController.js'

router
    .get('/:id', itemController.getOne)
    .get('/', itemController.getAll)
    .post('/create', express.urlencoded({ extended: true }), itemController.addItem)
    .put('/update/:id', express.urlencoded({ extended: true }), itemController.updateOne)
    .delete('/remove/:id', itemController.removeOne)

export default router