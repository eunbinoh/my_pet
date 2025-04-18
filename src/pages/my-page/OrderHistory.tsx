import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useItemStore from "../../shared/stores/userItemStore";
import Header from "../../layout/header/back-header";

const OrderHistory = () => {
  const { hotItems, fetchItems } = useItemStore();
  const location = useLocation();

  const getItemInfo = location.state?.itemId;
  const itemName = hotItems.find((item) => item.id === getItemInfo)?.itemName;
  const itemPrice = hotItems.find((item) => item.id === getItemInfo)?.price;

  // const movePage = ( path : string) => {
  //   navigate(path)
  // }
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <Header />
      <div className="detail-container">
        <div className="image-main" />
        <label>Brand Name</label>
        <div className="info_name">{itemName}</div>
        <div className="info_price">{itemPrice?.toLocaleString()}원</div>
        <div className="gap-term" />
        <div className="content_title">상품 상세내용</div>
        <div className="image-detail" />
        <div className="gap-term" />
        <div className="content_title">이용안내</div>
        <div className="description">
          <div>
            {" "}
            - 결제완료 후 취소나 변경이 어려운 상품의 경우 상품페이지 내에
            공지되어있으니 참고하여 구매 부탁드립니다.
          </div>
          <div>
            {" "}
            - 제주도 추가배송비 3000원, 제주도 내 산간벽지 6000원이 추가됩니다.
          </div>
          <div>
            {" "}
            ※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은
            고객님께서 부담하셔야 합니다. 색상 교환, 사이즈 교환 등 포함
          </div>
        </div>
        <div className="gap-term" />
        <div className="content_title">리뷰</div>
        <div className="gap-term" />
        <div className="content_title">문의</div>
        <div className="gap-term" />
        <div className="content_title">함께보면 좋은 상품</div>
      </div>
    </>
  );
};
export default OrderHistory;
