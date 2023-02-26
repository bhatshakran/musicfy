import React, { useReducer } from 'react';
import Banner from './components/Banner';
import Manager from './components/Manager';
import Sidebar from './components/Sidebar';
import { TabContext, TabDispatchContext } from './context/activeContext';
import tabReducer from './context/tabReducer';
import { initialTabState } from './types';

const App: React.FC = () => {
  const [activeTab, dispatch] = useReducer(tabReducer, initialTabState);

  return (
    <div className='App vh-100 d-flex '>
      <Sidebar />
      <div className='w-100 overflow-hidden vh-100'>
        <Banner />
        <TabContext.Provider value={activeTab}>
          <TabDispatchContext.Provider value={dispatch}>
            <Manager />
          </TabDispatchContext.Provider>
        </TabContext.Provider>
      </div>
    </div>
  );
};

export default App;
