import express from 'express'
import IndexController from '../controllers/index.js'
import UserRoutes from './user.js'
const router = express.Router()

router.get('/',IndexController.home)

router.use('/users',UserRoutes)

export default router