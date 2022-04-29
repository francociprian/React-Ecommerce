import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail({producto}) {

  const onAdd = (cant) => {
    console.log(cant)
  }

  return (
    <>
      <div>
          <div className="detail-link">
            <Link to='/' className="detail-arrow">
              <BsArrowLeftCircleFill className="fs-3"/> 
            </Link>
            <p className='detail-type'>{producto.description}</p>
          </div>
          <div className='detail-description'>
            <img className='detail-image' src={ producto.image } alt=''/>
            <div className='detail-add'>
              <p className='detail-title'>{producto.title}</p>
              <p className='fs-4'>${producto.price}</p>
              <ItemCount initial={1} stock={10} onAdd= { onAdd } />
            </div>  
          </div>
      </div>
    </>
  )
}

export default ItemDetail