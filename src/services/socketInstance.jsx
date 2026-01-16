import { io } from "socket.io-client";
// let url= "http://localhost:3040"
let url = "https://vivah-sanyog-backend.onrender.com"
const socket = io(url,{
    transports:['websocket'],
    reconnection:true,
    reconnectionAttempts:5,
    autoConnect:false
})
export default socket