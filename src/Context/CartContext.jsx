import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setcartList] = useState([]);
    
    const addToCart = (item) => {
        setcartList([ ...cartList, item ])
    }
    const deleteCart = () => {
        setcartList([])
    }

    // const setLocalStorage = () => {
    //     localStorage.setItem('cart', JSON.stringify(cartList))
    // }

    return (
         <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteCart
         }}>
             { children }
         </CartContext.Provider>
    )
}

export default CartContextProvider