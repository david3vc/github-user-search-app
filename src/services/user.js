import axios from 'axios';
import { API_GITHUB_URL } from './base';

export const getUser = async username => {
  const response = await axios.get(`${API_GITHUB_URL}/users/${username}`);
  return response.data;
}
