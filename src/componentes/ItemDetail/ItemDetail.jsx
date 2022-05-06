import { useCartContext } from "../../Context/CartContext";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from "react";
import Button from '@mui/material/Button';


export function ButtonCartContinue () {
  return (
      <div className='detail-buttton'>
        <Link to='/'>
          <Button variant="contained" color="primary">Seguir Comprando</Button> 
        </Link>
        <Link to='/cart'>
          <Button variant="contained" color="primary">Ir a Cart</Button>
        </Link>
      </div>
  )
} 

function ItemDetail({producto}) {
  const { addToCart, cartList } = useCartContext()
  const [buttonChange, setButttonChange] = useState(false)

  const onAdd = (cant) => {
    addToCart( {...producto, cantidad: cant} )
    setButttonChange(true)
  }
  console.log(cartList)
  return (
    <>
      <div className="item-detail">
          <div className="detail-link">
            <Link to='/' className="detail-arrow">
              <BsArrowLeftCircleFill className="detail-arrow-icon"/> 
            </Link>
          </div>
          <div className="detail-cont">
            <p className='detail-type'>{producto.brand}</p>
            <p className='detail-title'>{producto.title}</p>
            <div className='detail-description'>
              <div>
                <img className='detail-image' src={ producto.image } alt=''/>
                <img className='detail-image' src={ producto.image2 } alt=''/>
              </div>
              <div className='detail-add'>
                <p className='fs-4'>${producto.price}</p>
                {buttonChange ? 
                    <ButtonCartContinue />
                    :
                    <ItemCount initial={1} stock={10} onAdd= { onAdd } />
                }
              </div>  
            </div>
          </div>
      </div>
    </>
  )
}
export default ItemDetail