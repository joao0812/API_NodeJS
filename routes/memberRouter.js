import express from 'express'
const router = express.Router()

import memberController from '../controllers/memberController.js'

router
    .get('/:id', memberController.getOne)
    .get('/', memberController.getAll)
    .post('/create', express.urlencoded({ extended: true }), memberController.addMember)
    .put('/update/:id', express.urlencoded({ extended: true }), memberController.updateOne)
    .delete('/remove/:id', memberController.removeOne)

export default router