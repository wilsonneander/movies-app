/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Movie } from '../../types/movie'
import StarRating from '../StarRating/star-rating'
import './movie-card.scss'

export interface Props {
  movie: Movie
}

export default function MovieCard(props: Props) {
  const movie = props.movie
  const [openModal, setOpenModal] = useState(false)
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null)

  function handleOpenDetails(movie: Movie) {
    setOpenModal(true)
    setMovieDetails(movie)
  }

  return (
    <div className="movie-card">
      <li>
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="movie-infos">
          <p className="movie-title">{movie.title}</p>
          {movie.vote_average > 0 && (
            <StarRating rating={movie.vote_average} />
          )}
          <div className="hidden-content">
            {movie.overview && (
              <p className="description">
                {movie.overview.length > 100
                  ? `${movie.overview.substring(0, 100)}...`
                  : movie.overview}
              </p>
            )}
            <button
              className="btn-default"
              onClick={() => handleOpenDetails(movie)}
            >
              Ver mais
            </button>
          </div>
        </div>
      </li>

      {openModal && movieDetails && (
        <div className="modal-overlay" onClick={() => setOpenModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-banner">
              <img
                src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
              <div className="modal-gradient" />
              <div className="modal-header-content">
                <h1>{movieDetails.title}</h1>
                <div className="modal-buttons">
                  <button className="btn-play">▶ Continuar</button>
                  <button className="btn-like">👍</button>
                </div>
              </div>
            </div>
            <div className="modal-description-area">
              <p className="modal-overview">{movieDetails.overview}</p>
              <div className="modal-meta">
                <p>
                  <strong>Ano:</strong>{' '}
                  {new Date(movieDetails.release_date).getFullYear()}
                </p>
                <p>
                  <strong>Idioma:</strong> {movieDetails.original_language}
                </p>
                <p>
                  <strong>Popularidade:</strong> {movieDetails.popularity}
                </p>
                <p>
                  <strong>Votos:</strong> {movieDetails.vote_count}
                </p>
                <div>
                  <strong>Avaliação:</strong>{' '}
                  <StarRating rating={movieDetails.vote_average} />
                </div>
              </div>
            </div>
            <button
              className="modal-close"
              onClick={() => setOpenModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
