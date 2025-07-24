import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import useItemStore from "../../shared/stores/userItemStore";
import ItemBoxLineHalf from '../../features/itemBoxLineHalf';
import Header from "../../layout/header/logo-header";
import { items } from '../../entities/items';

const CareList = () => {
  const { fetchItems } = useItemStore();
  const navigate = useNavigate();
  const location = useLocation();
  const tabIndex = location.state?.tab ?? 0;
  const movePage = ( itemId : string) => {
    navigate('/care-detail',{ state: { itemId }});
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
        tabTitles={['병원','반려동물 호텔','미용']}
        targetTab={tabIndex}
      />
      <div className='home-container'>
        <div className='item-list-box'>
            {
              items.beauty.map((item) => (
                <ItemBoxLineHalf key={item.id} item={item} onClick={()=>movePage(item.id)}/>
              ))
            }
            {
              items.beauty.map((item) => (
                <ItemBoxLineHalf key={item.id} item={item} onClick={()=>movePage(item.id)}/>
              ))
            }
        </div>
      </div>
    </>
  )
}
export default CareList;