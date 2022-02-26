import React , {useContext} from 'react';


//Context
import { CartContext } from '../context/CartContextProvider';

//Icon
import cartIcon from "../assets/icon/cart.svg"

//Router
import { Link } from 'react-router-dom';

//Styles
import style from "../assets/css/navbar.module.css"

const Navbar = () => {
  const { cartState } = useContext(CartContext);
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link to="/products">Products</Link>
        <div>
          <Link to="/cart"><img src={cartIcon} alt="Cart icon" style={{width : "30px"}}/></Link>
          <span>{cartState.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;