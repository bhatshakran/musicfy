import { BsSun } from 'react-icons/bs';
import { MdOutlineNightlightRound } from 'react-icons/md';
import listening from '../images/listening.svg';

const Banner: React.FC = () => {
  return (
    <div className='banner bg-ourpink  w-100 flex-grow-1 ps-2 pt-2 d-flex justify-content-between align-items-center text-white opensansbold overflow-hidden'>
      <div className=' h-100  '>
        <img src={listening} alt='' height={'100%'} />
      </div>
      <div className='me-5'>
        <p className='fs-2 mb-0'>You favourite tunes</p>
        <p className='fs-5 mb-0 mt-0 opacity-75'>
          All{' '}
          <span>
            <BsSun />
          </span>{' '}
          and
          <span>
            <MdOutlineNightlightRound style={{ transform: 'scale(-1, 1)' }} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
