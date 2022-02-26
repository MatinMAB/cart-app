import React, { useReducer } from "react";

export const CartContext = React.createContext();

const local = localStorage.getItem("state");
const initialState = JSON.parse(local) || {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (items) => {
  const Counter = items.reduce((acc, item) => acc + item.quantity, 0);
  const total = items.reduce((acc, item) => Number(acc) + Number((item.price * item.quantity).toFixed(2)), 0);
  return { itemsCounter: Counter, total: total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, selectedItems: state.selectedItems, ...sumItems(state.selectedItems), checkout: false })
      );
      return { ...state, selectedItems: state.selectedItems, ...sumItems(state.selectedItems), checkout: false };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("state", JSON.stringify({ ...state, selectedItems: [...newSelectedItems], ...sumItems(newSelectedItems) }));

      return { ...state, selectedItems: [...newSelectedItems], ...sumItems(newSelectedItems) };
    case "INCREASE_ITEM":
      const indexI = state.selectedItems.findIndex((item) => item.id === action.payload.id);
      state.selectedItems[indexI].quantity++;
      localStorage.setItem("state", JSON.stringify({ ...state, selectedItems: state.selectedItems, ...sumItems(state.selectedItems) }));

      return { ...state, selectedItems: state.selectedItems, ...sumItems(state.selectedItems) };
    case "DECREASE_ITEM":
      const indexD = state.selectedItems.findIndex((item) => item.id === action.payload.id);
      state.selectedItems[indexD].quantity--;
      localStorage.setItem("state", JSON.stringify({ ...state, selectedItems: state.selectedItems, ...sumItems(state.selectedItems) }));

      return { ...state, selectedItems: state.selectedItems, ...sumItems(state.selectedItems) };
    case "CHECKOUT":
      localStorage.setItem("state", JSON.stringify({ selectedItems: [], itemsCounter: 0, total: 0, checkout: true }));
      return { selectedItems: [], itemsCounter: 0, total: 0, checkout: true };
    case "CLEAR":
      localStorage.setItem("state", JSON.stringify({ selectedItems: [], itemsCounter: 0, total: 0, checkout: false }));
      return { selectedItems: [], itemsCounter: 0, total: 0, checkout: false };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{ cartState, dispatch }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
