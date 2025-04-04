export {};

declare global{
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

}