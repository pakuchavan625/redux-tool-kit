import {  createSlice } from '@reduxjs/toolkit'

export const STATUSS = Object.freeze( {
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error',
  });

 

const initialState =   {
    data:[],
    status :STATUSS.IDLE
}

 const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        getProduct : (state, action)=>{
            // u cant call the asynch methods here in redux
                state.data = action.payload
        },
        setStatus :(state, action)=>{
            state.status = action.payload
        },
        // extraReducers(builder) {
        //     builder
        //       .addCase(fetchProducts.pending, (state, action) => {
        //         state.status = STATUSS.LOADING
        //       })
        //       .addCase(fetchProducts.fulfilled, (state, action) => {
        //         state.data = action.payload
        //         state.status = STATUSS.IDLE
        //         // Add any fetched posts to the array
          
        //       })
        //       .addCase(fetchProducts.rejected, (state, action) => {
        //         state.status = STATUSS.ERROR
                
        //       })
        //   }
    }
})

export const {getProduct,setStatus } = productSlice.actions

export default productSlice.reducer
  


// Thunk to call the Asynch API call
// export const fetchProducts = createAsyncThunk('product/fetch',async()=>{
//           const res = await fetch("https://fakestoreapi.com/products");
//           const data = await res.json();
//           return data
// })

// Thunk middle ware method

export const fetchProducts =()=>{
    return async function fetchProductThunk(dispatch, getState){
        dispatch(setStatus(STATUSS.LOADING))
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(getProduct(data))
            dispatch(setStatus(STATUSS.IDLE))
        }
        catch(err){
            console.log("error", err)
            dispatch(setStatus(STATUSS.ERROR))
        }
    }
}