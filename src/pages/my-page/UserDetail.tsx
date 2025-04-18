import { useNavigate } from "react-router-dom";
import Header from "../../layout/header/back-header";
import myUserIcon from "@/assets/icon/my_user.svg";
import arrowLeftIcon from "@/assets/icon/arrow_back.svg";

const UserDetail = () => {
  const navigate = useNavigate();

  const moveToMenu = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Header />
      <div className="mypage-container">
        <div className="header">
          <div className="title_type_main">내 정보 수정</div>
          <div className="user-image__lg">
            <img id="user-icon" alt="user_icon" src={myUserIcon} />
          </div>
        </div>
        <div className="gap-term" />

        <div className="content">
          <div className="input-line">
            <label>이름</label>
            <input type="text" placeholder="이름" className="full" />
          </div>
          <div className="input-line">
            <label>아이디</label>
            <input type="text" placeholder="아이디" className="full" />
          </div>
          <div className="input-line">
            <label>이메일</label>
            <input type="text" placeholder="이메일" className="full" />
          </div>
          <div className="input-line">
            <label>비밀번호 재설정</label>
            <input type="text" placeholder="영문숫자8자이상" className="full" />
          </div>

          <button className="w-full" onClick={() => moveToMenu("/user-detail")}>
            변경하기
          </button>
        </div>
      </div>
    </>
  );
};
export default UserDetail;
