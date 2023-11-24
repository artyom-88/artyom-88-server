import * as process from 'process';

export const isServer = typeof window === 'undefined';
export const isDev = process.env.NODE_ENV === 'development';
export const PROTOCOL = (isServer ? global.location?.protocol : window.location?.protocol) ?? 'http';
export const HOST = (isServer ? global.location?.hostname : window.location?.hostname) ?? 'localhost';
export const PORT = process.env.PORT || 3000;
// protocol comes with ":" on client side
export const API_URL =
  process.env.API_URL ?? (isServer ? `${PROTOCOL}://${HOST}:${PORT}/api` : `${PROTOCOL}//${HOST}:${PORT}/api`);
// routes
export const BLOG_PAGE_ID = 'blog';
export const BLOG_PAGE_URL = `/${BLOG_PAGE_ID}`;
export const CAREER_PAGE_ID = 'career';
export const CAREER_PAGE_URL = `/${CAREER_PAGE_ID}`;
export const LOGIN_PAGE_ID = 'login';
export const LOGIN_PAGE_URL = `/${LOGIN_PAGE_ID}`;

if (isDev) {
  console.log('isServer', isServer);
  console.log('isDev', isDev);
  console.log('PROTOCOL', PROTOCOL);
  console.log('HOST', HOST);
  console.log('PORT', PORT);
}

console.log('API_URL', API_URL);
