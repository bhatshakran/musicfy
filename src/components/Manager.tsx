import { useContext } from 'react';
import { TabContext } from '../context/activeContext';

const Manager: React.FC = () => {
  const activeTab = useContext(TabContext);
  if (activeTab?.value === 'home') {
    return <div>Home</div>;
  } else if (activeTab?.value === 'search') return <div>search tab</div>;
  else if (activeTab?.value === 'favourites') return <div>Favourites tab</div>;
  else if (activeTab?.value === 'playlists') return <div>Playlists</div>;
  else return <div>Home tab</div>;
};

export default Manager;
