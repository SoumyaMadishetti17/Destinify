import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://destinify.onrender.com/api/", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor to Add JWT Token
apiClient.interceptors.request.use( 
  (config) => { 
    const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor to Handle Errors
apiClient.interceptors.response.use(
  (response) => { return response},
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Token might have expired.");
      // Optional: Redirect to login page or perform token refresh
    }
    return Promise.reject(error);
  }
);

export const apiService = {
  get: (url) => apiClient.get(url),
  post: (url, data) => {
    
    return apiClient.post(url, data)
  },
  put: (url, data) => apiClient.put(url, data),
  delete: (url) => apiClient.delete(url),
};

export default apiClient;
