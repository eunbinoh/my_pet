const itemBoxHistory = (props: {
  item: OrderHistory | ReservationHistory;
  type: "order" | "reserve";
}) => {
  const item =
    props.type === "order"
      ? (props.item as OrderHistory)
      : (props.item as ReservationHistory);
  const statusFilter = (status: string) => {
    if (status === "paid") {
      return "결제완료";
    } else if (status === "delivering") {
      return "배송중";
    } else if (status === "complete") {
      return "배송완료";
    } else if (status === "cancel") {
      return "취소";
    }
  };

  return (
    <>
      {props.type === "order" && (
        <>
          <div className="status-box">
            <div className="text-sm">{statusFilter(item.status)}</div>
          </div>
        </>
      )}
      <div className="item-line-list">
        <div className="item-box">
          <div className="img" />
        </div>
        <div className="item-context">
          <div className="text-sm">
            {props.type === "order"
              ? (item as OrderHistory).brandName
              : (item as ReservationHistory).date}
          </div>
          <div className="text-title">{item.itemName}</div>
          {props.type === "order" && (
            <>
              <div className="text-sm">
                수량 : {(item as OrderHistory).quantity} 개
              </div>
              <div className="text-price">
                {(item as OrderHistory).totalPrice.toLocaleString()}원
              </div>
            </>
          )}
          {props.type === "reserve" && (
            <>
              <div className="text-price">
                {(item as ReservationHistory).payMethod}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default itemBoxHistory;
