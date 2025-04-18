type Props = {
  type : 'cart'|'reserve'
}

const footer = ({ type } : Props) => {
console.log(`foot-box ${type === 'cart' ? 'cart' : 'reserve'}`)
  return (
    <div id='cart-footer'>
      <div className={`foot-box ${type === 'cart' ? 'cart' : 'reserve'}`}>
        {
          type === 'cart' ? (
            <>
              <button>장바구니</button>
              <button>구매하기</button>
            </>
          ) : (
            <button>예약하기</button>
          )
        }
      </div>
    </div>
  )
}
export default footer;