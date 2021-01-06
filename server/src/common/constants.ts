import { join } from 'path';

export const CLIENT_BUILD_PATH = join(__dirname, '../../../../client/build');

console.log('Client static files path:', CLIENT_BUILD_PATH);

export const ENV_FILE_PATH = '.env';

export const BLOG_MODEL = 'BLOG_MODEL';
export const CAREER_MODEL = 'CAREER_MODEL';
export const USER_MODEL = 'USER_MODEL';

// TODO: just a Mock
export const JWT_SECRET = 'secretKey';
