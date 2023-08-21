import express from 'express'
const router = express.Router()

import executeController from '../controllers/executeController.js'

router.get('/:execute_id', executeController.getExecute)
router.get('/', executeController.getAllExecute)

router.post('/create', express.urlencoded({ extended: true }), executeController.addExecute)

export default router