import './App.css';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
  <BrowserRouter>
    <CartProvider>      
        <NavBar />
        <ToastContainer theme='dark'/>
        <Routes>
          <Route path='/' element={<ItemListContainer saludo="¡Ecommerce Vehicle!" />}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer saludo="¡Ecommerce Vehicle!" />} />
          <Route path='/detalle/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    </CartProvider>
  </BrowserRouter>
  );
};

export default App;
