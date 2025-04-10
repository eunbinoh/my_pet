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

  const movePage = ( itemId : string) => {
    navigate('/shop-detail',{ state: { itemId }});
  }

  const handleMainTab = () => {
  }

  useEffect(()=> {
    fetchItems();
  },[])

  return (
    <>
      <Header 
        hasHeadTab
        handleTab={ handleMainTab } 
        tabTitles={['사료','간식']} 
        targetTab={tabIndex}
      />
      <div className='home-container'>
        <div className='item-list-box'>
            {
              hotItems.map((item) => (
                <ItemBoxLineHalf key={item.id} item={item} onClick={()=>movePage(item.id)}/>
              ))
            }
            {
              hotItems.map((item) => (
                <ItemBoxLineHalf key={item.id} item={item} onClick={()=>movePage(item.id)}/>
              ))
            }
        </div>
      </div>
    </>
  )
}
export default ShopList;