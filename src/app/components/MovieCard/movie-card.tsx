/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Movie } from '../../types/movie';
import StarRating from '../StarRating/star-rating';
import "./movie-card.scss";

export interface Props {
    movie: Movie
}

export default function MovieCard(props: Props) {
    const movie = props.movie;
    const [openModal, setOpenModal] = useState(false);
    const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

    function handleOpenDetails(movie: Movie) {
        setOpenModal(true);
        setMovieDetails(movie);
    }

    return (
        <div className="movie-card">
            <li>
                <div className="movie-poster">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.title} />
                </div>
                <div className="movie-infos">
                    <p className="movie-title">
                        {movie.title}
                    </p>
                    {movie.vote_average > 0 &&
                        <StarRating
                            rating={movie.vote_average} />
                    }
                    <div className='hidden-content'>
                        {movie.overview &&
                            <p className='description'>
                                {movie.overview.length > 100
                                    ? `${movie.overview.substring(0, 100)}...`
                                    : movie.overview}
                            </p>
                        }
                        <button className="btn-default" onClick={() => handleOpenDetails(movie)}>
                            Ver mais
                        </button>
                    </div>
                </div>
            </li>
            {openModal && movieDetails && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-image">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                                alt={movieDetails.title}
                            />
                        </div>
                        <div className="modal-details">
                            <div className="modal-header">
                                <h2>{movieDetails.title}</h2>
                                <button className="close-button" onClick={() => setOpenModal(false)}>
                                    &times;
                                </button>
                            </div>
                            <div className="modal-info">
                                <p><strong>Release Year:</strong> {new Date(movieDetails.release_date).getFullYear()}</p>
                                <p><strong>Rating:</strong> <StarRating rating={movieDetails.vote_average} /></p>
                            </div>
                            <p className="modal-description">{movieDetails.overview}</p>
                            <div className="modal-extra-info">
                                <p><strong>Original Title:</strong> {movieDetails.original_title}</p>
                                <p><strong>Language:</strong> {movieDetails.original_language}</p>
                                <p><strong>Popularity:</strong> {movieDetails.popularity}</p>
                                <p><strong>Vote Count:</strong> {movieDetails.vote_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}