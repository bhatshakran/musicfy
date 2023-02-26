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
    <TabContext.Provider value={activeTab}>
      <TabDispatchContext.Provider value={dispatch}>
        <div className='App vh-100 d-flex '>
          <Sidebar />
          <div className='w-100 overflow-hidden vh-100'>
            <Banner />
            <Manager />
          </div>
        </div>
      </TabDispatchContext.Provider>
    </TabContext.Provider>
  );
};

export default App;
