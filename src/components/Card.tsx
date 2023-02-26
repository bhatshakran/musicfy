import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { addToFavsLs } from '../app/features/favourites/favouriteSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Tooltip } from '../utilities/Tooltip';
import includes from 'lodash.includes';

const Card = ({ data }: any) => {
  const favouritesState = useAppSelector((state) => state.favourites);

  const getInitialState = () => {
    const exists = includes(favouritesState, data.title);
    return exists;
  };

  const [favState, setFavState] = useState(() => getInitialState());

  const dispatch = useAppDispatch();

  const updateLsFavState = () => {
    if (!favState) {
      dispatch(addToFavsLs(data.title));
    }
    setFavState(!favState);
  };
  return (
    <div className='card p-0 mx-2' style={{ border: 'none' }}>
      <div className='position-relative '>
        <img src={data.share.image} className='card-img-top' alt='...' />
        <div
          className='position-absolute  top-0 end-0 fs-5  z-1'
          onClick={() => updateLsFavState()}
        >
          <Tooltip text='Add/Remove from favourites'>
            <div role='button' className='btn '>
              {!favState ? (
                <AiOutlineStar style={{ fill: 'orange' }} />
              ) : (
                <AiFillStar style={{ fill: 'orange' }} />
              )}
            </div>
          </Tooltip>
        </div>
      </div>
      <div className='card-body p-1'>
        <h5 className='card-title fs-6 w-100 '>{data.title}</h5>
        <h6 className='card-subtitle text-muted' style={{ fontSize: '12px' }}>
          {data.subtitle}
        </h6>

        <div
          role={'button'}
          className='mt-2 '
          style={{ fontSize: '12px' }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
//
