export {};

declare global{
  interface ContentsProps {
    children: ReactNode;
  }
  declare interface UserInfo {
    id: string;
    name: string;
    petType: PetType;
    isActive: boolean;
  };
  interface RecommendItems {
    id: string;
    brandName: string;
    itemName: string;
    price: number;
    imgUrl: string;
  }
}