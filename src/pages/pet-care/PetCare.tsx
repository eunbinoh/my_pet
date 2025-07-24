import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import useItemStore from "../../shared/stores/userItemStore";
import ItemBoxSideLine from '../../features/itemBoxSideLine';
import Header from "../../layout/header/logo-header";
import { items } from '../../entities/items';
import banner2 from '../../assets/image/banner2.png';
import hotel5 from '../../assets/image/hotel/hotel5.jpg';

const PetShop = () => {
  const { fetchItems } = useItemStore();
  const navigate = useNavigate();
  
  const movePage = ( path : string, tab? : number) => {
    navigate(path, tab ? { state: { tab }} : {});
  }
  const moveToDetail = ( itemId : string) => {
    navigate('/care-detail',{ state: { itemId }});
  }

  const handleMainTab = () => {
  }

  useEffect(()=> {
    fetchItems();
  },[])

  return (
    <>
      <Header hasHeadTab handleTab={ handleMainTab } tabTitles={['병원','반려동물 호텔','미용']}/>
      <div className='banner-box'>
        <img src={hotel5} alt='banner' style={{width:'100%',height:'100%'}}/>
      </div>
      <div className='home-container'>
        <div className='inline-split'>
          <button className='half nav-button round-button small pointer' onClick={()=>movePage('/care-list',0)}>
            병원
          </button>
          <button className='half nav-button round-button small pointer' onClick={()=>movePage('/care-list',2)}>
            미용
          </button>
        </div>
        <div className='inline-split'>
          <button className='full nav-button round-button small pointer' onClick={()=>movePage('/care-list',1)}>
            반려동물 호텔
          </button>
        </div>

        <div className='marketing-item-box'>
          <h3>마이펫 인근 병원</h3>
          <div className='side-inline'>
          {
            items.recommendHospitals
            .map((item) => (
              <ItemBoxSideLine key={item.id} item={item} onClick={()=>moveToDetail(item.id)}/>
            ))
          }
          </div>
        </div>

        <div className='round-card large pointer'>
          <img src={banner2} alt='banner' className='main-banner-img' />
        </div>

        <div className='marketing-item-box'>
          <h3>인기 호텔 TOP7</h3>
          <div className='side-inline'>
            {
              items.hotel.map((item) => (
                <ItemBoxSideLine key={item.id} item={item} onClick={()=>moveToDetail(item.id)}/>
              ))
            }
            </div>
        </div>

        <div className='marketing-item-box'>
          <h3>인기 미용 TOP7</h3>
          <div className='side-inline'>
            {
              items.beauty.map((item) => (
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