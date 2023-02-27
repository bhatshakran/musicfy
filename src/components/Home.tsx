import { useCallback, useEffect, useState } from 'react';
// import { useAppSelector } from '../app/hooks';
import { axiosInstance } from '../axios';
import Grid from './Grid';

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const fetch = useCallback(async () => {
    try {
      const res = await axiosInstance.get('charts/track', {
        // signal: signal,
        params: {
          // key: '484129036',
          locale: 'en-US',
        },
      });
      setTracks(res.data.tracks);
    } catch (error) {
      throw new Error('Could not complete request');
    }
  }, []);

  useEffect(() => {
    /*  const controller = new AbortController();
    const signal = controller.signal; */
    fetch();

    // return () => controller.abort();
  }, [fetch]);

  return <Grid tracks={tracks} />;
};

export default Home;
