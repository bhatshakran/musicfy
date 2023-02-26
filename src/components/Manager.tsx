import { useContext } from 'react';
import { TabContext } from '../context/activeContext';
import Home from './Home';
import Search from './Search';

const Manager: React.FC = () => {
  const activeTab = useContext(TabContext);
  if (activeTab?.value === 'home') {
    return <Home />;
  } else if (activeTab?.value === 'search') return <Search />;
  else if (activeTab?.value === 'favourites') return <div>Favourites tab</div>;
  else if (activeTab?.value === 'playlists') return <div>Playlists</div>;
  else return <div>Home tab</div>;
};

export default Manager;
