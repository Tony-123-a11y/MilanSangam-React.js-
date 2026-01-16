import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from '../Features/Userslice'
import  socketSlice  from '../Features/SocketSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    socket:socketSlice,
},
})