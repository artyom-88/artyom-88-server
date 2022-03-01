export const isServer = typeof window === 'undefined';

export const isClient = !isServer;

export const NODE_ENV = process.env.NODE_ENV;

export const isDev = NODE_ENV === 'development';

export const PORT = process.env.PORT || 3000;

if (isDev) {
  console.log('isServer', isServer);
  console.log('NODE_ENV', NODE_ENV);
  console.log('PORT', PORT);
}
