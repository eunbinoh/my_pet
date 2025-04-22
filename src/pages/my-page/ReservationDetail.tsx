import { useLocation } from "react-router-dom";
import Header from "../../layout/header/back-header";
import ItemBoxHistory from "../../features/itemBoxHistory";
const ReservationDetail = () => {
  const location = useLocation();
  const reservationData = location.state?.item as ReservationHistory;

  const statusFilter = (status: string) => {
    switch (status) {
      case "recept":
        return "병원 확인중";
      case "complete":
        return "접수완료";
      case "cancel":
        return "예약취소";
      default:
        return "예약완료";
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
          <ItemBoxHistory item={reservationData} type="reserve" />
        </div>
        <div className="gap-term" />

        <div className="content">
          <div className="detail-box">
            <h3>예약 정보</h3>
            <div className="reserve-info">
              <div className="line">
                <label>예약구분</label>
                <span>전화예약</span>
              </div>
              <div className="line">
                <label>예약상태</label>
                <span>{statusFilter(reservationData.status)}</span>
              </div>
              <div className="line">
                <label>예약일시</label>
                <span>{reservationData.date}</span>
              </div>
              <div className="line">
                <label>예약시간</label>
                <span>{reservationData.time}</span>
              </div>
              <div className="line">
                <label>예약자명</label>
                <span>{reservationData.ownerName}</span>
              </div>
              <div className="line">
                <label>연락처</label>
                <span>{reservationData.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-term" />

        <div className="content">
          <div className="detail-box">
            <h3>마이펫 정보</h3>
            <div className="reserve-info">
              <div className="line">
                <label>이름</label>
                <span>{reservationData.petName}</span>
              </div>
              <div className="line">
                <label>출생일</label>
                <span>{reservationData.birth}</span>
              </div>
              <div className="line">
                <label>종류(품종)</label>
                <span>{reservationData.breed}</span>
              </div>
              <div className="line">
                <label>기타특징</label>
                <span>{reservationData.note}</span>
              </div>
              <div className="line">
                <label>전달사항</label>
                <span>{reservationData.memo}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-term" />

        <div className="content">
          <div className="detail-box" style={{ marginBottom: "130px" }}>
            <h3>결제 금액</h3>
            <div className="reserve-info">
              <div className="line">
                <label>최종 결제 금액</label>
                <span>{reservationData.payMethod}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReservationDetail;
