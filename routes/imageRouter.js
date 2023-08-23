import express from 'express'
const router = express.Router()

import imageController from '../controllers/imageController.js'

router
    .get('/:id', imageController.getOne)
    .get('/', imageController.getAll)
    .post('/create', express.urlencoded({ extended: true }), imageController.addImage)
    .put('/update/:id', express.urlencoded({ extended: true }), imageController.updateOne)
    .delete('/remove/:id', imageController.removeOne)

export default router