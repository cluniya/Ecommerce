import React, { useState } from 'react';
import './ApiTesting.css';

const ApiTesting = () => {
    const [moviesList, setMoviesList] = useState([]);
    
    const fetchMovieHandler = () => {
        fetch('https://swapi.dev/api/films')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const transferredMovies = data.results.map(movie => {
                    return {
                        id: movie.episode_id,
                        title: movie.title,
                        openingText: movie.opening_crawl,
                        releaseDate: movie.release_date,
                    };
                });
                setMoviesList(transferredMovies);
            });
    };
    
    console.log(moviesList);

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
