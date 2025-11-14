export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000';

export const API_ENDPOINTS = {
  API_BASE_URL: API_BASE_URL,
  USERS: `${API_BASE_URL}/users`,
  AUTH_LOGIN: `${API_BASE_URL}/login`,
  AUTH_REGISTER: `${API_BASE_URL}/register`,
  REFRESH: `${API_BASE_URL}/refresh`,
};

export default API_ENDPOINTS;