import { createContext, Dispatch } from 'react';
import { State, TabAction } from '../types';

export const TabContext = createContext<State | null>(null);
export const TabDispatchContext = createContext<Dispatch<TabAction> | null>(
  null
);
