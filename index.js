import { Server } from 'socket.io';
import cors from 'cors'

import app from './src/app.js'
const PORT = process.env.PORT || 3000
console.log(PORT)

app.use(cors())

const server = app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))

const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log('New Connection')

    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
})
