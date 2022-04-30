import { useContext } from "react";
import { ContextApp } from "../../Context/CartContext";
import Item from "../Item/Item";


function ItemList() {
  const { prods } = useContext(ContextApp);
  return (
    <>
      { prods.map((prod) => <Item key={prod.id} prod={prod} /> ) }
    </>
  )
}

export default ItemList