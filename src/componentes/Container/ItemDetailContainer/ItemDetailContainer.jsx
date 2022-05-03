import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../../helpers/getFetch';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { Spinner } from 'react-bootstrap'
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { detalleId } = useParams() 

  useEffect(()=>{
    getFetch
    .then(prod => prod.find(item => item.id === detalleId))
    .then(resp => setProducto(resp) )
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  })

  return (
      <div className="container detail-container">
          {
            loading ? <div className="load"><Spinner animation="border" role="status" /></div> 
            :
            <ItemDetail producto={producto} /> 
          }
      </div>
  )
}

export default ItemDetailContainer