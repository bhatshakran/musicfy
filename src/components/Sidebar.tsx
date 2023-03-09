import { CgMenuLeft } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { AiTwotoneHeart } from 'react-icons/ai';
import { IoIosPlayCircle } from 'react-icons/io';
import { TabContext, TabDispatchContext } from '../context/activeContext';
import { useContext } from 'react';
import {
  favouritesAction,
  homeAction,
  playlistsAction,
  searchAction,
} from '../types';

const tabClass = `d-flex gap-2 align-items-center w-100  ps-5 py-2 hover-bg-white`;
const Sidebar: React.FC = () => {
  const activeTab = useContext(TabContext);

  const dispatch = useContext(TabDispatchContext);

  return (
    <div className='sidebar d-flex flex-column align-items-center h-100 justify-content-center gap-4 opensansbold  '>
      <div
        className={`${tabClass} ${activeTab?.value === 'home' && 'activeTab'}`}
        role='button'
      >
        <CgMenuLeft />
        <div
          onClick={() => {
            dispatch?.(homeAction);
          }}
        >
          Home
        </div>
      </div>
      <div
        className={`${tabClass}  ${
          activeTab?.value === 'search' && 'activeTab'
        }`}
        role='button'
      >
        <BiSearch />
        <div
          onClick={() => {
            dispatch?.(searchAction);
          }}
        >
          Search
        </div>
      </div>
      <div
        className={`${tabClass}  ${
          activeTab?.value === 'favourites' && 'activeTab'
        }`}
        role='button'
      >
        <AiTwotoneHeart />
        <div
          onClick={() => {
            dispatch?.(favouritesAction);
          }}
        >
          Favourites
        </div>
      </div>
      <div
        className={`${tabClass} ${
          activeTab?.value === 'playlists' && 'activeTab'
        }`}
        role='button'
      >
        <IoIosPlayCircle />
        <div
          onClick={() => {
            dispatch?.(playlistsAction);
          }}
        >
          Playlists
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
