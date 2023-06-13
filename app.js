import express from'express'
import {execute} from'./config/bd.js'
import { autosRoute, usersRoutes, makeRoutes} from'./routes/index.js'

const app = express()
app.use(express.json())

app.use(autosRoute)
app.use (usersRoutes)
app.use (makeRoutes)

execute()
app.listen(3000, () => {
    console.log("el servidor esta corriendo en ele 3000")
})
