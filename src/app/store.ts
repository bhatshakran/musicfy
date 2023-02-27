import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './features/favourites/favouriteSlice';
import playlistsReducer from './features/playlists/playlistsSlice';

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    playlists: playlistsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
