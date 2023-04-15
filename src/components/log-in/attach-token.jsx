import axios from 'axios';

const instance = axios.create();

// Attach token to request headers
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

//////////////////////////////////////////////////////////
// Define a function to fetch with token
const fetchWithToken = (url, options) => {
  // Get token from wherever you store it
  const token = getTokenFromSomeWhere();

  // Attach token to request headers
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  // Fetch with modified options
  return fetch(url, options);
};

// Usage example
const apiUrl = 'https://api.example.com/data';
const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

fetchWithToken(apiUrl, requestOptions)
  .then((response) => {
    // Handle response
  })
  .catch((error) => {
    // Handle error
  });
