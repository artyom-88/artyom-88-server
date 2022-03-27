export const isServer = typeof window === 'undefined';

export const isClient = !isServer;

export const isDev = process.env.NODE_ENV === 'development';

export const PORT = process.env.PORT || 3000;

export const JWT_SECRET = process.env.JWT_SECRET;

if (isDev) {
  console.log('isServer', isServer);
  console.log('isDev', isDev);
  console.log('PORT', PORT);
}
