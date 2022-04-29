import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail({producto}) {

  const onAdd = (cant) => {
    console.log(cant)
  }

  return (
    <>
      <div>
          <p className='detail-type'>{producto.description}</p>
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