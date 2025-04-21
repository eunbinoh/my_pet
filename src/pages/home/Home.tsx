import { Outlet } from "react-router-dom";
import Header from "../../layout/header/logo-header";

import HomeContainer from "../../layout/contents/homeContent";

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Outlet />
      </HomeContainer>
    </>
  );
};
export default Home;
