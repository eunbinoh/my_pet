import '../global.css'
import './style/index.css'
import './style/App.scss'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useLoadState } from './hooks/useLoadState';
import Home from '../pages/home/Home';
import SignIn from '../pages/sign-in/SignIn';
import PetShop from '../pages/pet-shop/PetShop';
import Gnb from '../layout/footer/gnb';

const App = () => {
  useLoadState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/shop' element={<PetShop/>} />
        <Route path='/care' element={<PetShop/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
      <Gnb />
    </BrowserRouter>
  )
}
export default App
