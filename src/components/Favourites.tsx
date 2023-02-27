import { useAppSelector } from '../app/hooks';
import Grid from './Grid';

const Favourites = () => {
  const favouritesState = useAppSelector((state) => state.favourites);
  console.log(favouritesState);
  return (
    <div className='pt-3'>
      <h2 className='opensansbold ms-5'>Your Favourites</h2>
      <Grid tracks={favouritesState}></Grid>
    </div>
  );
};

export default Favourites;
