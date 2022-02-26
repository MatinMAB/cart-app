import React, { useContext } from "react";

//Router
import { Link } from "react-router-dom";

//styles
import style from "../assets/css/product.module.css";

//functions
import { shorten, isInCard, quantityCount } from "../helpers/functions";

//Context
import { CartContext } from "../context/CartContextProvider";

const Product = ({ productData }) => {
  const { cartState, dispatch } = useContext(CartContext);

  return (
    <div className={style.productBox}>
      <img src={productData.image} alt="product" className={style.productImg} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div className={style.productButtons}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
          {isInCard(cartState, productData.id) ? (
            <button onClick={() => dispatch({ type: "INCREASE_ITEM", payload: productData })}>+</button>
          ) : (
            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add To Cart</button>
          )}
          {quantityCount(cartState, productData.id) > 1 && (
            <button onClick={() => dispatch({ type: "DECREASE_ITEM", payload: productData })}>-</button>
          )}
          {quantityCount(cartState, productData.id) > 0 && (
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}>Remove</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
