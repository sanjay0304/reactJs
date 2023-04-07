import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveInStore: (state, action) => {
      const updatedProducts = action.payload.allProducts.map(product => {
        const updatedProduct = {
          ...product
        }
        if (!updatedProduct.pqty) {
          updatedProduct.pqty = 1;
        }
        return updatedProduct;
      });
      state.products = updatedProducts;
    }
  }
});

export const { saveInStore } = productSlice.actions;
export default productSlice.reducer;


// import {createSlice} from "@reduxjs/toolkit";


// const productSlice = createSlice({
//     name:"products",
//     initialState:{
//         products:[]
//     },
//     reducers:{
//         saveInStore : (state, action) => {
           
//                 const updatedProducts = action.payload.allProducts.map(product => {
//                   const updatedProduct = {
//                     ...product
//                   };
//                   if (!updatedProduct.pqty) {
//                     updatedProduct.pqty = 1;
//                   }
//                   return updatedProduct;
//                 });
//                 return {
//                   ...state,
//                   products: updatedProducts
//                 };
//             }
          
          
          
          
          
          
          
          
          
//             // saveInStore: (state,action)=>{
//             //     const updatedProducts = action.payload.allProducts.map(product => {
//             //         return {
//             //           ...product,
//             //           pqty: 1
//             //         }
//             //       });
//             //       return{
//             //       ...state,
//             //       products:updatedProducts

//             //       }
                
//             //     // state.products = [...updatedProducts];    
//             //     // console.log(state.products);
                
//             // }
//         }  
        
// });

// export default productSlice.reducer;
// export const {saveInStore} = productSlice.actions;