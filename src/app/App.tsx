import "../global.css";
import "./style/index.css";
import "./style/App.scss";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useLoadState } from "./hooks/useLoadState";
import Gnb from "../layout/footer/gnb";
import Footer from "../layout/footer/cart-footer";
import Home from "../pages/home/Home";
import SignIn from "../pages/sign-in/SignIn";
import PetShop from "../pages/pet-shop/PetShop";
import PetCare from "../pages/pet-care/PetCare";
import ShopList from "../pages/pet-shop/ShopList";
import CareList from "../pages/pet-care/CareList";
import ShopDetail from "../pages/pet-shop/ShopDetail";
import CareDetail from "../pages/pet-care/CareDetail";
import MyPet from "../pages/my-pet/MyPet";
import MyPage from "../pages/my-page/UserInfo";
import UserDetail from "../pages/my-page/UserDetail";
import OrderHistory from "../pages/my-page/OrderHistory";
import ReservationHistory from "../pages/my-page/ReservationHistory";

const App = () => {
  useLoadState();

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const path = location.pathname;
  const footerType = () => {
    switch (path) {
      case "/user-detail":
        return "profile";
      case "/shop-detail":
        return "cart";
      case "/care-detail":
        return "reserve";
      default:
        return "";
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<PetShop />} />
        <Route path="/shop-list" element={<ShopList />} />
        <Route path="/shop-detail" element={<ShopDetail />} />
        <Route path="/care" element={<PetCare />} />
        <Route path="/care-list" element={<CareList />} />
        <Route path="/care-detail" element={<CareDetail />} />
        <Route path="/my-pet" element={<MyPet />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/user-detail" element={<UserDetail />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/reservation-history" element={<ReservationHistory />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      {footerType() !== "" ? <Footer type={footerType()} /> : <Gnb />}
    </>
  );
};
export default App;
