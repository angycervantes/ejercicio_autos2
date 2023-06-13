import { Router } from'express'
import { showAutos, addAuto, updateCar, deleteAuto } from '../controllers/autos_controller.js'

const router = Router()

router.get('/', showAutos)
router.post('/addcar', addAuto)
router.delete('/deleteCar', deleteAuto)
router.patch('/updateCar', updateCar)

export default router