import React, { useContext } from "react";

//Context
import { CartContext } from "../context/CartContextProvider";

//functions
import { shorten } from "../helpers/functions";

//Style
import style from "../assets/css/cartcard.module.css";

const CartCard = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.cartProducts;

  return (
    <div className={style.container}>
      <img src={image} alt="product" />
      <div className={style.details}>
        <div>
          <h3>{shorten(title)}</h3>
          <p>{price} $</p>
        </div>
        <div>
          <span>{quantity}</span>
        </div>
        <div>
          <div>{quantity > 0 && <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.cartProducts })}>Remove</button>}</div>
          <div>{quantity > 0 && <button onClick={() => dispatch({ type: "INCREASE_ITEM", payload: props.cartProducts })}>+</button>}</div>
          <div>{quantity > 1 && <button onClick={() => dispatch({ type: "DECREASE_ITEM", payload: props.cartProducts })}>-</button>}</div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
