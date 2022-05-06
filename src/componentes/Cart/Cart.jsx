import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css';

import Image from 'react-bootstrap/Image'

function Cart() {
  const { cartList, deleteCart, deleteItem, totalCartPrice } = useCartContext()

  return (  
    <>
      {cartList.length === 0 ? 
          <div className='mt-5'>
            <p className='display-5'>The cart is empty</p>
            <Link to='/' >
              <Button variant='contained' color="success">Keep buying</Button>
            </Link>
          </div>
          :
          <div className='mt-5 mb-5 container'>
            <div className='d-flex justify-content-between'>
              <p className='total-price' >{`Total Cart: $${totalCartPrice()} `}</p>
              <div><Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={ deleteCart }>Clear Cart</Button></div>
            </div>
            <div className='row justify-content-center mt-5'>
              {cartList.map(item=>
                <div key={item.id} className='cart-cont' >
                  <div className='cart'>
                    <div className='cart-image'>
                      <Image src={ item.image } alt={item.title} fluid/>
                    </div>
                    <div className='cart-container'>
                        <div className='cart-container-icon'>
                          <div>
                            <p className='cart-container-title'>{ item.title }</p>
                            <IconButton aria-label="delete" onClick={ deleteItem }><DeleteIcon /></IconButton>
                          </div>
                        </div>
                        <div className='cart-price'>
                          <p>Amount: { item.cantidad }</p>
                          <p>Price: ${ item.price }</p>
                        </div>
                    </div>
                  </div>
                </div> 
              )}
            </div>
          </div>
      }
    </>
  )
}

export default Cart