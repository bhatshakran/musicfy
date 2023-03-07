import { ChangeEvent, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToPlaylistsLs } from '../../app/features/playlists/playlistsSlice';
import { TiTick } from 'react-icons/ti';
import find from 'lodash.find';
import PlaylistCard from './PlaylistCard';

const Playlists = () => {
  const playlistsState = useAppSelector((state) => state.playlists);
  const favouritesState = useAppSelector((state) => state.favourites);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [plCreationErr, setPlCreationErr] = useState('');
  const dispatch = useAppDispatch();

  const setPlaylist = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value);
  };

  const addSongToPlaylist = (song: any) => {
    const newState: any = [...playlistSongs, song];
    setPlaylistSongs(newState);
  };

  const createPlaylist = () => {
    if (playlistName.length > 0) {
      setPlCreationErr('');
      let obj = {};
      console.log(playlistSongs.length);
      if (playlistSongs.length > 0) {
        obj = {
          playlistName,
          playlistSongs,
        };
      } else {
        obj = {
          playlistName,
        };
      }
      console.log(obj);
      dispatch(addToPlaylistsLs(obj));
      const modal = document.getElementById('exampleModal') as HTMLDivElement;
      console.log(modal);
      modal.style.display = 'hidden !important';
    } else {
      setPlCreationErr(
        'Unable to create playlist.Please provide a playlist name'
      );
    }
  };

  return (
    <div className='pt-3 '>
      <h2 className='opensansbold ms-5'>Your Playlists</h2>
      <div className='modal ' id='exampleModal' tabIndex={-1}>
        <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
          <div className='modal-content bg-white'>
            <div className='modal-header'>
              <div className='input-group '>
                <input
                  type='text'
                  className='form-control border border-ourpink'
                  placeholder='Playlist name'
                  aria-label='name'
                  aria-describedby='basic-addon1'
                  value={playlistName}
                  onChange={(e) => setPlaylist(e)}
                />
              </div>

              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body ' style={{ height: '300px' }}>
              <p className='text-danger opensans '>{plCreationErr}</p>

              <h6 className='opensansregular mb-3'>
                Add songs from favourites:
              </h6>
              {favouritesState.length > 0 ? (
                favouritesState.map((item: any, id: number) => {
                  return (
                    <div
                      key={id}
                      className='d-flex   mb-2 justify-content-between opensansregular align-items-center'
                      style={{ fontSize: '12px' }}
                    >
                      <div className='d-flex gap-2 align-items-center'>
                        <img
                          src={item.share ? item.share.image : item.image}
                          alt=''
                          height={'50px'}
                        />
                        <div className='d-flex flex-column gap-0 align-items-start justify-content-start'>
                          <p className=' mb-0'>{item.title}</p>
                          <p
                            className=' mb-0 '
                            style={{ fontSize: '10px', color: 'gray' }}
                          >
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div
                        role='button'
                        onClick={() => addSongToPlaylist(item)}
                      >
                        {find(playlistSongs, { title: item.title }) ? (
                          <TiTick />
                        ) : (
                          <IoIosAddCircleOutline style={{ scale: '1.9' }} />
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>
                  <p className='' style={{ fontSize: '12px' }}>
                    You dont have any songs in your favorites. You can still
                    create a playlist and add songs later on.
                  </p>
                </div>
              )}
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn border-ourpink'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                className='btn bg-ourpink text-white'
                onClick={() => createPlaylist()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {playlistsState && playlistsState.length === 0 ? (
        <div className='px-5'>
          <p>You dont have any playlists yet.</p>
        </div>
      ) : (
        <div className='mx-5'>
          <button
            type='button'
            className='btn border-ourpink mb-5'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Create a playlist
          </button>
          {playlistsState &&
            playlistsState.length > 0 &&
            playlistsState.map((playlist: any, id: number) => {
              console.log(playlistsState);
              return (
                <PlaylistCard key={id} data={playlist} />

                // <div key={id}>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Playlists;
