import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import useItemStore from "../../shared/stores/userItemStore";
import Header from "../../layout/header/back-header";
import star from '../../assets/icon/star.png';
import detail1 from '../../assets/image/detail1.png';
import detail2 from '../../assets/image/detail2.png';
import detail3 from '../../assets/image/detail3.png';
import { reviews } from '../../entities/reviews';
import { questions } from '../../entities/questions';
import { items } from '../../entities/items';

const ShopDetail = () => {
  const { hotItems, fetchItems } = useItemStore();
  const location = useLocation();

  const getItemInfo = location.state?.itemId;
  const itemName = getItemInfo.indexOf('hotItems') > -1 ? hotItems.find((item) => item.id === getItemInfo)?.itemName : items.newItems.find((item) => item.id === getItemInfo)?.itemName;
  const itemPrice = getItemInfo.indexOf('hotItems') > -1 ? hotItems.find((item) => item.id === getItemInfo)?.price : items.newItems.find((item) => item.id === getItemInfo)?.price;
  const itemScore = getItemInfo.indexOf('hotItems') > -1 ? hotItems.find((item) => item.id === getItemInfo)?.score : items.newItems.find((item) => item.id === getItemInfo)?.score;
  const itemReviews = getItemInfo.indexOf('hotItems') > -1 ? hotItems.find((item) => item.id === getItemInfo)?.reviews : items.newItems.find((item) => item.id === getItemInfo)?.reviews;

  const getStarScore = (score: number | undefined) => {
    return Math.round(score || 0);
  }

  const getImageUrl = () => {
    if(getItemInfo.indexOf('hotItems') > -1) {
      const url = hotItems.find((item) => item.id === getItemInfo)?.imgUrl;
      return new URL(`../../assets/image/meal/${url}`, import.meta.url).href;
    } else if(getItemInfo.indexOf('new') > -1) {
      const url = items.newItems.find((item) => item.id === getItemInfo)?.imgUrl;
      return new URL(`../../assets/image/snack/${url}`, import.meta.url).href;
    }
  }

  const [activeTab, setActiveTab] = useState(0);

  useEffect(()=> {
    fetchItems();
  },[])

  return (
    <>
      <Header />
      <div className='detail-container'>
        <div className='image-main'>
          <img src={getImageUrl()} alt='item' /> 
        </div>
        <label>Brand Name</label>
        <div className='info_name'>{ itemName }</div>
        <div className='star_score'>
          {Array.from({ length: getStarScore(itemScore) }).map((_, idx) => (
            <img key={idx} src={star} alt="star" className="star-icon" />
          ))}
          <span className='score'>{itemScore?.toFixed(1)}</span>
          {itemReviews !== 0 ? <span className='reviews' onClick={() => setActiveTab(1)}>{itemReviews}개의 리뷰</span> : null}
        </div>
        <div className='info_price'>{ itemPrice?.toLocaleString() }원</div>
        <div className='gap-term'/>

        <div className="detail-tabs">
          <span className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>상품상세</span>
          <span className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>리뷰</span>
          <span className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>상품문의</span>
          <span className={activeTab === 3 ? "active" : ""} onClick={() => setActiveTab(3)}>배송/교환</span>
        </div>

        {activeTab === 0 && (
          <>
            <div className='content_title'>상품 상세</div>
            <img src={detail1} alt='detail' />
            <img src={detail2} alt='detail' />
            <img src={detail3} alt='detail' />
          </>
        )}
        {activeTab === 1 && (
          <>  
            <div className='content_title'>리뷰</div>
              {reviews.map((r) => (
                <>
                  <div className='star_score'>
                    {Array.from({ length: r.score }).map((_, idx) => (
                      <img key={idx} src={star} alt="star" className="star_icon" />
                    ))}
                    <span className='score'>{r.score.toFixed(1)}</span>
                  </div>
                  <div className='review_desc'>{r.desc}</div>
                  <div className='review_info'>{r.author} {r.date}</div>
                  <div className='gap-term'/>
                </>
            ))}
          </>
        )}
        {activeTab === 2 && (
          <>  
            <div className='content_title'>문의</div>
              {questions.map((qna) => (
                <div style={{marginLeft: '4px', paddingBottom: '12px'}}>
                  <div className={`status ${qna.answer !== '' ? 'completed' : 'pending'}`}>{qna.answer !== '' ? '답변완료' : '답변대기'}</div>
                  <div className='review_desc'>Q. {qna.que}</div>
                  <div className='review_info'> {qna.qDate}</div>
                  {qna.answer !== '' && (
                    <div style={{marginLeft: '10px', marginTop: '-4px'}}>
                      <div className='review_desc'>A. {qna.answer}</div>
                      <div className='review_info'> {qna.aDate}</div>
                    </div>
                  )}
                </div>
            ))}
          </>
        )}  
        {activeTab === 3 && (
          <>  
          <div className='content_title'>배송안내</div>
          <div className='description'>
            <div> ※ 일부 도서산간 지역에 대해서는 3,000원의 추가 배송비용이 부과될 수 있습니다.</div>
            <div> ※ 제주도 추가배송비 3000원, 제주도 내 산간벽지 6000원이 추가됩니다.</div>
            <div> ※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야 합니다. </div>
            <div> ( 색상 교환, 사이즈 교환 등 포함 )</div>
            <div> - 결제완료 후 취소나 변경이 어려운 상품의 경우 상품페이지 내에 공지되어있으니 참고하여 구매 부탁드립니다.</div>
          </div>
          </>
        )}
        <div className='gap-term'/>


      </div>
    </>
  )
}
export default ShopDetail;