import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { Spinner } from 'react-bootstrap'
import './ItemDetailContainer.css';

import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { detalleId } = useParams() 

  // useEffect(()=>{
  //   getFetch
  //   .then(prod => prod.find(item => item.id === detalleId))
  //   .then(resp => setProducto(resp) )
  //   .catch((error) => console.log(error))
  //   .finally(() => setLoading(false))
  // })

  useEffect(()=> {
    const db = getFirestore()
    const querryDoc = doc(db, 'items', detalleId)
    getDoc(querryDoc)
    .then (resp => setProducto( { id: resp.id, ...resp.data() } ))
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