import express from 'express'
const router = express.Router()

import areaController from '../controllers/areaController.js'

router
    .get('/:id', areaController.getOne)
    .get('/', areaController.getAll)
    .post('/', express.urlencoded({ extended: true }), areaController.addArea)
    .put('/:id', express.urlencoded({ extended: true }), areaController.updateOne)
    .delete('/:id', areaController.removeOne)


export default router