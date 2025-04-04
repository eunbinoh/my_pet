// import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import useItemStore from "../../shared/stores/userItemStore";
import ItemBoxLineHalf from '../../features/itemBoxLineHalf';
import Header from "../../layout/header/logo-header";

const CareList = () => {
  const { hotItems, fetchItems } = useItemStore();
  // const navigate = useNavigate();

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
export default CareList;