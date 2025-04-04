import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import useItemStore from "../../shared/stores/userItemStore";
import ItemBoxLineHalf from '../../features/itemBoxLineHalf';
import Header from "../../layout/header/logo-header";

const ShopList = () => {
  const { hotItems, fetchItems } = useItemStore();
  const navigate = useNavigate();
  const location = useLocation();
  const tabIndex = location.state?.tab ?? 0;

  const movePage = ( path : string, tab? : number) => {
    navigate(path, tab ? { state: { tab }} : {});
  }

  const handleMainTab = (tabIndex: number) => {
  }

  useEffect(()=> {
    fetchItems();
  },[])

  return (
    <>
      <Header 
        hasHeadTab={true} 
        handleTab={ handleMainTab } 
        tabTitles={['사료','간식']} 
        targetTab={tabIndex}
      />
      <div className='home-container'>
        <div className='item-list-box'>
            {
              hotItems.map((hot,index:number) => (
                <ItemBoxLineHalf key={hot.id} item={hot} index={index} />
              ))
            }
            {
              hotItems.map((hot,index:number) => (
                <ItemBoxLineHalf key={hot.id} item={hot} index={index} />
              ))
            }
        </div>
      </div>
    </>
  )
}
export default ShopList;