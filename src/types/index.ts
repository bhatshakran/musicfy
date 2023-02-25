export type State = {
  value: string;
};

export const initialTabState: State = {
  value: 'home',
};
export enum TabKind {
  home = 'home',
  search = 'search',
  favourites = 'favourites',
  playlists = 'playlists',
}
export interface TabAction {
  type: TabKind;
}

export const homeAction: TabAction = {
  type: TabKind.home,
};
export const searchAction: TabAction = {
  type: TabKind.search,
};
export const favouritesAction: TabAction = {
  type: TabKind.favourites,
};
export const playlistsAction: TabAction = {
  type: TabKind.playlists,
};
