import isEmpty from 'lodash.isempty';
import { useAppSelector } from '../app/hooks';
import Grid from './Grid';

const Favourites = () => {
  const favouritesState = useAppSelector((state) => state.favourites);
  return (
    <div className='pt-3 overflow-scroll' style={{ height: '600px' }}>
      <h2 className='opensansbold ms-5'>Your Favourites</h2>
      {!isEmpty(favouritesState) ? (
        <Grid tracks={favouritesState} more={true}></Grid>
      ) : (
        <div className='ms-5'>
          No favourites yet. Search for songs and add to favs .
        </div>
      )}
    </div>
  );
};

export default Favourites;
