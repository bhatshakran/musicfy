import { CgLogOut, CgMenuLeft } from 'react-icons/cg';
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
import { useKeycloak } from '@react-keycloak/web';

const tabClass = `d-flex gap-2 justify-content-start align-items-center   w-100 py-2 hover-bg-white ps-5`;
const Sidebar: React.FC = () => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  const activeTab = useContext(TabContext);

  const dispatch = useContext(TabDispatchContext);

  return (
    <div className='sidebar d-flex flex-column align-items-start h-100 justify-content-center gap-4 opensansbold  '>
      {isLoggedIn && (
        <div className='position-absolute top-0 ms-2 mt-1'>
          <div
            role={'button'}
            className='d-flex align-items-center gap-1'
            onClick={() => keycloak.logout()}
          >
            <CgLogOut style={{ transform: 'scale(1.4)' }} />
            <div>Logout</div>
          </div>
        </div>
      )}

      <div
        className={`${tabClass} ${
          activeTab?.value === 'home' && 'activeTab'
        } sidebarel`}
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
        } sidebarel`}
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
        } sidebarel`}
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
        } sidebarel`}
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
