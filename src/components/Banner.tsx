import listening from '../images/listening.svg';

const Banner = () => {
  return (
    <div className='banner h-30  w-100 flex-grow-1 ps-2 pt-2 d-flex justify-content-between align-items-center text-white opensansbold overflow-hidden'>
      <div className=' h-100  '>
        <img src={listening} alt='' height={'100%'} />
      </div>
      <div className='me-5'>
        <p className='fs-1 mb-0'>You favourite tunes</p>
        <p className='fs-3 mb-0 mt-0'>All 🌞 and 🌙</p>
      </div>
    </div>
  );
};

export default Banner;
