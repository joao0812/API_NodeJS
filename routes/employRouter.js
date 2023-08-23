import express from 'express'
const router = express.Router()

import employController from '../controllers/employController.js'

router
    .get('/:id', employController.getOne)
    .get('/', employController.getAll)
    .post('/create', express.urlencoded({ extended: true }), employController.addEmploy)
    .put('/update/:id', express.urlencoded({ extended: true }), employController.updateOne)
    .delete('/remove/:id', employController.removeOne)

export default router