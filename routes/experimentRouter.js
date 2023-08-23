import express from 'express'
const router = express.Router()

import experimentController from '../controllers/experimentController.js'

router
    .get('/:id', experimentController.getOne)
    .get('/', experimentController.getAll)
    .post('/create', express.urlencoded({ extended: true }), experimentController.addExperiment)
    .put('/update/:id', express.urlencoded({ extended: true }), experimentController.updateOne)
    .delete('/remove/:id', experimentController.removeOne)

export default router