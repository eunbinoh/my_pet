import arrowDownIcon from "@/assets/icon/arrow_down.svg";
type MyPetBoxProps = {
  isOpen: boolean;
  closeMyPetBox: () => void; // 이미지 클릭 핸들러 함수 타입 정의
};

const MyPetBox = ({ isOpen, closeMyPetBox }: MyPetBoxProps) => {
  return (
    <>
      <div className={`half-modal ${isOpen ? "active" : ""}`}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            alt="arrow-down-icon"
            src={arrowDownIcon}
            onClick={closeMyPetBox}
          />
        </div>
        <div className="content">
          <h3>마이펫 선택</h3>
          <div className="care-box">
            <div>
              <div className="prifile-img" />
            </div>
            <div>
              <div className="sub-title">이름(성별)</div>
              <div>출생일 : 2020. 01. 30</div>
              <div>종류(품종) : 이누시바</div>
              <div>모색 : 브라운</div>
              <div>성별 : 암컷</div>
              <div>체중 : 10kg</div>
              <div>기타 특징 : 중성화</div>
            </div>
          </div>
          <button>수정하기</button>
        </div>
      </div>
    </>
  );
};

export default MyPetBox;
