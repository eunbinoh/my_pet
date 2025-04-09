import '../global.css'
import './style/index.css'
import './style/App.scss'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useLoadState } from './hooks/useLoadState';
import Gnb from '../layout/footer/gnb';
import Home from '../pages/home/Home';
import SignIn from '../pages/sign-in/SignIn';
import PetShop from '../pages/pet-shop/PetShop';
import PetCare from '../pages/pet-care/PetCare';
import ShopList from '../pages/pet-shop/ShopList';
import CareList from '../pages/pet-care/CareList';
import ShopDetail from '../pages/pet-shop/ShopDetail';

const App = () => {
  useLoadState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/shop' element={<PetShop/>} />
        <Route path='/shop-list' element={<ShopList/>} />
        <Route path='/item' element={<ShopDetail/>} />
        <Route path='/care' element={<PetCare/>} />
        <Route path='/care-list' element={<CareList/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
      <Gnb />
    </BrowserRouter>
  )
}
export default App
