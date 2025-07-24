import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import useItemStore from "../../shared/stores/userItemStore";
import ItemBoxSideLine from '../../features/itemBoxSideLine';
import Header from "../../layout/header/logo-header";
import mealImgBanner from '../../assets/image/meal/meal4.jpg';
import banner1 from '../../assets/image/banner1.png';

const PetShop = () => {
  const { hotItems, newItems, fetchItems } = useItemStore();
  const navigate = useNavigate();
  
  const moveToList = ( path : string, tab? : number) => {
    navigate(path, tab ? { state: { tab }} : {});
  }

  const moveToDetail = ( itemId : string) => {
    navigate('/shop-detail',{ state: { itemId }});
  }

  const handleMainTab = () => {
  }

  useEffect(()=> {
    fetchItems();
  },[])

  return (
    <>
      <Header hasHeadTab handleTab={ handleMainTab } tabTitles={['푸드','헬스']}/>
      <div className='banner-box'>
        <img src={mealImgBanner} alt='banner' style={{width:'100%',height:'100%'}}/>
      </div>
      <div className='home-container'>
        <div className='inline-split'>
          <button className='half nav-button round-button small pointer' onClick={()=>moveToList('/shop-list',0)}>
            사료
          </button>
          <button className='half nav-button round-button small pointer' onClick={()=>moveToList('/shop-list',1)}>
            간식
          </button>
        </div>

        <div className='marketing-item-box'>
          <h3>인기 사료(영양/보조제) TOP7</h3>
          <div className='side-inline'>
            {
              hotItems.map((item) => (
                <ItemBoxSideLine key={item.id} item={item} onClick={()=>moveToDetail(item.id)}/>
              ))
            }
            </div>
        </div>

        <div className='marketing-item-box'>
          <h3>인기 간식(영양간식) TOP7</h3>
          <div className='side-inline'>
            {
              newItems.map((item) => (
                <ItemBoxSideLine key={item.id} item={item} onClick={()=>moveToDetail(item.id)}/>
              ))
            }
          </div>
        </div>

        <div className='round-card large pointer' style={{marginTop:'30px'}}>
        <img src={banner1} alt='banner' className='main-banner-img' />
        </div>

        <div className='marketing-item-box'>
          <h3>현재 HOT한 상품 TOP7</h3>
          <div className='side-inline'>
          {
            hotItems
            .map((item) => (
              <ItemBoxSideLine key={item.id} item={item} onClick={()=>moveToDetail(item.id)}/>
            ))
          }
          </div>
        </div>
        <div className='marketing-item-box'>
          <h3>지금 집중해야할 신상품 TOP7</h3>
          <div className='side-inline'>
            {
              newItems.map((item) => (
                <ItemBoxSideLine key={item.id} item={item} onClick={()=>moveToDetail(item.id)}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default PetShop;