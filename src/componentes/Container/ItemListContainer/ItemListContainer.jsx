import { useState, useEffect } from "react";
// import { getFetch } from "../../../helpers/getFetch";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";
import { Spinner } from 'react-bootstrap';
import './ItemListContainer.css';
import ItemSearch from "../ItemSearch/ItemSearch";

import { collection, getDocs, getFirestore, query } from 'firebase/firestore'; 


function ItemListContiner() {  
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [bool, setBool] = useState(true)

  // const [prod, setProd] = useState({});

  
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
  /* ITEM DETAIL CONTAINER*/
  // useEffect(()=> {
  //   const db = getFirestore()
    
  //   const querryDoc = doc(db, 'items', 'XYOSATx2YdXJ9opT2dBP')
  //   getDoc(querryDoc)
  //   .then (resp => setProd( { id: resp.id, ...resp.data() } ))

  // }, [id])

  /* TRAER TODOS LOS PRODUCTOS DE FIRESTORE*/
  /* ITEM LIST CONTAINER */
  useEffect(()=> {
    const db = getFirestore()
    
    const queryCollection = collection(db, 'items')
    // const queryFilter = query(queryCollection, where('price', '>=', 10) )
    const queryFilter = query(queryCollection)
    getDocs(queryFilter)
    .then (resp => setProds( resp.docs.map(producto =>({ id: producto.id, ...producto.data() }))))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  }, [id])


  
  // const handleClick=(e)=>{
  //   e.preventDefault() 
  //   setBool(!bool)
  // }

  return (
      <> 
        <div className="container mb-5">
          <div className="row justify-content-center">
              {/* <button onClick={handleClick} className='btn btn-outline-primary w-50'>Cambiar estado </button>     */}
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