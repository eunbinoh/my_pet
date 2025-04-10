import '../global.css'
import './style/index.css'
import './style/App.scss'

import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useLoadState } from './hooks/useLoadState';
import Gnb from '../layout/footer/gnb';
import Footer from "../layout/footer/cart-footer";
import Home from '../pages/home/Home';
import SignIn from '../pages/sign-in/SignIn';
import PetShop from '../pages/pet-shop/PetShop';
import PetCare from '../pages/pet-care/PetCare';
import ShopList from '../pages/pet-shop/ShopList';
import CareList from '../pages/pet-care/CareList';
import ShopDetail from '../pages/pet-shop/ShopDetail';
import CareDetail from '../pages/pet-care/CareDetail';

const App = () => {
  useLoadState();

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

const AppContent = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path)

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/shop' element={<PetShop/>} />
        <Route path='/shop-list' element={<ShopList/>} />
        <Route path='/item-detail' element={<ShopDetail/>} />
        <Route path='/care' element={<PetCare/>} />
        <Route path='/care-list' element={<CareList/>} />
        <Route path='/care-detail' element={<CareDetail/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
      {
        path === '/item-detail' ? (
          <Footer type='cart'/>
        ) : path === '/care-detail' ? (
          <Footer type='reserve'/>
        ) : (
          <Gnb />
        )
      }
    </>  
  )
}
export default App
