// import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import useItemStore from "../../shared/stores/userItemStore";
import ItemBoxLineHalf from '../../features/itemBoxLineHalf';
import Header from "../../layout/header/logo-header";

const CareList = () => {
  const { hotItems, fetchItems } = useItemStore();
  // const navigate = useNavigate();
  const location = useLocation();
  const tabIndex = location.state?.tab ?? 0;
  // const movePage = ( path : string) => {
  //   navigate(path)
  // }

  const handleMainTab = () => {
  }

  useEffect(()=> {
    fetchItems();
  },[])

  return (
    <>
      <Header 
        hasHeadTab={true} 
        handleTab={ handleMainTab } 
        tabTitles={['병원','반려동물 호텔','미용']}
        targetTab={tabIndex}
      />
      <div className='home-container'>
        <div className='item-list-box'>
            {
              hotItems.map((hot) => (
                <ItemBoxLineHalf key={hot.id} item={hot} onClick={()=>handleMainTab}/>
              ))
            }
            {
              hotItems.map((hot) => (
                <ItemBoxLineHalf key={hot.id} item={hot} onClick={()=>handleMainTab}/>
              ))
            }
        </div>
      </div>
    </>
  )
}
export default CareList;