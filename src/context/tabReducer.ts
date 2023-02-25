import { State, TabAction, TabKind } from '../types';

export default function tabReducer(state: State, action: TabAction): State {
  switch (action.type) {
    case TabKind.home: {
      return { ...state, value: TabKind.home };
    }
    case TabKind.search: {
      return { ...state, value: TabKind.search };
    }
    case TabKind.favourites: {
      return { ...state, value: TabKind.favourites };
    }
    case TabKind.playlists: {
      return { ...state, value: TabKind.playlists };
    }
    default:
      return { ...state, value: TabKind.home };
  }
}
