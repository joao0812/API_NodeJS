import express from 'express'
const router = express.Router()

import memberController from '../controllers/memberController.js'

router
    .get('/:id', memberController.getOne)
    .get('/', memberController.getAll)
    .post('/', express.urlencoded({ extended: true }), memberController.addMember)
    .put('/:id', express.urlencoded({ extended: true }), memberController.updateOne)
    .delete('/:id', memberController.removeOne)

export default router