import React, { createContext, useReducer } from "react";

const initialState = {
  cartItems: 0
}

function reducer(state, action) {
  if (action.type === 'add_to_cart') {
    return {
      cartItems: state.cartItems + 1
    };
  }
  throw Error('Unknown action.')
}

const store = createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider };