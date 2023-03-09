import { useContext, useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { BsExclamationCircleFill } from 'react-icons/bs';
import Grid from './Grid';
import { TabDispatchContext } from '../context/activeContext';
import { playlistsAction, searchAction } from '../types';
import isEmpty from 'lodash.isempty';

const Home = () => {
  const dispatch = useContext(TabDispatchContext);

  const favouritesState = useAppSelector((state) => state.favourites);
  const playlistsState = useAppSelector((state) => state.playlists);
  const [favs, setFavs] = useState(() => favouritesState);
  const [playlists, setPlaylists] = useState(() => playlistsState);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setFavs(favouritesState);
    setPlaylists(playlistsState);
  }, [favouritesState, playlistsState]);

  return (
    <div
      className='home d-flex flex-wrap  overflow-scroll'
      style={{ height: '600px', paddingBottom: '100px' }}
    >
      <div className='w-100  max-h-50'>
        <div className='d-flex justify-content-between align-items-center mt-5 w-100'>
          <h5 className='ms-5  opensansbold'>Your favourites</h5>
          <h6
            className='me-5 text-mypink'
            role='button'
            onClick={() => setShowMore(!showMore)}
          >
            {!isEmpty(favs) && favs.length > 7 && <div>View All</div>}
          </h6>
        </div>
        <div className='ms-5'>
          <hr className='text-mypink'></hr>
        </div>
        {isEmpty(favs) ? (
          <div className='mx-5 d-flex flex-column justify-content-center align-items-center'>
            <BsExclamationCircleFill style={{ height: '50px', scale: '2' }} />
            <p className='opensansregular'>
              You dont have any favourites yet. You can add some by searching
              for songs and starring them.
            </p>
            <button
              type='button'
              className='bg-white px-3 py-2 rounded-1 mypink opensansregular text-black'
              onClick={() => {
                dispatch?.(searchAction);
              }}
            >
              {' '}
              Go to search
            </button>
          </div>
        ) : (
          <Grid tracks={favs} type='favourites' more={showMore}></Grid>
        )}
      </div>
      <div className='w-100 max-h-50'>
        <h5 className='ms-5 mt-2 opensansbold'>
          Your playlists
          <hr className='text-mypink'></hr>
        </h5>
        {isEmpty(playlists) ? (
          <div className='mx-5 d-flex flex-column justify-content-center align-items-center'>
            <BsExclamationCircleFill style={{ height: '50px', scale: '2' }} />
            <p className='opensansregular'>
              You dont have any playlists yet. You can create a playlist by
              adding songs to it.
            </p>
            <button
              type='button'
              className='bg-white px-3 py-2 rounded-1 mypink opensansregular'
              onClick={() => {
                dispatch?.(playlistsAction);
              }}
            >
              {' '}
              Create a playlist
            </button>
          </div>
        ) : (
          <Grid tracks={playlists} type='playlists' />
        )}
      </div>
    </div>
  );
};

export default Home;
