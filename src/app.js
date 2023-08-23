import express from 'express'
const app = express()

import logBookDB from './config/dbConnection.js'

logBookDB.on('error', () => { console.log("Error!!") })
logBookDB.once('open', () => { console.log("Database connected")})

import areaRouter from '../routes/areaRouter.js'
import projectRouter from '../routes/projectRouter.js'
import checklistRouter from '../routes/checklistRouter.js'
import employRouter from '../routes/employRouter.js'
import executeRouter from '../routes/executeRouter.js'
import itemRouter from '../routes/itemRouter.js'
import ImageRouter from '../routes/imageRouter.js'
import memberRouter from '../routes/memberRouter.js'
import positionRouter from '../routes/positionRouter.js'

app.use('/areas', areaRouter)
app.use('/projects', projectRouter)
app.use('/checklists', checklistRouter)
app.use('/employs', employRouter)
app.use('/executes', executeRouter)
app.use('/itens', itemRouter)
app.use('/images', ImageRouter)
app.use('/members', memberRouter)
app.use('/positions', positionRouter)

export default app

