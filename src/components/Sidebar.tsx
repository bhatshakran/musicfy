import { CgMenuLeft } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { AiTwotoneHeart } from 'react-icons/ai';
import { IoIosPlayCircle } from 'react-icons/io';
const Sidebar = () => {
  return (
    <div className='sidebar d-flex flex-column align-items-start ps-4 h-100 justify-content-center gap-5 opensansbold text-white fs-5 '>
      <div className='d-flex gap-2 align-items-center '>
        <CgMenuLeft />
        <div>Home</div>
      </div>
      <div className='d-flex gap-2 align-items-center'>
        <BiSearch />
        <div>Search</div>
      </div>
      <div className='d-flex gap-2 align-items-center'>
        <AiTwotoneHeart />
        <div>Favourites</div>
      </div>
      <div className='d-flex gap-2 align-items-center'>
        <IoIosPlayCircle />
        <div>Playlists</div>
      </div>
    </div>
  );
};

export default Sidebar;
