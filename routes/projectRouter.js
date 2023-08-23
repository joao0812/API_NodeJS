import express from 'express'
const router = express.Router()

import projectController from '../controllers/projectController.js'

router
    .get('/:id', projectController.getOne)
    .get('/', projectController.getAll)
    .post('/create', express.urlencoded({ extended: true }), projectController.addProject)
    .put('/update/:id', express.urlencoded({ extended: true }), projectController.updateOne)
    .delete('/remove/:id', projectController.removeOne)

export default router