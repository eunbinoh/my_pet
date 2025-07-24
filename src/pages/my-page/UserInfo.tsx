import { useNavigate } from "react-router-dom";
import Header from "../../layout/header/back-header";
import arrowLeftIcon from "@/assets/icon/arrow_back.svg";
import hotel3 from '../../assets/image/hotel/hotel3.jpg';

const MyPage = () => {
  const navigate = useNavigate();

  const userInfo = {
    name: "코코엄마",
    email: "kokoMom9@gmail.com",
  };

  const moveToMenu = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Header />
      <div className="mypage-container">
        <div className="header">
          <div className="info-line">
            <div className="user-image">
              <img id="user-icon" src={hotel3} alt='profile' style={{width:'100%',height:'100%', borderRadius:'50px'}}/>
            </div>
            <div className="user-info">
              <div className="user-name">{userInfo.name}</div>
              <div className="user-email">{userInfo.email}</div>
            </div>
          </div>
          <div className="edit-button">
            <button onClick={() => moveToMenu("/user-detail")}>
              내 정보 수정하기
            </button>
          </div>
        </div>
        <div className="gap-term" />

        <div className="content">
          <div
            className="sub-menu pointer"
            onClick={() => moveToMenu("/order-history")}
          >
            주문내역
            <img
              id="right-icon"
              alt="go_icon"
              src={arrowLeftIcon}
              onClick={() => moveToMenu("/order-history")}
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
          <div
            className="sub-menu pointer"
            onClick={() => moveToMenu("/reservation-history")}
          >
            예약내역
            <img
              id="right-icon"
              alt="go_icon"
              src={arrowLeftIcon}
              onClick={() => moveToMenu("/reservation-history")}
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
          <div className="sub-menu">
            로그아웃
            <img
              id="right-icon"
              alt="go_icon"
              src={arrowLeftIcon}
              onClick={() => moveToMenu("/logout")}
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPage;
