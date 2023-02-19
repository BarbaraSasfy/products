import * as React from "react"
import { useProductData } from "../hooks/useProductData";
import { useContext } from "react";
import { store } from "../store";


const Product = () => {
  const products = useProductData();
  const globalSate = useContext(store);
  const { dispatch } = globalSate;

  function handleClick() {
    dispatch({ type: 'add_to_cart' });
  }

  return (
    <div>
      {products.map(function (product, idx) {
        return (
          <div key={idx}>
            <h2>{product.title}</h2>
            <img src={product.images[0]} width="200" />
            <h3>{product.description}</h3>
            <h3>£{product.price}</h3>
            <h4>Stock level: {product.stock}</h4>
            <h6>{product.sku}</h6>
            <button onClick={handleClick}>
              Add to cart
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Product;