import express from 'express'
const router = express.Router()

import executeController from '../controllers/executeController.js'

router
    .get('/:id', executeController.getOne)
    .get('/', executeController.getAll)
    .post('/', express.urlencoded({ extended: true }), executeController.addExecute)
    .put('/:id', express.urlencoded({ extended: true }), executeController.updateOne)
    .delete('/:id', executeController.removeOne)

export default router