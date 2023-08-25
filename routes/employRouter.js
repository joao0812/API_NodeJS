import express from 'express'
const router = express.Router()

import employController from '../controllers/employController.js'

router
    .get('/:id', employController.getOne)
    .get('/', employController.getAll)
    .post('/', express.urlencoded({ extended: true }), employController.addEmploy)
    .put('/:id', express.urlencoded({ extended: true }), employController.updateOne)
    .delete('/:id', employController.removeOne)

export default router