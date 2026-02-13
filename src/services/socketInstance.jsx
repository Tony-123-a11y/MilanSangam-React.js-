import { io } from "socket.io-client";
const api= import.meta.env.VITE_API_URL.split('/api')
console.log(api)
const socket = io(api[0],{
    transports:['websocket'],
    reconnection:true,
    reconnectionAttempts:5,
    autoConnect:false
})
export default socket