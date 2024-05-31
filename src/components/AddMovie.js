import React, { useState } from 'react';
import './AddMovie.css';

const AddMovie = ({ onAddMovie }) => {
    const [title, setTitle] = useState('');
    const [openingText, setOpeningText] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        // Create a new movie object
        const newMovie = {
            title: title,
            openingText: openingText,
            releaseDate: releaseDate,
        };

        // Pass the new movie object to the parent component
        onAddMovie(newMovie);

        // Clear the input fields
        setTitle('');
        setOpeningText('');
        setReleaseDate('');
    };

    return (
        <div className='container'>
            <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="openingText">Opening Text</label>
                <textarea
                    id="openingText"
                    rows="5"
                    value={openingText}
                    onChange={(event) => setOpeningText(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="releaseDate">Release Date</label>
                <input
                    type="date"
                    id="releaseDate"
                    value={releaseDate}
                    onChange={(event) => setReleaseDate(event.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Movie</button>
        </form>
        </div>
    );
};

export default AddMovie;
