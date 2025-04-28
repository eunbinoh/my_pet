import { useState } from "react";
import { RadioUi } from "../../shared/elements/RadioUi";
import Header from "../../layout/header/back-header";
import button_add from "@/assets/icon/button_add.svg";
const MyPetDetail = () => {
  const genderOptions = [
    { value: "male", label: "남아" },
    { value: "female", label: "여아" },
  ];
  const [gender, setGender] = useState<string>("");

  return (
    <>
      <Header />
      <div className="mypage-container">
        <div className="header">
          <div className="title_type_main">마이펫 등록</div>
          <div className="title_type_description">
            마이펫에 대한 정보를 입력해주세요.
          </div>
        </div>

        <div className="content">
          <div className="input-line">
            <label>이름</label>
            <input type="text" placeholder="이름을 입력해주세요." />
          </div>
          <div className="input-line">
            <label>출생일</label>
            <input type="text" placeholder="ex.20210130" />
          </div>
          <div className="radio-line">
            <div className="input-label">
              <p>성별</p>
            </div>
            <RadioUi
              options={genderOptions}
              name="pet-gender"
              value={gender}
              onChange={(value) => setGender(value)}
            />
          </div>
          <div className="input-line">
            <label>종류/품종</label>
            <input type="text" placeholder="선택해주세요." />
          </div>
          <div className="input-line">
            <label>모색</label>
            <input type="password" placeholder="선택해주세요." />
          </div>
          <div className="input-line">
            <label>특이사항</label>
            <input type="password" placeholder="특이사항을 입력해주세요." />
          </div>
          <div className="input-line">
            <label>프로필 이미지</label>
            <div className="care-box">
              <div className="profile-img" />
              <img id="add-icon" alt="add_icon" src={button_add} />
            </div>
          </div>
          <button>저장하기</button>
        </div>
      </div>
    </>
  );
};
export default MyPetDetail;
