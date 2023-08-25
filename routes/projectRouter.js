import express from 'express'
const router = express.Router()

import projectController from '../controllers/projectController.js'

router
    .get('/:id', projectController.getOne)
    .get('/', projectController.getAll)
    .post('/', express.urlencoded({ extended: true }), projectController.addProject)
    .put('/:id', express.urlencoded({ extended: true }), projectController.updateOne)
    .delete('/:id', projectController.removeOne)

export default router