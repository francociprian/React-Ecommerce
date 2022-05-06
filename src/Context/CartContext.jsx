import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setcartList] = useState([]);
    
    const addToCart = (item) => {
        if(isInCart(item.id)) {
            const prod = cartList.find(p => p.id === item.id)
            const { cantidad } = prod

            prod.cantidad = item.cantidad + cantidad
            const newCountCart =[...cartList]
            setcartList(newCountCart)
        } else {
            setcartList([ ...cartList, item ])
        }
    }
    const deleteCart = () => {
        setcartList([])
    }
    const totalCart = () => {
        return cartList.reduce((acum, item) => acum += item.cantidad, 0)
    }
    const totalCartPrice = () => {
        return cartList.reduce((acc, item) => acc += item.cantidad * item.price, 0)
    }
    const deleteItem = (id) => {
        setcartList(cartList.filter(clear => clear.id === id))
    }

    const isInCart = (id) => {
        return cartList.some(prod => prod.id === id)
    }
    console.log(cartList)
    return (
         <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteCart,
            totalCart,
            deleteItem,
            totalCartPrice
         }}>
             { children }
         </CartContext.Provider>
    )
}

export default CartContextProvider