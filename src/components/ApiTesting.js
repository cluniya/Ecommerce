import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ApiTesting.css';
import AddMovie from './AddMovie';

const ApiTesting = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const retryInterval = useRef(null);

    const addMovieHandler = async (movieData) => {
        try {
            const response = await fetch('https://ecommerce-http-513d4-default-rtdb.firebaseio.com/data.json', {
                method: 'POST',
                body: JSON.stringify(movieData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to add movie.');
            }
            const data = await response.json();
            console.log(data);

            fetchMovieHandler();
        } catch (error) {
            console.log(error);
        }
    };

    const fetchMovies = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://ecommerce-http-513d4-default-rtdb.firebaseio.com/data.json');
            if (!response.ok) {
                throw new Error('Something went wrong... Retrying');
            }
            const data = await response.json();

            const transferredMovies = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));

            setMoviesList(transferredMovies);

            clearInterval(retryInterval.current);
            setError('');
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

    const deleteMovieHandler = async (id) => {
        try {
            const response = await fetch(`https://ecommerce-http-513d4-default-rtdb.firebaseio.com/data/${id}.json`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete movie.');
            }
            setMoviesList(prevMovies => prevMovies.filter(movie => movie.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

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
        <>
            <AddMovie onAddMovie={addMovieHandler} />
            <div className="api-testing">
                <h2>Movies</h2>
                <button onClick={fetchMovieHandler} className="fetch-button">Fetch Movies</button>
                <ul className="movies-list">
                    {moviesList.map(movie => (
                        <li key={movie.id} className="movie-item">
                            <h3>{movie.title}</h3>
                            <p>{movie.openingText}</p>
                            <p><strong>Release Date:</strong> {movie.releaseDate}</p>
                            <button onClick={() => deleteMovieHandler(movie.id)} className="delete-button">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ApiTesting;
