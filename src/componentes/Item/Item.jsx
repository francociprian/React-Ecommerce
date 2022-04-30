import { Link } from 'react-router-dom';
import './Item.css'

function Item({ prod }) {
  return (
        <div
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