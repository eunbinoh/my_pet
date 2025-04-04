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

  const handleMainTab = (tabIndex: number) => {
    console.log('tab index:',tabIndex)
  }

  useEffect(()=> {
    fetchItems();
  },[])

  return (
    <>
      <Header hasHeadTab={true} handleTab={ handleMainTab } tabTitles={['푸드','헬스']}/>
      <div className='banner-box'>
        <h3>Banner</h3>
      </div>
      <div className='home-container'>
        <div className='inline-split'>
          <div className='half round-card small pointer'>
            <h3 onClick={()=>movePage('/shop-list',0)}>사료</h3>
          </div>
          <div className='half round-card small pointer'>
            <h3 onClick={()=>movePage('/shop-list',1)}>간식</h3>
          </div>
        </div>

        <div className='marketing-item-box'>
          <h3>현재 HOT한 상품 TOP7</h3>
          <div className='side-inline'>
          {
            hotItems
            .map((item,index)=> (
              <ItemBoxSideLine key={item.id} item={item} index={index} />
            ))
          }
          </div>
        </div>
        <div className='marketing-item-box'>
          <h3>지금 집중해야할 신상품 TOP7</h3>
          <div className='side-inline'>
            {
              newItems.map((item,index:number) => (
                <ItemBoxSideLine key={item.id} item={item} index={index} />
              ))
            }
          </div>
        </div>
        <div className='round-card large pointer'>
          <h2>Banner</h2>
          <span>이벤트 배너 영역입니다.</span>
        </div>

        <div className='marketing-item-box'>
          <h3>인기 사료(영양/보조제) TOP7</h3>
          <div className='side-inline'>
            {
              hotItems.map((item,index:number) => (
                <ItemBoxSideLine key={item.id} item={item} index={index} />
              ))
            }
            </div>
        </div>

        <div className='marketing-item-box'>
          <h3>인기 간식(영양간식) TOP7</h3>
          <div className='side-inline'>
            {
              newItems.map((item,index:number) => (
                <ItemBoxSideLine key={item.id} item={item} index={index} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default PetShop;