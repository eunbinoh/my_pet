const itemBoxListShort = ({item, index}:any) => {
  return (
    <div className='item-line-list pointer'>
      <div className='item-box'>
        <div className='img'>
          <div>{index+1}</div>
        </div>
      </div>
      <div className='item-context'>
        <div>{item.brandName}</div>
        <div>{item.itemName}</div>
        <div>{item.price}원</div>
      </div>
    </div>
  );
}

export default itemBoxListShort;