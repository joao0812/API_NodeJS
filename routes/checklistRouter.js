import express from 'express'
const router = express.Router()

import checklistController from '../controllers/checklistController.js'

router
    .get('/:id', checklistController.getOne)
    .get('/', checklistController.getAll)
    .post('/create', express.urlencoded({ extended: true }), checklistController.addChecklist)
    .put('/update/:id', express.urlencoded({ extended: true }), checklistController.updateOne)
    .delete('/remove/:id', checklistController.removeOne)

export default router