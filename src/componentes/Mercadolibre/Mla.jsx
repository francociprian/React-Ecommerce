import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function MercadoLibre () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url =
      'https://api.mercadolibre.com/sites/MLA/search?q=leds';
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => setItems(() => data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
        <p>Articulos Mercadolibre!</p>
        <div className='row justify-content-center '>
        {items.map((item) => {
            return (
            <Card key={item.id} className="col-sm- col-md-4 col-lg-3 mt-5">
                <Card.Img variant="center" src={item.thumbnail} style={{ width: '300px', height: '400px' }} />
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </Card.Text>
                    <Button variant="light">${item.price}</Button>
                    <Button variant="success"><a href={item.permalink} target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'white' }} >Ir al producto</a></Button>
                </Card.Body>
            </Card>
            );
        })}
        </div>
    </>
  );
}
export default MercadoLibre;