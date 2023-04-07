import { createSlice } from "@reduxjs/toolkit";
import { toastContainer, toast } from "react-toastify";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        shoppingCart: [],
        qty: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {

            let { shoppingCart, qty, totalPrice } = state;
            qty += 1;
            totalPrice += action.payload.product.price;
            if (shoppingCart.length === 0) {
                const updatedshoppingCart = [...shoppingCart, action.payload.product];
                const fcart = updatedshoppingCart.map((product) => {
                    return {
                        ...product,
                        pqty: 1
                    }
                });
                // console.log(fcart.pqty);
                state.shoppingCart = [...fcart];
                state.qty = qty;
                state.totalPrice = totalPrice;

            } else {

                const ifexist = shoppingCart.find(product => product.id === action.payload.id);
                if (ifexist) {
                    return;
                } else {
                    let { ...product } = action.payload.product;
                    product.pqty = 1;
                    const updatedshoppingCart = [...shoppingCart, product];
                    //     const fcart = updatedshoppingCart.map((product)=>{
                    //    return{
                    //     ...product,
                    //     pqty:1
                    //    } 
                    // });
                    state.shoppingCart = [...updatedshoppingCart];
                    state.qty = qty;
                    state.totalPrice = totalPrice;
                }
            }
            //console.log(state.qty);
            action.payload.showToast();

            // console.log(state.shoppingCart);
            // console.log(state.qty);
            // console.log(state.totalPrice);

        },
        removeFromCart: (state, action) => {
            let { shoppingCart, qty, totalPrice } = state;
            let { ...product } = action.payload.cart;
            let { price, pqty } = product;
            totalPrice -= price * pqty;
            qty -= pqty;
            state.qty = qty;
            state.totalPrice = totalPrice;
            const filteredProducts = shoppingCart.filter((obj) => obj.id !== product.id);
            state.shoppingCart = [...filteredProducts];
        },
        incrementProductqty: (state, action) => {
            let { shoppingCart, qty, totalPrice } = state;
            let { ...product } = action.payload.cart;
            qty += 1;
            totalPrice += product.price;
            let { pqty } = product;
            pqty = pqty + 1;
            //product.rating.count
            let index = shoppingCart.findIndex(cart => cart.id === action.payload.id);

            shoppingCart[index] = { ...product, pqty };

            state.qty = qty;
            state.totalPrice = totalPrice;

        },
        decrementProductqty:(state,action)=>{
            let { shoppingCart, qty, totalPrice } = state;
            let { ...product } = action.payload.cart;
            if(product.pqty<=1)
            return;
            qty -= 1;
            totalPrice -= product.price;
            let { pqty } = product;
            pqty = pqty - 1;
            //product.rating.count
            let index = shoppingCart.findIndex(cart => cart.id === action.payload.id);

            shoppingCart[index] = { ...product, pqty };

            state.qty = qty;
            state.totalPrice = totalPrice;
        },
        emptyCart:(state,action)=>{
            
            state.shoppingCart= [];
            state.qty=0;
            state.totalPrice=0;
            action.payload.showOrderToast();
        }
    }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, incrementProductqty,decrementProductqty,emptyCart } = cartSlice.actions;