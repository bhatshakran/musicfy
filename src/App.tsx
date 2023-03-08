import { ReactKeycloakProvider } from '@react-keycloak/web';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

import PrivateRoute from './helpers/PrivateRoute';
import keycloak from './keycloak';
import Homepage from './pages/Homepage';

const App: React.FC = () => {
  return (
    <>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{ onLoad: 'login-required' }}
      >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Nav />} />
            <Route
              path='/homepage'
              element={
                <PrivateRoute>
                  <Homepage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </>
  );
};

export default App;
