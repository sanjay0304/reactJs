import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartReducer";
import productReducer from "../reducer/productReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore} from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage
  }
  
  const persistedReducer = persistReducer(persistConfig, cartReducer);

  export const store = configureStore({
    reducer: {
        products:productReducer,
        cart:persistedReducer,
        
  }});

export const persistor = persistStore(store);