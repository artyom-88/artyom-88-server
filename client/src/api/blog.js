import axios from 'axios';
import { API_PATH } from '../const';

export const loadBlogList = async () => axios.get(`${API_PATH}/blog`);

export const loadBlog = async (id) => axios.get(`${API_PATH}/blog/${id}`);

export const createBlog = async (item) => axios.post(`${API_PATH}/blog`, item);

export const updateBlog = async (id, item) => axios.put(`${API_PATH}/blog/${id}`, item);
