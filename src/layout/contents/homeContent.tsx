import Footer from '../footer/footer';
import ItemBoxLine from '../../features/itemBoxLine';
import { items } from '../../entities/items';

const homeContainer = ({children}: ContentsProps) => {
  return (
    <>
      <div>{children}</div>
      <div className='banner-box'>
        <h3>Banner</h3>
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
          <span className='text-base text-center pointer'>{ `추천상품 더 보기 >` }</span>
        </div>

        <div className='recommend-box'>
          <h3>_____님을 위한 추천 병원</h3>
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