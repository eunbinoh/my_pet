export {};
import ReservationHistory from "../../pages/my-page/ReservationHistory";

declare global {
  interface ContentsProps {
    children: ReactNode;
  }
  type UserInfo = {
    id: string;
    name: string;
    petType: PetType;
    isActive: boolean;
  };
  type RecommendHospital = {
    id: string;
    place: string;
    name: string;
    score: number;
    reviews: number;
    imgUrl: string;
  };
  type RecommendItem = {
    id: string;
    brandName: string;
    itemName: string;
    price: number;
    imgUrl: string;
  };
  type HotItem = {
    id: string;
    brandName: string;
    itemName: string;
    price: number;
    imgUrl: string;
    score: number;
    reviews: number;
  };
  type OrderHistory = {
    id: string;
    brandName: string;
    itemName: string;
    itemPrice: number;
    salePrice: number;
    totalPrice: number;
    quantity: number;
    date: string;
    status: "paid" | "delivering" | "complete" | "cancel";
    orderNo: string;
    phone: string;
    address: string;
    name: string;
    memo: string;
    payMethod: string;
    payDate: string;
    imgUrl: string;
  };
  type ReservationHistory = {
    id: string;
    itemName: string;
    price: number;
    date: string;
    time: string;
    status: "complete" | "recept" | "cancel";
    ownerName: string;
    phone: string;
    petName: string;
    birth: string;
    breed: string;
    note: string;
    memo: string;
    payMethod: string;
    imgUrl: string;
  };
}
