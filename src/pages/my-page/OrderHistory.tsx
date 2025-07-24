import Header from "../../layout/header/back-header";
import { history } from "../../entities/history";
import ItemBoxHistory from "../../features/itemBoxHistory";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const navigate = useNavigate();
  const items = history.items as OrderHistory[];

  const movePage = (path: string, item: OrderHistory) => {
    navigate(path, { state: { item } });
  };

  return (
    <>
      <Header />
      <div className="mypage-container">
        <div className="header">
          <h3>{items[0].date}</h3>
          <ItemBoxHistory item={items[0]} type="order" />
          <button
            style={{ width: "350px", marginTop: "20px" }}
            onClick={() => movePage("/order-detail", items[0])}
          >
            상세보기
          </button>
        </div>
        <div className="gap-term" />

        <div className="header">
          {items
            .filter((_, index) => index > 0)
            .map((item: OrderHistory) => {
              return (
                <>
                  <div className="recommend-box">
                    <h3>{item.date}</h3>
                    <ItemBoxHistory item={item} type="order" key={item.id} />
                  </div>
                  <div className="edit-button">
                    <button
                      style={{ width: "350px", marginTop: "10px" }}
                      onClick={() => movePage("/order-detail", item)}
                    >
                      상세보기
                    </button>
                  </div>
                  <hr className="my-10" />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default OrderHistory;
