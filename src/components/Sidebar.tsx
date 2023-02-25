import { CgMenuLeft } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { AiTwotoneHeart } from 'react-icons/ai';
import { IoIosPlayCircle } from 'react-icons/io';
import { TabDispatchContext } from '../context/activeContext';
import { useContext } from 'react';
import {
  favouritesAction,
  homeAction,
  playlistsAction,
  searchAction,
} from '../types';
const Sidebar: React.FC = () => {
  const dispatch = useContext(TabDispatchContext);
  return (
    <div className='sidebar d-flex flex-column align-items-start ps-4 h-100 justify-content-center gap-5 opensansbold text-white fs-5 '>
      <div className='d-flex gap-2 align-items-center ' role='button'>
        <CgMenuLeft />
        <div
          onClick={() => {
            dispatch?.(homeAction);
          }}
        >
          Home
        </div>
      </div>
      <div className='d-flex gap-2 align-items-center' role='button'>
        <BiSearch />
        <div
          onClick={() => {
            dispatch?.(searchAction);
          }}
        >
          Search
        </div>
      </div>
      <div className='d-flex gap-2 align-items-center' role='button'>
        <AiTwotoneHeart />
        <div
          onClick={() => {
            dispatch?.(favouritesAction);
          }}
        >
          Favourites
        </div>
      </div>
      <div className='d-flex gap-2 align-items-center' role='button'>
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
