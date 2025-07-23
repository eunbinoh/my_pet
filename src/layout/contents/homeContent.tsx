import Footer from '../footer/footer';
import ItemBoxListShort from '../../features/itemBoxListShort';
import ItemBoxLineHalf from '../../features/itemBoxLineHalf';
import BannerPaging from '../../shared/elements/BannerPaging'
import { items } from '../../entities/items';
import { useNavigate } from 'react-router-dom';
import main from '../../assets/image/main.png';
import banner1 from '../../assets/image/banner1.png';
import banner2 from '../../assets/image/banner2.png';

const homeContainer = ({children}: ContentsProps) => {
  const navigate = useNavigate();
  const movePage = ( path : string) => {
    navigate(path)
  }
  
  return (
    <>
      <div>{children}</div>
      <div className='banner-box'>
        <div className='title-banner-img'>
          <img src={main} alt='banner' />
        </div>
        <BannerPaging />
      </div>
      <div className='home-container'>
        <div className='inline-split'>
          <button className='half nav-button round-button pointer' onClick={()=>movePage('/shop')}>
            Shop
          </button>
          <button className='half nav-button round-button pointer' onClick={()=>movePage('/care')}>
            Care
          </button>
        </div>
        <div className='round-card large pointer'>
          <img src={banner1} alt='banner' className='main-banner-img' />
        </div>

        <div className='recommend-box'>
          <h3>고객님을 위한 추천 상품</h3>
          {
            items.recommendItems.map((item,index)=> (
              <ItemBoxListShort key={item.id} item={item} index={index} />
            ))
          }
          <hr/>
          <span style={{marginTop:'15px',marginBottom:'5px'}} className='title_type_more' onClick={()=>movePage('/shop')}>추천 상품 더 보기 {'>'}</span>
        </div>

        <div className='recommend-box'>
          <h3>고객님을 위한 추천 병원</h3>
            {
              items.recommendHospitals
                .filter((_, index) => index < 4)
                .map((item)=> (
                  <ItemBoxLineHalf key={item.id} item={item} onClick={()=>movePage('/item')}/>
                ))
            }
          <hr/>
          <span style={{marginTop:'15px',marginBottom:'10px'}} className='title_type_more' onClick={()=>movePage('/care')}>추천 병원 더 보기 {'>'}</span>
        </div>

        <div className='round-card large pointer' style={{marginTop:'16px'}}>
          <img src={banner2} alt='banner' className='main-banner-img' />
        </div>

      </div>
      <Footer />
    </>
  )
}
export default homeContainer;