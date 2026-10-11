import express, {urlencoded, type Application, type Request, type Response, type NextFunction} from 'express'
import dotenv from 'dotenv';
import http from 'http';
import {Server, Socket} from 'socket.io';
import meetingRouter from './modules/meetings/meeting.routes.js'
import userRouter from './modules/user/user.routes.js'

dotenv.config();

const PORT = process.env.SERVER_PORT;
const app: Application = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/user', userRouter);
app.use('/meeting', meetingRouter);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});