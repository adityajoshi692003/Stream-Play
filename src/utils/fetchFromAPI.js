import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      ...options,
      params: {
        part: 'snippet',
        maxResults: '200',
        ...params
      }
    });
    console.log('API Response:', response.data);  // Log the full response for debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};