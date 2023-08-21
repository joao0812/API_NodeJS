import express from 'express'
const router = express.Router()

import memberController from '../controllers/memberController.js'

router.get('/:member_id', memberController.getMember)
router.get('/', memberController.getAllMember)

router.post('/create', express.urlencoded({ extended: true }), memberController.addMember)

export default router