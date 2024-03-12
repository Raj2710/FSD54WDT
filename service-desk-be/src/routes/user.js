import express from 'express'
import validate from '../middleware/Validate.js'
import superAdminGuard from '../middleware/SuperAdminGuard.js'
import UserController from '../controllers/users.js'
const router = express.Router()

router.get('/',validate,superAdminGuard,UserController.getAllUsers)
router.post('/',UserController.create)
router.delete('/:id',UserController.deleteUser)
router.post('/login',UserController.login)

export default router