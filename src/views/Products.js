import React , {useContext} from 'react';
import Product from '../components/Product';

//Styles
import style from "../assets/css/products.module.css"

//Context
import { ProductsContext } from '../context/ProductContextProvider';

//Components


const Products = () => {
  const products = useContext(ProductsContext);

  return (
    <div className={style.container}>
      {
        products.map(product => <Product key={product.id} productData={product} />)
      }
    </div>
  );
};

export default Products;