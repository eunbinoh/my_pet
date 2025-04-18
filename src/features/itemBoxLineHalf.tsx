const itemBoxLineHalf = ({item, onClick}: { item: any; onClick: () => void }) => {
  return (
    <div className='item-line-half pointer' onClick={onClick}>
        <div className='item-box'/>
        <div className='info_place'>{ item.brandName }</div>
        <div className='info_name'>{ item.itemName }</div>
        <div className='score_review_line'>
          <div className='info_reviews'>별점 { item.score }</div>
          <div className='info_reviews'>리뷰 수 { item.reviews }</div>
        </div>
    </div>
  );
}

export default itemBoxLineHalf;