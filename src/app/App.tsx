import '../global.css'
import './style/index.css'
import './style/App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLoadState } from './hooks/useLoadState';
import Home from '../pages/home/Home';
import SignIn from '../pages/sign-in/SignIn';
import PetShop from '../pages/pet-shop/PetShop';

const App = () => {
  useLoadState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} >
          <Route path='/shop' element={<PetShop/>} />
          {/* <Route path='/shop' element={<PetShop/>} /> */}
        </Route>

        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
