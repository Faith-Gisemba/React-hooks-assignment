import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Login from './Login';
import Navigationbar from './Navigationbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div>
      <Navigationbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/ProductDetails/:productId' element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;


