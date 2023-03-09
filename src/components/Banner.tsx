import { BsSun } from 'react-icons/bs';
import { MdOutlineNightlightRound } from 'react-icons/md';
import music from '../images/musiclofi.png';

const Banner: React.FC = () => {
  return (
    <div className='banner   w-100 flex-grow-1 ps-3 pt-2 d-flex justify-content-between align-items-center text-white opensansbold mb-5'>
      <div className=' h-100  '>
        <img src={music} alt='' height={'160%'} />
      </div>
      <div className=''>
        <p className='fs-2 mb-0 banner-heading me-5'>Your favourite tunes</p>
        <p className='fs-5 mb-0 mt-0 banner-subheading opacity-75 me-5'>
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
