import { useKeycloak } from '@react-keycloak/web';
import { Link } from 'react-router-dom';
import auth from '../images/authenticate.png';
import { CgLogOut } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';

const Nav = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <div className='  text-black vh-100 position-relative'>
        <section className='d-flex justify-content-center align-items-center w-100 h-100'>
          <div className='position-absolute top-0 mt-2 start-0 ms-5 opensansregular'>
            {!!keycloak.authenticated && (
              <div
                role={'button'}
                className='d-flex align-items-center gap-1'
                onClick={() => keycloak.logout()}
              >
                <CgLogOut style={{ transform: 'scale(1.4)' }} />
                <div>Logout</div>
              </div>
            )}
          </div>
          <div className='position-absolute top-0 end-0 mt-2 me-5 opensansregular'>
            <div className='hover:text-gray-200'>
              {!!keycloak.authenticated && (
                <div
                  role='button'
                  className='bg-white border-0  py-1 d-flex flex-column align-items-center'
                >
                  <span>
                    {keycloak.tokenParsed &&
                      keycloak.tokenParsed.preferred_username}
                    <AiOutlineUser />
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className=' p-4 d-flex flex-column justify-content-center text-center'>
            <img src={auth} alt='' width={'200px'} />
            <h1 className='opensansbold mt-5 text-center'>Musicfy</h1>
            <ul className='list-group'>
              <li className='list-group-item border-0'>
                {!!keycloak.authenticated ? (
                  <Link className=' list-group-item-action' to='/homepage'>
                    Go to Homepage
                  </Link>
                ) : (
                  <div className=''>
                    {!keycloak.authenticated && (
                      <button
                        type='button'
                        className='bg-white r py-1 border-0 '
                        onClick={() => keycloak.login()}
                      >
                        <u>Login</u>
                      </button>
                    )}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nav;
