import express from 'express'
import UserController from '../controllers/users.js'
const router = express.Router()

router.get('/',UserController.getAllUsers)
router.post('/create',UserController.create)

export default router