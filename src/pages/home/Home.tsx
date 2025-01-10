import { Outlet } from 'react-router-dom';
import Header from '../../layout/header/logo-header';
import Gnb from '../../layout/footer/gnb';
import HomeContainer from '../../layout/contents/homeContent';

const Home = () => {
  return (
    <>
      <Header/>
      <HomeContainer>
        <Outlet />
      </HomeContainer>
      <Gnb />
    </>
  )
}
export default Home;