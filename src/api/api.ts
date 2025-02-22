import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Vite environment variable

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic API request function
const apiRequest = async <T>(url: string, method: 'GET' | 'POST' = 'GET', data?: any): Promise<T> => {
  try {
    const response = await apiClient.request<T>({
      url,
      method,
      data,
    });
    return response.data;
  } catch (error) {
    console.error(`API Error: ${method} ${url}`, error);
    throw error;
  }
};

// Fetch workspaces
export const fetchWorkSpacesAPI = async () => {
  return apiRequest('data.json');
};
