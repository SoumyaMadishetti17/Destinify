import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://fir-d833d-default-rtdb.firebaseio.com/', // Replace with your API base URL
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export const apiService = {
    get: (url) => apiClient.get(url),
    post: (url, data) => apiClient.post(url, data),
    put: (url, data) => apiClient.put(url, data),
    delete: (url) => apiClient.delete(url),
  };
  
  export default apiClient;