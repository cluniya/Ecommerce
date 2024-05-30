import React, { useState } from 'react';
import './ApiTesting.css';

const ApiTesting = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    
    const fetchMovieHandler = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://swapi.dev/api/films');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const transferredMovies = data.results.map(movie => ({
                id: movie.episode_id,
                title: movie.title,
                openingText: movie.opening_crawl,
                releaseDate: movie.release_date,
            }));
            if(response.ok){
                setIsLoading(false);
            }
            setMoviesList(transferredMovies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    if(isLoading) return <div className='loading'><h2>Loading...</h2></div>;
    
    return (
        <div className="api-testing">
            <h2>Movies</h2>
            <button onClick={fetchMovieHandler} className="fetch-button">Fetch Movies</button>
            <ul className="movies-list">
                {moviesList.map(movie => (
                    <li key={movie.id} className="movie-item">
                        <h3>{movie.title}</h3>
                        <p>{movie.openingText}</p>
                        <p><strong>Release Date:</strong> {movie.releaseDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ApiTesting;
