//Llamadas a la api 
import { tmdb_api, tmdb_paths } from "../../../core/datasource/remote/tmdb/tmdb_api";

export const tmdbMoviesTvAdapter = ( response ) => {
    
    const { results } = response;

    return results.map((item) => ({
        id: item.id,
        title: item.title || item.name,
        poster: `${tmdb_paths.images.posters.url}${tmdb_paths.images.posters.sizes.original}${item.poster_path}`,
        backdrop: `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.original}${item.backdrop_path}`,
        description: item.overview,
        rating: item.vote_average,
        video: item.video,
    }));

};

export const getPopularMovies = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.popular);
    const adapted = tmdbMoviesTvAdapter(data);
    return adapted;
};

export const getTopRatedMovies = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.top_rate);
    const adapted = tmdbMoviesTvAdapter(data);
    return adapted;
};

export const getUpComingMovies = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.upcoming);
    const adapted = tmdbMoviesTvAdapter(data);
    return adapted;
};