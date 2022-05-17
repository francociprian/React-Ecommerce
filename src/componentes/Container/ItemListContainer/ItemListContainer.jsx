import { useState, useEffect } from "react";
// import { getFetch } from "../../../helpers/getFetch";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";
import { Spinner } from 'react-bootstrap';
import './ItemListContainer.css';
import ItemSearch from "../ItemSearch/ItemSearch";

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'; 


function ItemListContiner() {  
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // useEffect(()=> {
  //     if(id) {
  //       getFetch
  //       .then(resp => setProds(resp.filter(prod => prod.description === id)))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false))
  //     } else {
  //       getFetch
  //       .then(resp => setProds( resp ))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false))
  //     }
  //   }, [id])


  /* TRAER UN SOLO PRODUCTO DE FIRESTORE*/
  /*useEffect(()=> {
    const db = getFirestore()
    const querryDoc = doc(db, 'items', 'XYOSATx2YdXJ9opT2dBP')
    getDoc(querryDoc)
    .then (resp => setProd( { id: resp.id, ...resp.data() } ))
  }, [id]) */

  /* TRAER TODOS LOS PRODUCTOS DE FIRESTORE*/
  /* useEffect(()=> {
    const db = getFirestore()
    
    const queryCollection = collection(db, 'items')
    const queryFilter = query(queryCollection)
    getDocs(queryFilter)
    .then (resp => setProds( resp.docs.map(producto =>({ id: producto.id, ...producto.data() }))))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  }, [id]) */

  useEffect(()=> {
    const db = getFirestore()    
    const queryCollectionFinal =  !id ?  collection(db, 'items'):   query( collection(db, 'items'), where('description','==', id) )                             

    getDocs(queryCollectionFinal)
    .then(resp => setProds( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))   
    
}, [id]) 

  return (
      <> 
        <div className="container mb-5">
          <div className="row justify-content-center">
              <ItemSearch />
              {   loading ? <div className="load"><Spinner animation="border" role="status" /> </div> 
                :
                  <ItemList prods={prods}/>
              }
          </div>
        </div>
      </>
  )
}

export default ItemListContiner