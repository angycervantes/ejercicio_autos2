import { Router } from'express'
import controllerMake from '../controllers/make_controller.js'
import verificar from "../middleware/middleware.js"

const route = Router()

route.get('/getMakes', verificar, controllerMake.showMakes)
route.post('/postMakes', controllerMake.addMakes)

//route.delete('/deleteMakes', ''''''.addMake)

export default route