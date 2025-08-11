import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "../redux/Slices/CartSlice"

const Store =  configureStore({
  reducer: {
    cart : CartSlice 
  },
})

export default Store