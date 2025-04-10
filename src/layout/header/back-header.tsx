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
        <img id='back-icon' alt='back_icon' src={arrowBackIcon} onClick={handleBack}/>
      </div>
    </>
  )
}
export default header;