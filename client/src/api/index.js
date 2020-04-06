import axios from 'axios';

const PATH = 'http://localhost:3000/api';

// TODO: add encryption or SSL
export const auth = async (username, password) =>
  axios.post(
    `${PATH}/auth`,
    {
      username,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

export const user = async (accessToken) =>
  axios.get(`${PATH}/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const loadBlogList = async () => axios.get(`${PATH}/blog`);

export const loadBlog = async (id) => axios.get(`${PATH}/blog/${id}`);

export const loadCareerList = async () => axios.get(`${PATH}/career`);

export const loadCareer = async (id) => axios.get(`${PATH}/career/${id}`);
