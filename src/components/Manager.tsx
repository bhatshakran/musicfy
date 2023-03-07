import { useContext } from 'react';
import { TabContext } from '../context/activeContext';
import Favourites from './Favourites';
import Home from './Home';
import Playlists from './Playlist/Playlists';
import Search from './Search';

const Manager: React.FC = () => {
  const activeTab = useContext(TabContext);
  if (activeTab?.value === 'home') {
    return <Home />;
  } else if (activeTab?.value === 'search') return <Search />;
  else if (activeTab?.value === 'favourites') return <Favourites />;
  else if (activeTab?.value === 'playlists') return <Playlists />;
  else return <div>Home tab</div>;
};

export default Manager;
