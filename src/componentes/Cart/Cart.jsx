import { useCartContext } from '../../Context/CartContext';
import './Cart.css';
import { Button } from 'react-bootstrap';

function Cart() {
  const { cartList, deleteCart } = useCartContext()

  return (
    <div className='mt-5 container'>
      <Button variant='danger' onClick={ deleteCart }>Clear Cart</Button>
      <div className='row justify-content-center'>
        {cartList.map(item=> 
          <div key={item.id} className='col-sm-5 col-md-4 col-lg-3 mt-5'>
            <div className='card w-100 mt-5'>
              <div className='card-header'>
                <p className='cart-title'>{ item.title }</p>
              </div>
              <div className="card-body">
                <img src={ item.image } alt={item.title} className='w-100' />
              </div>
              <div className="card-footer">
                <p>${ item.price * item.cantidad }</p>
              </div>
            </div>
          </div> 
        )}
      </div>
    </div>
  )
}

export default Cart