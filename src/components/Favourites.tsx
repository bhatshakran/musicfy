import isEmpty from 'lodash.isempty';
import { useAppSelector } from '../app/hooks';
import Grid from './Grid';

const Favourites = () => {
  const favouritesState = useAppSelector((state) => state.favourites);
  console.log(favouritesState);
  return (
    <div className='pt-3'>
      <h2 className='opensansbold ms-5'>Your Favourites</h2>
      {!isEmpty(favouritesState) ? (
        <Grid tracks={favouritesState}></Grid>
      ) : (
        <div>No favourites yet</div>
      )}
    </div>
  );
};

export default Favourites;
