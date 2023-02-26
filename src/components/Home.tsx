import { useEffect, useState } from 'react';
import { axiosInstance } from '../axios';
import Grid from './Grid';

const Home = () => {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        const res = await axiosInstance.get('charts/track', {
          signal: signal,
          params: {
            // key: '484129036',
            locale: 'en-US',
          },
        });
        setTracks(res.data.tracks);
      } catch (error) {
        throw new Error('Could not complete request');
      }
    })();

    return () => controller.abort();
  }, []);

  return <Grid tracks={tracks} />;
};

export default Home;
