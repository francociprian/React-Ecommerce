import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CartContextProvider from './Context/CartContext';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/Container/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
// import Footer from './componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() { // COMPONENTE CONTENEDOR
  
  return (
          <BrowserRouter>
            <CartContextProvider >
              <div className="App" >
                  <NavBar />
                  <Routes>
                      <Route 
                        path='/' 
                        element={
                          <ItemListContainer />
                        }
                      />
                      <Route 
                        path='/description/:id' 
                        element={
                          <ItemListContainer />
                        }
                      />
                      <Route 
                        path='/detalle/:detalleId'
                        element={
                          <ItemDetailContainer />
                        }
                      />
                      <Route path='/cart' element={<Cart />} />
                      <Route path='/*' element={ <Navigate to='/'/> } />
                  </Routes>
                  {/* <Footer/>  */}
              </div>
            </CartContextProvider>
          </BrowserRouter>
  )
}

export default App;
