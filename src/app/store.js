import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import productSlice from '../features/productSlice'
import authSLice from '../features/authSLice'




export const store = configureStore({
  reducer: {
    cart:cartSlice,
    products:productSlice,
    auth:authSLice
  },
})