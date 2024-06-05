import express from 'express'
import http from 'http'
import { Server as SocketIo } from 'socket.io'


const app = express()
const server = http.createServer(app)
const io = new SocketIo(server, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? false :
            ["http://localhost:3000"]
    }
})


app.get('/', (req, res) => {
    res.send('Socket.Io server running')
})

io.on('connection', (socket) => {
    console.log(`A user connected`)

    socket.on('message', (msg) => {
        io.emit('message', msg)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

server.listen(3001, () => {
    console.log('Server is running on port 3001')
})

