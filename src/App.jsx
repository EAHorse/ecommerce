import './App.css';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <CartProvider>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo="¡Ecommerce Vehicle!" />}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer saludo="¡Ecommerce Vehicle!" />} />
          <Route path='/detalle/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
    </CartProvider>
  );
};

export default App;
