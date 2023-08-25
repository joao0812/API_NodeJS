import express from 'express'
const router = express.Router()

import positionController from '../controllers/positionController.js'

router
    .get('/:id', positionController.getOne)
    .get('/', positionController.getAll)
    .post('/', express.urlencoded({ extended: true }), positionController.addPosition)
    .put('/:id', express.urlencoded({ extended: true }), positionController.updateOne)
    .delete('/:id', positionController.removeOne)

export default router