import React, { useEffect, useState } from "react";
import "../styles/products.css";
import { addToCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSS, fetchProducts } from "../features/productSlice";
import { Link } from "react-router-dom";



const Products = () => {

  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  const { isAuthenticated,  } = useSelector((state) => state.auth);
  console.log(isAuthenticated, );

  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log(products);
    dispatch(fetchProducts());
  }, []);

  const handletoAdd = (products) => {
    if(isAuthenticated === false){
      setMessage("user is not logged in please login to continues your shopping")
     

    } else if(isAuthenticated === true){
      dispatch(addToCart(products));
    }
    
  };

  if (status === STATUSS.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUSS.ERROR) {
    return <h2>SOmething went wrong..</h2>;
  }
  return (
    <>
    <div>
    { message && isAuthenticated === false && <h2 >{message} <Link to='/login'>Click here</Link></h2> }
    </div>
      <div className="container">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" height="80px" />
            <h4>{item.title}</h4>
            <h5>Rs{item.price}</h5>

            <button onClick={() => handletoAdd(item)} className="add-to-cart">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
