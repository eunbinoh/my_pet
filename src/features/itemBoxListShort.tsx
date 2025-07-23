const itemBoxListShort = ({item}:any) => {
  const getImageUrl = (imageName: string) => {
    return new URL(`../assets/image/snack/${imageName}`, import.meta.url).href;
  };
  
  return (
    <div className='product-item pointer'>
      <div className='item-box'>
        <div className='img'>
          <img src={getImageUrl(item.imgUrl)} alt='item' />
        </div>
      </div>
      <div className='item-context'>
        <div>{item.brandName}</div>
        <div>{item.itemName}</div>
        <div>{item.price.toLocaleString()}원</div>
      </div>
    </div>
  );
}

export default itemBoxListShort;