export const APP_AUTH = 'APP_AUTH';

/**
 * App auth state change action
 */
export const appAuth = (authorized) => ({
  type: APP_AUTH,
  payload: {authorized},
});
