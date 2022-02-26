import React, { useContext } from "react";

//Router
import { Link } from "react-router-dom";

//Components
import CartCard from "../components/CartCard";

//Style
import style from "../assets/css/cart.module.css";
//Context
import { CartContext } from "../context/CartContextProvider";

const Cart = () => {
  const { cartState, dispatch } = useContext(CartContext);
  return (
    <div className={style.container}>
      <div className={style.products}>
        {cartState.selectedItems.map((item) => (
          <CartCard key={item.id} cartProducts={item} />
        ))}
      </div>
      <div className={style.checkout}>
        {cartState.itemsCounter > 0 && (
          <div className={style.total}>
            <p>
              <span>Total Items : </span> {cartState.itemsCounter}
            </p>
            <p>
              <span>Total Price : </span> {cartState.total} $
            </p>
            <div>
              <button onClick={() => dispatch({ type: "CHECKOUT" })}>checkout</button>
              <button onClick={() => dispatch({ type: "CLEAR" })}>clear</button>
            </div>
          </div>
        )}

        {cartState.checkout && (
          <div  className={style.checked}>
            <h3>You Checked Out Successfully</h3>
            <Link to="/products">Buy Again</Link>
          </div>
        )}
        {!cartState.checkout && cartState.itemsCounter === 0 && (
          <div className={style.empty}>
            <h3>Your Cart is Empty</h3>
            <Link to="/products">Buy Product</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
