import { useContext, useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { BsExclamationCircleFill } from 'react-icons/bs';
import Grid from './Grid';
import { TabDispatchContext } from '../context/activeContext';
import { playlistsAction, searchAction } from '../types';
import isEmpty from 'lodash.isempty';

const Home = () => {
  // const [tracks, setTracks] = useState([]);
  const dispatch = useContext(TabDispatchContext);

  const favouritesState = useAppSelector((state) => state.favourites);
  const playlistsState = useAppSelector((state) => state.playlists);
  const [favs, setFavs] = useState(() => favouritesState);
  const [playlists, setPlaylists] = useState(() => playlistsState);

  console.log(favs);

  useEffect(() => {
    setFavs(favouritesState);
    setPlaylists(playlistsState);
  }, [favouritesState, playlistsState]);

  return (
    <div
      className='home d-flex flex-wrap  overflow-scroll'
      style={{ height: '600px' }}
    >
      <div className='w-100  max-h-50'>
        <h5 className='ms-5 mt-5 opensansbold'>
          Your favourites
          <hr className='text-ourpink'></hr>
        </h5>
        {isEmpty(favs) ? (
          <div className='mx-5 d-flex flex-column justify-content-center align-items-center'>
            <BsExclamationCircleFill style={{ height: '50px', scale: '2' }} />
            <p className='opensansregular'>
              You dont have any favourites yet. You can add some by searching
              for songs and starring them.
            </p>
            <button
              type='button'
              className='btn border-ourpink opensansregular'
              onClick={() => {
                dispatch?.(searchAction);
              }}
            >
              {' '}
              Go to search
            </button>
          </div>
        ) : (
          <Grid tracks={favs} type='favourites'></Grid>
        )}
      </div>
      <div className='w-100 max-h-50'>
        <h5 className='ms-5 mt-2 opensansbold'>
          Your playlists
          <hr className='text-ourpink'></hr>
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
              className='btn border-ourpink opensansregular'
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
