import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    //fetch data from TMDB API and update store
    const dispatch = useDispatch();

    // const getPopularMovies = useSelector(
    //     (store) => store.movies.nowPlayingMovies
    // );
    const getPopularMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular',
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json.results);
        dispatch(addPopularMovies(json.results));
    };
    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopularMovies;