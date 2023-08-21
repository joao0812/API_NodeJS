import express from 'express'
const router = express.Router()

import projectController from '../controllers/projectController.js'

router.get('/:project_id', projectController.getProjectId)

router.get('/', projectController.getAllProjects)

export default router