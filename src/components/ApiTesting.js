import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ApiTesting.css';

const ApiTesting = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const retryInterval = useRef(null);

    const fetchMovies = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://swapi.dev/api/films');
            if (!response.ok) {
                throw new Error('Something went wrong Retrying...');
            }
            const data = await response.json();
            const transferredMovies = data.results.map(movie => ({
                id: movie.episode_id,
                title: movie.title,
                openingText: movie.opening_crawl,
                releaseDate: movie.release_date,
            }));
            setMoviesList(transferredMovies);
        } catch (error) {
            setError(error.message);
            retryInterval.current = setInterval(fetchMovies, 5000);
        }
        setIsLoading(false);
    };

    const fetchMovieHandler = useCallback(fetchMovies, []);

    useEffect(() => {
        fetchMovieHandler();
        return () => {
            clearInterval(retryInterval.current);
        };
    }, [fetchMovieHandler]);

    const cancelRetryHandler = () => {
        clearInterval(retryInterval.current);
        setError('');
        setIsLoading(false);
    };

    if (error !== '') {
        return (
            <div className="api-testing">
                <p>{error}</p>
                <button onClick={cancelRetryHandler} className="cancel-button">Cancel</button>
            </div>
        );
    }

    if (isLoading) return <div className='loading'><h2>Loading...</h2></div>;

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
