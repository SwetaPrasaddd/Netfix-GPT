// import { useParams } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* 
                MainContainer
                    -VideoBackground
                    -VideoTitle
                SecondaryContainer
                    -Movies*n 
                        -cards*n
            */}
        </div>
    );
};

export default Browse;