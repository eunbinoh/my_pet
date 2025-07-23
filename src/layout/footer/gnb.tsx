import { useNavigate } from "react-router-dom";

const gnb = () => {
  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(path);
  };
  return (
    <div id="gnb">
      <div className="gnb-box">
        <div className="menu-item" onClick={() => movePage("/home")}>
          <div className="icon" />
          <label>HOME</label>
        </div>
        <div className="menu-item" onClick={() => movePage("/shop")}>
          <div className="icon" />
          <label>SHOP</label>
        </div>
        <div className="menu-item" onClick={() => movePage("/my-pet")}>
          <div className="icon" />
          <label>MyPET</label>
        </div>
        <div className="menu-item" onClick={() => movePage("/care")}>
          <div className="icon" />
          <label style={{marginLeft:'4px'}}> Care</label>
        </div>
        <div className="menu-item" onClick={() => movePage("/my-page")}>
          <div className="icon" />
          <label>MyPage</label>
        </div>
      </div>
    </div>
  );
};
export default gnb;
