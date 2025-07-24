import Header from "../../layout/header/back-header";
import { history } from "../../entities/history";
import ItemBoxHistory from "../../features/itemBoxHistory";
import { useNavigate } from "react-router-dom";

const ReservationHistory = () => {
  const navigate = useNavigate();
  const items = history.reservations as ReservationHistory[];

  const movePage = (path: string, item: ReservationHistory) => {
    navigate(path, { state: { item } });
  };

  return (
    <>
      <Header />
      <div className="mypage-container">
        <div className="header">
          <ItemBoxHistory item={items[0]} type="reserve" />
          <button
            style={{ width: "350px", marginTop: "20px" }}
            onClick={() => movePage("/reservation-detail", items[0])}
          >
            상세보기
          </button>
        </div>
        <div className="gap-term" />

        <div className="header">
          {items
            .filter((_, index) => index > 0)
            .map((item: ReservationHistory) => {
              return (
                <>
                  <div className="recommend-box">
                    <ItemBoxHistory item={item} type="reserve" key={item.id} />
                  </div>
                  <div className="edit-button">
                    <button
                      style={{ width: "350px", marginTop: "10px" }}
                      onClick={() => movePage("/reservation-detail", item)}
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
export default ReservationHistory;
