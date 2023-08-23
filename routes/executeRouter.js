import express from 'express'
const router = express.Router()

import executeController from '../controllers/executeController.js'

router
    .get('/:id', executeController.getOne)
    .get('/', executeController.getAll)
    .post('/create', express.urlencoded({ extended: true }), executeController.addExecute)
    .put('/update/:id', express.urlencoded({ extended: true }), executeController.updateOne)
    .delete('/remove/:id', executeController.removeOne)

export default router