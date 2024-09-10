
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from "./Pages/Cart";
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import livestock_banner from './Components/Assets/livestockBanner.png'
import poultry_banner from './Components/Assets/poultryBanner.png'
import crops_banner from './Components/Assets/cropsbanner.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      
    <Navbar/>
    <Routes>

      <Route path='/' element={<Shop/>}/>
      <Route path='/livestock' element={<ShopCategory banner ={livestock_banner} category= "livestock"/>}/>
      <Route path='/poultry' element={<ShopCategory  banner = {poultry_banner} category= "poultry"/>}/>
      <Route path='/crops' element={<ShopCategory banner ={crops_banner}category= "crops"/>}/>
      <Route path= "product" element={<Product/>}>
        <Route path= ':productId' element={<Product/>}/>

      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>


    </Routes>
    <Footer/>

    </BrowserRouter>

    </div>
  );
}

export default App;
