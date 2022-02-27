import axios from 'axios';
import { API_PATH } from '../../common/common.constants';

export const loadBlogList = async () => axios.get(`${API_PATH}/blog`);

export const loadBlog = async (id) => axios.get(`${API_PATH}/blog/${id}`);

export const createBlog = async (blog) => axios.post(`${API_PATH}/blog`, blog);

export const updateBlog = async (id, blog) => axios.put(`${API_PATH}/blog/${id}`, blog.toDto());
