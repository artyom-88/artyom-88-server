import { atom } from 'recoil';

export const blogListState = atom({
  key: 'blogListState',
  default: [],
});

export const blogItemState = atom({
  key: 'blogItemState',
  default: null,
});
