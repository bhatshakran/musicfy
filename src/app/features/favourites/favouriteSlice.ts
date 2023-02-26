import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../store';

// Define a type for the slice state
interface FavouriteState {
  favourites: Favourite[];
}

interface Favourite {
  name: string;
}

// Define the initial state using that type
const initialState: FavouriteState = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: localStorage.getItem('favourites')
    ? JSON.parse(localStorage.getItem('favourites') as string)
    : initialState,
  reducers: {
    addToFavsLs: (state, action: PayloadAction) => {
      const item = action.payload;
      console.log(item);

      if (localStorage.getItem('favourites') !== null) {
        const ls = JSON.parse(localStorage.getItem('favourites') as string);
        const newFavs = [...ls, item];
        localStorage.setItem('favourites', JSON.stringify(newFavs));
      } else {
        const favourites = [];
        favourites.push(item);
        localStorage.setItem('favourites', JSON.stringify(favourites));
      }
      state.favourites = JSON.parse(
        localStorage.getItem('favourites') as string
      );
      console.log(localStorage.getItem('favourites'));
    },
  },
});

export const { addToFavsLs } = favouritesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.favourites.value;

export default favouritesSlice.reducer;
