import type {Socket} from 'socket.io';

export interface User {
    name: string,
    socket: Socket
}

export class UserManger {
    constructor () {

    }

    addUser(name: string, socket: Socket) {

    }

    removeUser (socketId: string) {

    }

    
}