import express from 'express'
const app = express()
//const mongoose = require('mongoose')
import mongoose from 'mongoose'

const PORT = 5000

import areaRouter from '../routes/areaRouter.js'
import projectRouter from '../routes/projectRouter.js'
import checklistRouter from '../routes/checklistRouter.js'
import employRouter from '../routes/employRouter.js'
import executeRouter from '../routes/executeRouter.js'
import itemRouter from '../routes/itemRouter.js'
import ImageRouter from '../routes/imageRouter.js'
import memberRouter from '../routes/memberRouter.js'
import positionRouter from '../routes/positionRouter.js'

/* let area = new AreaModel({
    area_name: "Robótica"
})
area.save().then(()=>console.log('Area successfully saved')).catch((err)=>console.log(err))

const areas_list = ['Software', 'Robótica', 'Big Data', 'Mecânica', 'Computação', 'Química']

areas_list.map((ar)=>{
    let area = new AreaModel({
        area_name: ar
    })
    area.save().then(()=>console.log(`${ar} successfully saved`)).catch((err)=> console.log(err))
}) */

mongoose.connect('mongodb://localhost/logBook', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let logBookDB = mongoose.connection

logBookDB.on('error', () => { console.log("Error!!") })
logBookDB.once('open', () => { console.log("Database connected")})

app.use('/areas', areaRouter)
app.use('/projects', projectRouter)
app.use('/checklists', checklistRouter)
app.use('/employs', employRouter)
app.use('/executes', executeRouter)
app.use('/itens', itemRouter)
app.use('/images', ImageRouter)
app.use('/members', memberRouter)
app.use('/positions', positionRouter)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))

