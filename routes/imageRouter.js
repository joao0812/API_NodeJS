import express from 'express'
const router = express.Router()

import imageController from '../controllers/imageController.js'

router
    .get('/:id', imageController.getOne)
    .get('/', imageController.getAll)
    .post('/', express.urlencoded({ extended: true }), imageController.addImage)
    .put('/:id', express.urlencoded({ extended: true }), imageController.updateOne)
    .delete('/:id', imageController.removeOne)

export default router