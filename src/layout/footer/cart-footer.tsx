import { useState } from 'react';
import { LikeBtn } from '../../shared/elements/LikeBtn';
type Props = {
  type: "cart" | "reserve" | "profile" | "";
};

const footer = ({ type }: Props) => {
  const [like, setLike] = useState(false);
    return (
    <div id="cart-footer">
      <div className={`foot-box ${type}`}>
        {type === "cart" ? (
          <>
            <LikeBtn like={like} onClick={() => setLike(!like)} />
            <button className="cart-btn">구매하기</button>
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
