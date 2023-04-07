// import { useContext, useEffect } from "react";
// import { ProductsContext } from "../global/ProductsContext";
// import { CartContext } from "../global/CartContext";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { saveInStore } from "../reducer/productReducer";
//import { addToCart } from "../reducer/cartReducer";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import axios from "axios";



export const Products = () => {
  // const { products } = useContext(ProductsContext);
  // const {dispatch} = useContext(CartContext)
  // const [getProducts,setProducts] = useState([]);
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const PAGE_SIZE = 20;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await axios.get("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products");
        //console.log(fetchedProducts.data);
        //  setProducts([...fetchedProducts.data]);
        const data = fetchedProducts.data;

        dispatch(saveInStore({ allProducts: data }));
      }
      catch (error) {
        console.log(error);
      };
    }
    fetchProducts();
  }, [dispatch]);

  // const showToast = () => {
  //   toast("Product added to cart");
  // }

  const handleClick = (page) => {
    setCurrentPage(page);
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? 'active' : ""}>
          <button onClick={() => handleClick(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  }
  const goToProductDetails = (id) => {
    navigate("/product/" + id);
  }

  const renderProducts = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return products.slice(startIndex, endIndex).map((product) => (
      <div onClick={() => goToProductDetails(product.id)} className="product" key={product.id}>
        {/* <div onClick={() => dispatch(addToCart({ showToast, id: product.id, product }))} className="product" key={product.id}> */}
        {/* <ToastContainer /> */}
        <div className="cover">
          <div className="product-img">
            <img src={product.image} alt="not found" className="im" />
          </div>
          <div className="product-details">
            <div className="product-name">{product.title}</div>

            <div className="product-price">&#8377; {product.price}</div>
            {/* <div className="add-to-cart" onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product})}>Add to cart</div> */}
          </div>
        </div>
      </div>
    ));
  }



  //console.log(products);
  return (
    <div className="container" style={{ display: "flex", flexDirection: "column" }}>
      <div className="products">

        {products.length > 1 ? renderProducts() : <h1>Loading...</h1>}

      </div>
      <div style={{ alignSelf: "center", marginBottom: "40px" }}>
        <ul id="page-numbers">
          {totalPages > 1 ? renderPageNumbers() : ""}
        </ul>
      </div>
      <div style={{ alignSelf: "center", marginTop: "100px" }}>

      </div>

    </div>
  )
}