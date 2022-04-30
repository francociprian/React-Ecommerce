import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom' ;


const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const handleIncrease = () => {
        if (count < stock) {
            setCount( count + 1 )
        }
    }
    const handleDecrease = () => {
        if (count > initial) {
            setCount( count - 1 )
        }
    }   

    const add = () => {
        onAdd( count )
        // console.log(count)
    }
    

    return (
        <div className='itemCount'>
          <div>
              <Button style={{margin: '5px 15px'}} variant="secondary" onClick={ handleDecrease } >-</Button>
                  <label>{ count }</label>
              <Button style={{margin: '5px 15px'}} variant="secondary" onClick={ handleIncrease } >+</Button>
          </div>
          <Link to='/cart'>
                <Button variant='outline-success' onClick={ add }>Add to Cart</Button>
          </Link>
        </div>
    )
}

export default ItemCount;