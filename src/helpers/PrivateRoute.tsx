import { useKeycloak } from '@react-keycloak/web';
import { useEffect, useState } from 'react';
import ErrorPage from '../components/404';
import { Loading } from '../components/Loading';

const PrivateRoute = ({ children }: any) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(false);
    }
  }, [isLoggedIn]);

  if (loading) {
    return (
      <div className='w-100 d-flex vh-100 justify-content-center align-items-center'>
        <div className='w-50'>
          <Loading />;
        </div>
      </div>
    );
  } else if (isLoggedIn) {
    return children;
  } else {
    return <ErrorPage />;
  }
};

export default PrivateRoute;
