import express from 'express'
const router = express.Router()

import experimentController from '../controllers/experimentController.js'

router
    .get('/:id', experimentController.getOne)
    .get('/', experimentController.getAll)
    .post('/', express.urlencoded({ extended: true }), experimentController.addExperiment)
    .put('/:id', express.urlencoded({ extended: true }), experimentController.updateOne)
    .delete('/:id', experimentController.removeOne)

export default router