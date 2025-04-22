import { useLocation } from "react-router-dom";
import Header from "../../layout/header/back-header";
import ItemBoxHistory from "../../features/itemBoxHistory";
const OrderDetail = () => {
  const location = useLocation();
  const itemData = location.state?.item as OrderHistory;

  const statusFilter = (status: string, type: "order" | "payment") => {
    if (type === "payment") {
      return "결제완료";
    } else {
      switch (status) {
        case "delivering":
          return "배송중";
        case "complete":
          return "배송완료";
        case "cancel":
          return "주문취소";
        default:
          return "주문완료(배송준비)";
      }
    }
  };
  const paymentFilter = (rawValue: string) => {
    if (rawValue === "card") {
      return "카드결제";
    } else if (rawValue === "bootpay") {
      return "부트페이결제";
    } else {
      return "결제취소";
    }
  };

  return (
    <>
      <Header />
      <div className="mypage-container">
        <div
          className="header"
          style={{ marginTop: "16px", marginBottom: "-20px" }}
        >
          <ItemBoxHistory item={itemData} type="order-detail" />
        </div>
        <div className="gap-term" />

        <div className="content">
          <div className="detail-box">
            <h3>주문 정보</h3>
            <div className="order-info">
              <div className="line">
                <label>주문번호</label>
                <span>{itemData.orderNo}</span>
              </div>
              <div className="line">
                <label>주문상태</label>
                <span>{statusFilter(itemData.status, "order")}</span>
              </div>
              <div className="line">
                <label>주문일시</label>
                <span>{itemData.date}</span>
              </div>
              <div className="line">
                <label>주문자</label>
                <span>{itemData.name}</span>
              </div>
              <div className="line">
                <label>연락처</label>
                <span>{itemData.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-term" />

        <div className="content">
          <div className="detail-box">
            <h3>배송 정보</h3>
            <div className="order-info">
              <div className="line">
                <label>주문받으시는 분</label>
                <span>{itemData.name}</span>
              </div>
              <div className="line">
                <label>연락처</label>
                <span>{itemData.phone}</span>
              </div>
              <div className="line">
                <label>주소</label>
                <span style={{ maxWidth: "290px", fontSize: "14px" }}>
                  {itemData.address}
                </span>
              </div>
              <div className="line">
                <label>배송메모</label>
                <span>{itemData.memo}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-term" />

        <div className="content">
          <div className="detail-box">
            <h3>결제 정보</h3>
            <div className="order-info">
              <div className="line">
                <label>결제수단</label>
                <span>{paymentFilter(itemData.payMethod)}</span>
              </div>
              <div className="line">
                <label>결제상태</label>
                <span>{statusFilter(itemData.status, "payment")}</span>
              </div>
              <div className="line">
                <label>결제일자</label>
                <span>{itemData.payDate}</span>
              </div>
              <div className="line">
                <label>판매금액</label>
                <span>{itemData.itemPrice.toLocaleString()} 원</span>
              </div>
              <div className="line">
                <label>할인금액</label>
                <span>-{itemData.salePrice.toLocaleString()} 원</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-term" />

        <div className="content">
          <div className="detail-box" style={{ marginBottom: "130px" }}>
            <h3>최종 결제 금액</h3>
            <div className="order-info">
              <div className="line">
                <label>최종 결제 금액</label>
                <span>{itemData.totalPrice.toLocaleString()} 원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderDetail;
