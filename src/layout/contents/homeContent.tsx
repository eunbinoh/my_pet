import { ReactNode } from 'react';
import Footer from '../footer/footer';

interface ContentsProps {
  children: ReactNode;
}

const homeContainer = ({children}: ContentsProps) => {
  return (
    <>
      <div>{children}</div>
      <div className='banner-box'>
        <h3>Banner</h3>
      </div>
      <div className='home-container'>
        <div className='inline-split'>
          <div className='half round-card small'>
            <h3>쇼핑하러 가기</h3>
          </div>
          <div className='half round-card small'>
            <h3>케어하러 가기</h3>
          </div>
        </div>
        <div className='round-card large'>
          <h2>Banner</h2>
          <span>이벤트 배너 영역입니다.</span>
        </div>

        <div className='recommend-box'>
          <h3>_____님을 위한 추천 상품</h3>
        </div>

        <div className='recommend-box'>
          <h3>_____님을 위한 추천 병원</h3>
        </div>

        <div className='round-card large'>
          <h2>Banner</h2>
          <span>배너 영역입니다.</span>
        </div>

      </div>
      <Footer />
    </>
  )
}
export default homeContainer;