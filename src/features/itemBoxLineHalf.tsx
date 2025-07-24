const itemBoxLineHalf = ({item, onClick}: { item: any; onClick: () => void }) => {
  const getImageUrl = (imageName: string) => {
    if(item.id.indexOf('hotItems') > -1) {
      return new URL(`../assets/image/meal/${imageName}`, import.meta.url).href;
    } else if(item.id.indexOf('beauty') > -1) {
      return new URL(`../assets/image/beauty/${imageName}`, import.meta.url).href;
    } 
  };
  
  return (
    <div className='item-line-half pointer' onClick={onClick}>
        <div className='item-box'>
          <img src={getImageUrl(item.imgUrl)} alt='item' />
        </div>
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