import arrowDownIcon from "@/assets/icon/arrow_down.svg";
import { useNavigate } from "react-router-dom";
import hotel3 from '../../assets/image/hotel/hotel3.jpg';
type MyPetBoxProps = {
  isOpen: boolean;
  closeMyPetBox: () => void;
};

const MyPetBox = ({ isOpen, closeMyPetBox }: MyPetBoxProps) => {
  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate("/my-pet-detail");
  };

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
              <img src={hotel3} alt='profile' className="profile-img"/>
            </div>
            <div>
              <div className="sub-title">코코 (F)</div>
              <div>출생일 : 2020. 01. 30</div>
              <div>종류(품종) : 이누시바</div>
              <div>모색 : 화이트</div>
              <div>체중 : 10kg</div>
              <div>중성화 : N</div>
              <div>기타 특징 : 미용을 싫어함</div>
            </div>
          </div>
          <button onClick={moveToDetail}>수정하기</button>
        </div>
      </div>
    </>
  );
};

export default MyPetBox;
