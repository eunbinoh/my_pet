import { useNavigate } from 'react-router-dom';
import arrowBackIcon from '@/assets/icon/arrow_back.svg';

const header = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }
  return (
    <>
      <div className='header-back'>
        <img src={arrowBackIcon} alt='back_icon' onClick={handleBack}/>
      </div>
    </>
  )
}
export default header;