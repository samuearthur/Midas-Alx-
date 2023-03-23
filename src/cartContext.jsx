import { createContext, memo, useEffect, useMemo, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart")
    return localData ? JSON.parse(localData) : []
  })
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  )
};


export default CartContextProvider