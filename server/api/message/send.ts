import { Server } from 'socket.io'

const io = new Server();

export default send((socket) => {
  console.log('send')
})