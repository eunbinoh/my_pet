import { useNavigate } from "react-router-dom";
import Header from "../../layout/header/back-header";
import myUserIcon from "@/assets/icon/my_user.svg";
import cameraIcon from "@/assets/icon/camera.svg";

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
          <div className="edit-line">
            <div className="edit-profile">
              <img id="user-icon" alt="user_icon" src={myUserIcon} />
              <img id="camera-icon" alt="camera_icon" src={cameraIcon} />
            </div>
          </div>
        </div>
        <div className="gap-term" />

        <div className="content">
          <div className="input-line">
            <label>이름</label>
            <input type="text" placeholder="이름" />
          </div>
          <div className="input-line">
            <label>아이디</label>
            <input type="text" placeholder="아이디" />
          </div>
          <div className="input-line">
            <label>이메일</label>
            <input type="text" placeholder="hongguildong@gmail.com" />
          </div>
          <div className="input-line">
            <label>비밀번호 재설정</label>
            <input type="password" placeholder="비밀번호를 재설정합니다." />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDetail;
