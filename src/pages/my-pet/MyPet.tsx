import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useItemStore from "../../shared/stores/userItemStore";
import ItemBoxSideLine from "../../features/itemBoxSideLine";
import Header from "../../layout/header/logo-header";
import arrowDownIcon from "@/assets/icon/arrow_down.svg";
import { cares } from "../../entities/cares";
import MyPetBox from "./MyPetBox";

type Hospital = {
  id: string;
  name: string;
  date: string;
  dx: string;
  comment: string;
};
type Solution = {
  title: string;
  content: string[];
};

const MyPet = () => {
  const navigate = useNavigate();
  const { hotItems, fetchItems } = useItemStore();
  const [careMoreOpen, toggleCareMoreOpen] = useState<number | null>(null);
  const [solutionMoreOpen, toggleSolutionMoreOpen] = useState<boolean>(false);
  const [mypetOpen, toggleMypetOpen] = useState<boolean>(false);

  const moveToDetail = (itemId: string) => {
    navigate("/shop-detail", { state: { itemId } });
  };

  const handleMainTab = () => {};
  const handleMypetBox = () => {
    toggleMypetOpen(!mypetOpen);
  };
  const handleCareMore = (index: number) => {
    toggleCareMoreOpen(careMoreOpen === index ? null : index);
  };
  const handleSolutionMoreOpen = () => {
    toggleSolutionMoreOpen(!solutionMoreOpen);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className="header-back">
        <div className="header-back-title" onClick={handleMypetBox}>
          반려동물 선택
          <img alt="arrow-down-icon" src={arrowDownIcon} />
        </div>
      </div>
      <div className={`background-overlay ${mypetOpen ? "dimmed" : ""}`}>
        <div className="home-container">
          <Header
            hiddenLogo
            hasHeadTab
            handleTab={handleMainTab}
            tabTitles={["케어", "병원"]}
          />
          <h3>마이펫 최근 정보</h3>
          <div className="recommend-box">
            <h3>최근 질병 사항</h3>
            <div className="white-box">
              <div className="title">슬개골 탈구 2기</div>
              <div className="content">진료 예약</div>
              <div className="care-img"></div>
            </div>
            <div className="white-box">
              <div className="title">냉방병</div>
              <div className="content">진료 완료</div>
              <div className="care-img"></div>
            </div>
            <div className="white-box">
              <div className="title">구토설사</div>
              <div className="content">완치</div>
              <div className="care-img"></div>
            </div>
          </div>

          <div className="care-container">
            <h3>총 N건의 케어 내역</h3>
            {cares.hospital.map((h: Hospital, index: number) => (
              <div className="care-box">
                <div className="title">
                  {h.name} {h.date}
                  <img
                    alt="arrow-down-icon"
                    src={arrowDownIcon}
                    onClick={() => handleCareMore(index)}
                  />
                </div>
                <hr />
                <span className="sub-title">병원</span>
                <span>{h.dx}</span>
                {index === careMoreOpen && (
                  <div className="more-box">
                    <div>
                      <span className="sub-title">진단일</span>
                      <span>{h.date}</span>
                    </div>
                    <div>
                      <span className="sub-title">예후소견</span>
                      <span>{h.comment}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button>진단서 업로드</button>
          </div>

          <div className="care-container">
            <h3>케어 솔루션</h3>
            <div className="care-box">
              <div className="title">
                Dr.KK의 케어 솔루션
                <img
                  alt="arrow-down-icon"
                  src={arrowDownIcon}
                  onClick={() => handleSolutionMoreOpen()}
                />
              </div>
              <hr />
              <span>
                ____의 케어 히스토리를 분석하여 케어 솔루션을 제공합니다.
              </span>
              {solutionMoreOpen &&
                cares.solution.map((s: Solution) => (
                  <>
                    <div>
                      <span>{s.title}</span>
                    </div>
                    <div>
                      {s.content.map((text: string) => (
                        <span>{text}</span>
                      ))}
                    </div>
                  </>
                ))}
            </div>
          </div>

          <div className="care-container">
            <h3>유의사항</h3>
            <div className="recommend-box">
              <h3>유의질병</h3>
              <div className="white-box">
                <div className="title">유의질병명</div>
                <div className="content">유의 질병에 대한 내용입니다.</div>
                <div className="care-img"></div>
              </div>
              <div className="white-box">
                <div className="title">유의질병명</div>
                <div className="content">유의 영양소에 대한 내용입니다.</div>
                <div className="care-img"></div>
              </div>
            </div>
          </div>

          <div className="marketing-item-box">
            <h3>추천 영양제</h3>
            <div className="side-inline">
              {hotItems.map((item, index) => (
                <ItemBoxSideLine
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={() => moveToDetail(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {mypetOpen && (
        <MyPetBox isOpen={mypetOpen} closeMyPetBox={handleMypetBox} />
      )}
    </>
  );
};
export default MyPet;
