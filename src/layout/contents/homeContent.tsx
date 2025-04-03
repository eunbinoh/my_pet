import Footer from '../footer/footer';
import ItemBoxLine from '../../features/itemBoxLine';
import HospitalBoxLine from '../../features/hospitalBoxLine';
import BannerPaging from '../../shared/elements/BannerPaging'
import { items } from '../../entities/items';

const homeContainer = ({children}: ContentsProps) => {
  return (
    <>
      <div>{children}</div>
      <div className='banner-box'>
        <h3>Banner</h3>
        <BannerPaging />
      </div>
      <div className='home-container'>
        <div className='inline-split'>
          <div className='half round-card small pointer text-red'>
            <h3 className='text-red hidden'>쇼핑하러 가기</h3>
          </div>
          <div className='text-red half round-card small pointer'>
            <h3>케어하러 가기</h3>
          </div>
        </div>
        <div className='round-card large pointer'>
          <h2>Banner</h2>
          <span>이벤트 배너 영역입니다.</span>
        </div>

        <div className='recommend-box'>
          <h3>_____님을 위한 추천 상품</h3>
          {
            items.recommendItems.map((item,index)=> (
              <ItemBoxLine key={item.id} item={item} index={index} />
            ))
          }
          <hr/>
          <span style={{marginTop:'15px'}} className='title_type_A'>추천 상품 더 보기 {'>'}</span>
        </div>

        <div className='recommend-box'>
          <h3>_____님을 위한 추천 병원</h3>
            {
              items.recommendHospitals
                .filter((_, index) => index < 4)
                .map((item,index)=> (
                  <HospitalBoxLine key={item.id} item={item} index={index} />
                ))
            }
          <hr/>
          <span style={{marginTop:'15px'}} className='title_type_A'>추천 병원 더 보기 {'>'}</span>
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