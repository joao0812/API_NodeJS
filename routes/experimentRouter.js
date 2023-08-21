import express from 'express'
const router = express.Router()

import experimentController from '../controllers/experimentController.js'

router.get('/:experiment_id', experimentController.getExperiment)
router.get('/', experimentController.getAllExperiment)

router.post('/create', express.urlencoded({ extended: true }), experimentController.addExperiment)

export default router