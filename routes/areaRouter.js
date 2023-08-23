import express from 'express'
const router = express.Router()

import areaController from '../controllers/areaController.js'

router
    .get('/:id', areaController.getOne)
    .get('/', areaController.getAll)
    .post('/create', express.urlencoded({ extended: true }), areaController.addArea)
    .put('/update/:id', express.urlencoded({ extended: true }), areaController.updateOne)
    .delete('/remove/:id', areaController.removeOne)


export default router