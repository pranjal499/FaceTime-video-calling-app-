import express, {type Application, type Request, type Response} from 'express'
import dotenv from 'dotenv';
import http from 'http';
import {Server, Socket} from 'socket.io';
import meetingRouter from './modules/meetings/meeting.routes.js'
import userRouter from './modules/user/user.routes.js'

dotenv.config();

const PORT = process.env.SERVER_PORT;
const app: Application = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection_error', (err) => {
    console.log('socket error');
    console.log(err);
});

app.use('/user', userRouter);
app.use('/meeting', meetingRouter);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});