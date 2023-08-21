import express from 'express'
const router = express.Router()

import employController from '../controllers/employController.js'

router.get('/:employ_id', employController.getEmploy)
router.get('/', employController.getAllEmploy)

router.post('/create', express.urlencoded({ extended: true }), employController.addEmploy)

export default router