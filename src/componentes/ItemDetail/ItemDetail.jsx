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
      <div className="item-detail">
          <div className="detail-link">
            <Link to='/' className="detail-arrow">
              <BsArrowLeftCircleFill className="detail-arrow-icon"/> 
            </Link>
            <p className='detail-type'>{producto.description}</p>
          </div>
          <div className="detail-cont">
            <p className='detail-title'>{producto.title}</p>
            <div className='detail-description'>
              <div>
                <img className='detail-image' src={ producto.image } alt=''/>
                <img className='detail-image' src={ producto.image2 } alt=''/>
              </div>
              <div className='detail-add'>
                <p className='fs-4'>${producto.price}</p>
                <ItemCount initial={1} stock={10} onAdd= { onAdd } />
              </div>  
            </div>
          </div>
      </div>
    </>
  )
}

export default ItemDetail