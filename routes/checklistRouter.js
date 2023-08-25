import express from 'express'
const router = express.Router()

import checklistController from '../controllers/checklistController.js'

router
    .get('/:id', checklistController.getOne)
    .get('/', checklistController.getAll)
    .post('/', express.urlencoded({ extended: true }), checklistController.addChecklist)
    .put('/:id', express.urlencoded({ extended: true }), checklistController.updateOne)
    .delete('/:id', checklistController.removeOne)

export default router