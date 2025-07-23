import { useNavigate } from 'react-router-dom';
const itemBoxListShort = ({item}:any) => {
  const navigate = useNavigate();
  const getImageUrl = (imageName: string) => {
    return new URL(`../assets/image/snack/${imageName}`, import.meta.url).href;
  };
  const movePage = ( path : string) => {
    navigate(path)
  }
  
  return (
    <div className='product-item pointer'  onClick={()=>movePage('/shop')}>
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