import { useLocation } from 'react-router-dom';
import { useState } from "react";
import Header from "../../layout/header/back-header";
import { items } from '../../entities/items';
import { reviews } from '../../entities/reviews';
import { questions } from '../../entities/questions';
import star from '../../assets/icon/star.png';
import detail1 from '../../assets/image/detail1.png';
import detail2 from '../../assets/image/detail2.png';
import detail3 from '../../assets/image/detail3.png';

const CareDetail = () => {
  const location = useLocation();
  const getItemInfo = location.state?.itemId;
  const itemName = getItemInfo.indexOf('hospital') > -1 ? items.hospital.find((item) => item.id === getItemInfo)?.itemName 
                  : getItemInfo.indexOf('beauty') > -1 ? items.beauty.find((item) => item.id === getItemInfo)?.itemName 
                  : items.hotel.find((item) => item.id === getItemInfo)?.itemName;
  const itemScore = getItemInfo.indexOf('hospital') > -1 ? items.hospital.find((item) => item.id === getItemInfo)?.score 
                  : getItemInfo.indexOf('beauty') > -1 ? items.beauty.find((item) => item.id === getItemInfo)?.score 
                  : items.hotel.find((item) => item.id === getItemInfo)?.score;
  const itemReviews = getItemInfo.indexOf('hospital') > -1 ? items.hospital.find((item) => item.id === getItemInfo)?.reviews 
                    : getItemInfo.indexOf('beauty') > -1 ? items.beauty.find((item) => item.id === getItemInfo)?.reviews 
                    : items.hotel.find((item) => item.id === getItemInfo)?.reviews;
  const getStarScore = (score: number | undefined) => {
    return Math.round(score || 0);
  }

  const getImageUrl = () => {
    if(getItemInfo.indexOf('hospital') > -1) {
      const url = items.hospital.find((item) => item.id === getItemInfo)?.imgUrl;
      return new URL(`../../assets/image/care/${url}`, import.meta.url).href;
    } else if(getItemInfo.indexOf('beauty') > -1) {
      const url = items.beauty.find((item) => item.id === getItemInfo)?.imgUrl;
      return new URL(`../../assets/image/beauty/${url}`, import.meta.url).href;
    } else if(getItemInfo.indexOf('hotel') > -1) {
      const url = items.hotel.find((item) => item.id === getItemInfo)?.imgUrl;
      return new URL(`../../assets/image/hotel/${url}`, import.meta.url).href;
    }
  }

  const [activeTab, setActiveTab] = useState(0);
  
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
          {itemReviews !== 0 ? <span className='reviews' onClick={() => setActiveTab(1)}>{itemReviews}개의 후기</span> : null}
        </div>
        <div className='gap-term'/>

        <div className="detail-tabs">
          <span className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>이용안내</span>
          <span className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>방문후기</span>
          <span className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>Q&A</span>
        </div>

        {activeTab === 0 && (
          <>
            <img src={detail1} alt='detail' />
            <img src={detail2} alt='detail' />
            <img src={detail3} alt='detail' />
          </>
        )}
        {activeTab === 1 && (
          <>  
            <div className='content_title'>후기</div>
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
        <div className='gap-term'/>


      </div>
    </>
  )
}
export default CareDetail;