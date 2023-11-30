import axios from 'axios';


const TDMB_API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_APP_TMDB_APY_KEY,
    language: 'es-ES',
  }
});

const TDMB_PATHS = {
  trending: "/trending/all/week",
};