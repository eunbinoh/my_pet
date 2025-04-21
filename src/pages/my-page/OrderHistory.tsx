import Header from "../../layout/header/back-header";
import { history } from "../../entities/history";
import ItemBoxHistory from "../../features/itemBoxHistory";

const OrderHistory = () => {
  const items = history.items as OrderHistory[];

  // const movePage = ( path : string) => {
  //   navigate(path)
  // }

  return (
    <>
      <Header />
      <div className="mypage-container">
        <div className="header">
          <h3>2024.08.02</h3>
          <ItemBoxHistory item={items[0]} type="order" />
          <button className="w-full">상세보기</button>
        </div>
        <div className="gap-term" />

        <div className="header">
          {items.map((item: OrderHistory) => {
            return (
              <>
                <div className="recommend-box">
                  <h3>2024.08.02</h3>
                  <ItemBoxHistory item={item} type="order" key={item.id} />
                </div>
                <div className="edit-button">
                  <button className="w-full">상세보기</button>
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
