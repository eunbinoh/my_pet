import Footer from '../footer/footer';
import ItemBoxListShort from '../../features/itemBoxListShort';
import ItemBoxLineHalf from '../../features/itemBoxLineHalf';
import BannerPaging from '../../shared/elements/BannerPaging'
import { items } from '../../entities/items';
import { useNavigate } from 'react-router-dom';

const homeContainer = ({children}: ContentsProps) => {
  const navigate = useNavigate();
  const movePage = ( path : string) => {
    navigate(path)
  }
  
  return (
    <>
      <div>{children}</div>
      <div className='banner-box'>
        <h3>Banner</h3>
        <BannerPaging />
      </div>
      <div className='home-container'>
        <div className='inline-split'>
          <button className='half round-card small pointer' onClick={()=>movePage('/shop')}>
            쇼핑하러 가기
          </button>
          <button className='half round-card small pointer' onClick={()=>movePage('/care')}>
            케어하러 가기
          </button>
        </div>
        <div className='round-card large pointer'>
          <h2>Banner</h2>
          <span>이벤트 배너 영역입니다.</span>
        </div>

        <div className='recommend-box'>
          <h3>_____님을 위한 추천 상품</h3>
          {
            items.recommendItems.map((item,index)=> (
              <ItemBoxListShort key={item.id} item={item} index={index} />
            ))
          }
          <hr/>
          <span style={{marginTop:'15px',marginBottom:'5px'}} className='title_type_more'>추천 상품 더 보기 {'>'}</span>
        </div>

        <div className='recommend-box'>
          <h3>_____님을 위한 추천 병원</h3>
            {
              items.recommendHospitals
                .filter((_, index) => index < 4)
                .map((item)=> (
                  <ItemBoxLineHalf key={item.id} item={item} onClick={()=>movePage('/item')}/>
                ))
            }
          <hr/>
          <span style={{marginTop:'15px',marginBottom:'10px'}} className='title_type_more'>추천 병원 더 보기 {'>'}</span>
        </div>

        <div className='round-card large pointer'>
          <h2>Banner</h2>
          <span>배너 영역입니다.</span>
        </div>

      </div>
      <Footer />
    </>
  )
}
export default homeContainer;