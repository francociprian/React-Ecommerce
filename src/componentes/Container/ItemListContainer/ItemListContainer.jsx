import { useState, useEffect } from "react";
import { getFetch } from "../../../helpers/getFetch";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";
import { Spinner } from 'react-bootstrap';
import './ItemListContainer.css';
import ItemSearch from "../ItemSearch/ItemSearch";
 
function ItemListContiner() {  
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {id} = useParams();

  useEffect(()=> {
    if(id) {
      getFetch
      .then(resp => setProds(resp.filter(prod => prod.description === id)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
    } else {
      getFetch
      .then(resp => setProds( resp ))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
    }
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