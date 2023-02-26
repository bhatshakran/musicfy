import { useEffect } from 'react';
import { axiosInstance } from '../axios';

const Home = () => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      //   const options = ;
      try {
        const res = await axiosInstance.get('songs/list-recommendations', {
          signal: signal,
          params: {
            key: '484129036',
            locale: 'en-US',
          },
        });
        console.log(res.data);
      } catch (error) {
        throw new Error('Could not complete request');
      }
    })();

    return () => controller.abort();
  }, []);

  return <div>Home</div>;
};

export default Home;
