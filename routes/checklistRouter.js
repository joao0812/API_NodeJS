import express from 'express'
const router = express.Router()

import checklistController from '../controllers/checklistController.js'

router.get('/:checklist_id', checklistController.getChecklist)
router.get('/', checklistController.getAllChecklist)

router.post('/create', express.urlencoded({ extended: true }), checklistController.addChecklist)

export default router