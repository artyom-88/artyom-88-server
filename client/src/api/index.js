import axios from 'axios';

const REQUEST_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// TODO: add encryption or SSL
export const auth = async (username, password) => axios.post('/api/auth', { username, password }, REQUEST_CONFIG);
