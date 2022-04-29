import { Link } from 'react-router-dom';
import './Item.css'

function Item({ prod }) {
  return (
    /* 
    <Link to={`detalle/${ prod.id }`}>
        <div
          // key={prod.id}
          className='col-md-3'
        >
          <div className='card w-100 mt-5'>
            <div className='card-header'>
              <p>{ `${ prod.title } - ${ prod.description }` }</p>
            </div>
            <div className="card-body">
              <img src={ prod.image } alt=' ' className='w-50' />
            </div>
            <div className="card-footer">
              <p>${ prod.price }</p>
              <button className="btn btn-outline-primary btn-block">
                Detalles del Producto
              </button>
            </div>
          </div>
        </div>  
    </Link> 
    */
        <div
          // key={prod.id}
          // className='col-md-3'
          className='col-sm-6 col-md-5 col-lg-4 mt-5'
        >
          <div className='card w-100 mt-5'>
            <div className='card-header'>
              <h5>{ `${ prod.title } - ${ prod.description }` }</h5>
            </div>
            <div className="card-body">
              <img src={ prod.image } alt={prod.title} className='w-100' />
            </div>
            <div className="card-footer">
              <p>${ prod.price }</p>
              <Link to={`/detalle/${ prod.id }`}>
                <button className="btn btn-outline-primary btn-block">
                  Detalles del Producto
                </button>
              </Link>
            </div>
          </div>
        </div> 
  )
}

export default Item