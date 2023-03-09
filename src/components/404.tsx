import { Link } from 'react-router-dom';
import err from '../images/404.png';

const ErrorPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 gap-4'>
      <img src={err} alt='' width={'400px'} />
      <p className='opensansbold'>Kindly login to access this page.</p>
      <Link
        to='/'
        className='text-black mypink rounded-1 px-3 py-2 '
        style={{ textDecoration: 'none' }}
      >
        LoginPage
      </Link>
    </div>
  );
};

export default ErrorPage;
