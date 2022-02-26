import React , {useState , useEffect} from 'react';
import {getProducts} from '../services/api'

export const ProductsContext = React.createContext();

const ProductContextProvider = (props) => {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetchApi();
  },[])

  const fetchApi = async () => {
    setProducts(await getProducts())
  }

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;