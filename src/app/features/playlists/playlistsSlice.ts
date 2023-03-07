import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../store';

// Define a type for the slice state

// interface Song {
//   name: string;
//   image: string;
//   subtitle: string;
// }

interface Song {
  [index: number]: { name: string; image: string; subtitle: string };
}

// Define the initial state using that type
const initialState: Song = [];

export const playlistsSlice = createSlice({
  name: 'playlists',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: localStorage.getItem('playlists')
    ? JSON.parse(localStorage.getItem('playlists') as string)
    : initialState,
  reducers: {
    addToPlaylistsLs: (state, action) => {
      const item = action.payload;
      console.log(item);

      if (localStorage.getItem('playlists') !== null) {
        const ls = JSON.parse(localStorage.getItem('playlists') as string);
        const newFavs = [...ls, item];
        localStorage.setItem('playlists', JSON.stringify(newFavs));
      } else {
        const playlists = [];
        playlists.push(item);
        localStorage.setItem('playlists', JSON.stringify(playlists));
      }
      state = JSON.parse(localStorage.getItem('playlists') as string);
      return state;
    },

    removePlaylistFromLs: (state, action: PayloadAction) => {
      const item = action.payload;
      if (localStorage.getItem('playlists') !== null) {
        const ls = JSON.parse(localStorage.getItem('playlists') as string);

        const newLs = ls.filter((el: any) => el.title !== item);
        console.log(newLs);
        localStorage.setItem('playlists', JSON.stringify(newLs));
        state = JSON.parse(localStorage.getItem('playlists') as string);
        return state;
      }
    },
  },
});

export const { addToPlaylistsLs, removePlaylistFromLs } =
  playlistsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.favourites.value;

export default playlistsSlice.reducer;
