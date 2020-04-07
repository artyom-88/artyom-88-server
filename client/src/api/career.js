import axios from 'axios';
import { API_PATH } from '../const';

export const loadCareerList = async () => axios.get(`${API_PATH}/career`);

export const loadCareer = async (id) => axios.get(`${API_PATH}/career/${id}`);
