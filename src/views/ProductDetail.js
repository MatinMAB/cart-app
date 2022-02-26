/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";

//Router
import { Link, useParams } from "react-router-dom";

//Context
import { ProductsContext } from "../context/ProductContextProvider";

//Style
import style from "../assets/css/productdetail.module.css";

//Use Axios
import axios from "../plugins/axios";

const ProductDetail = () => {
  const products = useContext(ProductsContext);
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = () => {
    if (products.length > 0) {
      const item = products.filter((item) => item.id === Number(params.id));
      setProduct(item[0]);
    } else if (products.length === 0) {
      axios
        .get(`products/${params.id}`)
        .then((response) => setProduct({ ...response.data }))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={product.image} alt="product" />
      </div>
      <div className={style.details}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>
          <span>Category :</span> {product.category}
        </p>
        <div>
          <span>Price : {product.price} $ </span>
          <br />
          <Link to="/products">Back To Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
