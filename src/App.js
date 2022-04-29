import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemSearch from './componentes/Container/ItemSearch/ItemSearch'
import ItemListContainer from './componentes/Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/Container/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() { // componenete contendor

  return (
          <BrowserRouter>
            <div className="App" >
                <NavBar />
                <ItemSearch />
                <Routes>
                    <Route 
                      path='/' 
                      element={
                        <ItemListContainer
                        saludo='Hola soy ItemListContainer'
                        />
                      }
                    />
                    <Route 
                      path='/description/:id' 
                      element={
                        <ItemListContainer
                        saludo='Hola soy ItemListContainer'
                        />
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
            </div>
          </BrowserRouter>
  )
}

export default App;
