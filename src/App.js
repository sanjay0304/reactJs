// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
//import { Banner } from "./components/Banner";
import { Products} from "./components/Products";
import ProductPage from "./components/ProductPage";
// import { ProductsContextProvider } from "./global/ProductsContext";
// import { CartContextProvider } from "./global/CartContext";
import { Cart } from "./components/Cart";
import {NotFound} from "./components/NotFound"

function App() {
  return (
    <div className="App">
      {/* <ProductsContextProvider> */}
        {/* <CartContextProvider> */}
        
        <Navbar></Navbar>
        {/* <Banner></Banner> */}
        <Routes>
          <Route exact path="/" element={<Products/>} />
          <Route exact path="/product/:id" element={<ProductPage/>} />
          <Route exact path="/cart" element={<Cart/>} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </CartContextProvider> */}
      {/* </ProductsContextProvider> */}
    </div>
  );
}

export default App;
