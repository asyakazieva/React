import { StoreState } from '../index';

export const selectVisible = (state: StoreState) => state.profile.visible;

export const selectName = (state: StoreState) => state.profile.name;
