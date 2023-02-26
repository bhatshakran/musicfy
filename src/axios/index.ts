import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://shazam.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_KEY}`,
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
});
