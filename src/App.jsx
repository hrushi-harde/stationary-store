import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Shop from './Pages/Shop.jsx';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Components/ProductDetails.jsx';
import Cart from './Pages/Cart';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/shop/:category' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </>
  );
}

export default App;
