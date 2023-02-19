import * as React from "react"
import { useContext } from "react";
import { store } from "../store";

const ShoppingCart = () => {
  const globalSate = useContext(store);
  const { state } = globalSate;

  return (
    <p>Your basket has {state.cartItems} items.</p>
  )
}

export default ShoppingCart;