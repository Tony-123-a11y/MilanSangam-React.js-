import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from '../Features/Userslice'
import  socketSlice  from '../Features/SocketSlice'
import { apiSlice } from '../Redux/apiSlice' 

export const store = configureStore({
  reducer: {
    user: userSlice,
    socket: socketSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), 
})

