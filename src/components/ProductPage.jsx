import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../reducer/cartReducer";
import { ToastContainer, toast } from "react-toastify";

//import { useState } from "react";
const ProductPage = () => {
    const [getProduct, setProducts] = useState([]);

    const { id } = useParams();
    const products = useSelector((state) => state.products.products);
    const product = products.filter((product) => product.id === Number(id));
    useEffect(() => {
        setProducts(product);
    }, []);

    const dispatch = useDispatch();

    console.log(getProduct);
    const showToast = () => {
        toast("Product added to cart");
    }

    return (
        <>
            <div className="productDetails-container">
                {
                    getProduct.map((product) => {
                        return (
                            <div key={product.id} className="productDetails-details">
                                <div className="small-img">
                                    <img className="sm-img" src={product.image} alt={product.title} />
                                </div>
                                <div className="main-image-btn-container">
                                    <div className="main-img">
                                        <img className="main-image" src={product.image} alt={product.title} />
                                    </div>
                                    <div className="main-img-button-container">
                                        <div className="call-to-action">
                                            <button onClick={() => dispatch(addToCart({ showToast, id: product.id, product }))}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-description-container ">

                                    <div className="Product-title-description jMMicw ">
                                        <span className="product-title">{product.title}</span>
                                        <br />
                                        <span className="product-description">{product.description}</span>
                                    </div>
                                    <div className="product-price-container">
                                        <h4>${product.price}</h4>
                                        <span className="product-price-details">
                                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" height="16" width="16" iconsize="20" className="sc-gswNZR eHtrla">
                                                <g clipPath="url(#info_svg__a)" fill="#666">
                                                    <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18.44c-4.65 0-8.44-3.79-8.44-8.44 0-4.65 3.79-8.44 8.44-8.44 4.65 0 8.44 3.79 8.44 8.44 0 4.65-3.79 8.44-8.44 8.44Z">
                                                    </path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 4.825a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 3.017a1 1 0 0 0-1 1v5.333a1 1 0 0 0 2 0V8.842a1 1 0 0 0-1-1Z">
                                                    </path>
                                                </g>
                                                <defs><clipPath id="info_svg__a"><path fill="#fff" d="M0 0h20v20H0z">
                                                </path>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="product-rating-container">
                                        <span className="product-rating-row">
                                            <span label={product.rating.rate} className="sc-iJnaPW gqqzOU">
                                                <span fontSize="16px" fontWeight="demi" color="#ffffff" className="sc-dkrFOg eXFtxl">{product.rating.rate}</span>
                                                <svg width="8" height="8" viewBox="0 0 20 20" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" ml="4" iconsize="10" className="sc-gswNZR eMqtuK">
                                                    <g clipPath="url(#clip0)">
                                                        <path d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z" fill="#666666">
                                                            </path></g>
                                                            <defs><clipPath id="clip0"><rect width="20" height="19.08" fill="white"></rect></clipPath></defs>
                                                </svg>
                                            </span>

                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <ToastContainer />

            </div>
        </>

    )
}

export default ProductPage;