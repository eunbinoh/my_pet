import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import useItemStore from "../../shared/stores/userItemStore";
import ItemBoxLine from '../../features/itemBoxListShort';
import Header from "../../layout/header/logo-header";

const PetShop = () => {
  const { hotItems, newItems, fetchItems } = useItemStore();
  const navigate = useNavigate();
  
  const movePage = ( path : string, tab? : number) => {
    navigate(path, tab ? { state: { tab }} : {});
  }

  const handleMainTab = (tabIndex: number) => {
    console.log('handleMainTab:',tabIndex)
  }

  useEffect(()=> {
    fetchItems();
  },[])

  return (
    <>
      <Header hasHeadTab={true} handleTab={ handleMainTab } tabTitles={['병원','반려동물 호텔','미용']}/>
      <div className='banner-box'>
        <h3>Banner</h3>
      </div>
      <div className='home-container'>
        <div className='inline-split'>
          <div className='half round-card small pointer'>
            <h3 onClick={()=>movePage('/care-list',0)}>병원</h3>
          </div>
          <div className='half round-card small pointer'>
            <h3 onClick={()=>movePage('/care-list',2)}>미용</h3>
          </div>
        </div>
        <div className='inline-split'>
          <div className='full round-card small pointer'>
            <h3 onClick={()=>movePage('/care-list',1)}>반려동물 호텔</h3>
          </div>
        </div>

        <div className='recommend-box'>
          <h3>현재 HOT한 상품 TOP7</h3>
          <ul>
            {
              hotItems.map((hot,index:number) => (
                <ItemBoxLine key={hot.id} item={hot} index={index} />
              ))
            }
          </ul>
          <hr/>
        </div>
        <div className='recommend-box'>
          <h3>지금 집중해야할 신상품 TOP7</h3>
          <ul>
            {
              newItems.map((item,index:number) => (
                <ItemBoxLine key={item.id} item={item} index={index} />
              ))
            }
          </ul>
          <hr/>
        </div>
        <div className='round-card large pointer'>
          <h2>Banner</h2>
          <span>이벤트 배너 영역입니다.</span>
        </div>

        <div className='recommend-box'>
          <h3>인기 사료(영양/보조제) TOP7</h3>
          <ul>
            {
              hotItems.map((hot,index:number) => (
                <ItemBoxLine key={hot.id} item={hot} index={index} />
              ))
            }
          </ul>
          <hr/>
        </div>

        <div className='recommend-box'>
          <h3>인기 간식(영양간식) TOP7</h3>
          <ul>
            {
              newItems.map((item,index:number) => (
                <ItemBoxLine key={item.id} item={item} index={index} />
              ))
            }
          </ul>
          <hr/>
        </div>
      </div>
    </>
  )
}
export default PetShop;