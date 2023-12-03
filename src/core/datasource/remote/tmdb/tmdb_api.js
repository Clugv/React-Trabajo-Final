import axios from 'axios';


export const tmdb_api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_APP_TMDB_APY_KEY,
    language: 'es-ES',
  }
});

export const tmdb_paths = {
  //trending: "/trending/all/week",
  movies: {
    popular: "/movie/popular",
    top_rates: "/movie/top_rate",
    upcoming: "/movie/upcoming",
  },
  tv: {
    popular: "/tv/popular",
    top_rates: "/tv/top_rate",
    airing_today: "/tv/airing_today",
  }, 
  images: {
    posters: {
      sizes: {
        w92: "/w92",
        w154: "/w154",
        w185: "/w185",
        w342: "/w342",
        w500: "/w500",
        w780: "/w780",
        original: "/original",
      },
      url: "https://image.tmdb.org/t/p",
    },
    backdrop: {
      sizes: {
        w300: "/w300",
        w780: "/w780",
        w1280: "/w1280",
        original: "/original",
      },
      url: "https://image.tmdb.org/t/p",
    }
  }
};