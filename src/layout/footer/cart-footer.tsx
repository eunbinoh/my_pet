type Props = {
  type: "cart" | "reserve" | "profile" | "";
};

const footer = ({ type }: Props) => {
  return (
    <div id="cart-footer">
      <div className={`foot-box ${type}`}>
        {type === "cart" ? (
          <>
            <button>장바구니</button>
            <button>구매하기</button>
          </>
        ) : type === "reserve" ? (
          <button>예약하기</button>
        ) : type === "profile" ? (
          <button>변경하기</button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default footer;
