import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../store';

// Define a type for the slice state

// Define the initial state using that type
const initialState: string[] = [];

export const favouritesSlice = createSlice({
  name: 'favourites',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: localStorage.getItem('favourites')
    ? JSON.parse(localStorage.getItem('favourites') as string)
    : initialState,
  reducers: {
    addToFavsLs: (state, action) => {
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
      state = JSON.parse(localStorage.getItem('favourites') as string);
      return state;
    },

    removeFromLs: (state, action: PayloadAction) => {
      const item = action.payload;
      if (localStorage.getItem('favourites') !== null) {
        const ls = JSON.parse(localStorage.getItem('favourites') as string);

        const newLs = ls.filter((el: any) => el.title !== item);
        console.log(newLs);
        localStorage.setItem('favourites', JSON.stringify(newLs));
        state = JSON.parse(localStorage.getItem('favourites') as string);
        return state;
      }
    },
  },
});

export const { addToFavsLs, removeFromLs } = favouritesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.favourites.value;

export default favouritesSlice.reducer;
