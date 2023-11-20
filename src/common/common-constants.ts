export const isServer = typeof window === 'undefined';

export const isDev = process.env.NODE_ENV === 'development';

export const PORT = process.env.PORT || 3000;

if (isDev) {
  console.log('isServer', isServer);
  console.log('isDev', isDev);
  console.log('PORT', PORT);
}
