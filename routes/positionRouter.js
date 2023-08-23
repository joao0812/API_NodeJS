import express from 'express'
const router = express.Router()

import positionController from '../controllers/positionController.js'

router
    .get('/:id', positionController.getOne)
    .get('/', positionController.getAll)
    .post('/create', express.urlencoded({ extended: true }), positionController.addPosition)
    .put('/update/:id', express.urlencoded({ extended: true }), positionController.updateOne)
    .delete('/remove/:id', positionController.removeOne)

export default router