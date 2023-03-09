import { useKeycloak } from '@react-keycloak/web';
import ErrorPage from '../components/404';

const PrivateRoute = ({ children }: any) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? children : <ErrorPage />;
};

export default PrivateRoute;
