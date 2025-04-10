import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import useItemStore from "../../shared/stores/userItemStore";
import ItemBoxSideLine from '../../features/itemBoxSideLine';
import Header from "../../layout/header/logo-header";

const PetShop = () => {
  const { hotItems, newItems, fetchItems } = useItemStore();
  const navigate = useNavigate();
  
  const movePage = ( path : string, tab? : number) => {
    navigate(path, tab ? { state: { tab }} : {});
  }
  const moveToDetail = ( itemId : string) => {
    navigate('/care-detail',{ state: { itemId }});
  }

  const handleMainTab = (tabIndex: number) => {
  }

  useEffect(()=> {
    fetchItems();
  },[])

  return (
    <>
      <Header hasHeadTab handleTab={ handleMainTab } tabTitles={['병원','반려동물 호텔','미용']}/>
      <div className='banner-box'>
        <h3>Banner</h3>
      </div>
      <div className='home-container'>
        <div className='inline-split'>
          <button className='half round-card small pointer' onClick={()=>movePage('/care-list',0)}>
            병원
          </button>
          <button className='half round-card small pointer' onClick={()=>movePage('/care-list',2)}>
            미용
          </button>
        </div>
        <div className='inline-split'>
          <button className='full round-card small pointer' onClick={()=>movePage('/care-list',1)}>
            반려동물 호텔
          </button>
        </div>

        <div className='marketing-item-box'>
          <h3>마이펫 인근 병원</h3>
          <div className='side-inline'>
          {
            hotItems
            .map((item,index)=> (
              <ItemBoxSideLine key={item.id} item={item} index={index} onClick={()=>moveToDetail(item.id)}/>
            ))
          }
          </div>
        </div>
        <div className='marketing-item-box'>
          <h3>현재 HOT한 케어 TOP7</h3>
          <div className='side-inline'>
            {
              newItems.map((item,index:number) => (
                <ItemBoxSideLine key={item.id} item={item} index={index} onClick={()=>moveToDetail(item.id)}/>
              ))
            }
          </div>
        </div>
        <div className='round-card large pointer'>
          <h2>Banner</h2>
          <span>이벤트 배너 영역입니다.</span>
        </div>

        <div className='marketing-item-box'>
          <h3>인기 호텔 TOP7</h3>
          <div className='side-inline'>
            {
              hotItems.map((item,index:number) => (
                <ItemBoxSideLine key={item.id} item={item} index={index} onClick={()=>moveToDetail(item.id)}/>
              ))
            }
            </div>
        </div>

        <div className='marketing-item-box'>
          <h3>인기 미용 TOP7</h3>
          <div className='side-inline'>
            {
              newItems.map((item,index:number) => (
                <ItemBoxSideLine key={item.id} item={item} index={index} onClick={()=>moveToDetail(item.id)}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default PetShop;