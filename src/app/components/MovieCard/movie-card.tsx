/* eslint-disable @next/next/no-img-element */
import { Movie } from '../../types/movie'
import StarRating from '../StarRating/star-rating'
import './movie-card.scss'
import { useModal } from '@/app/context/modal-context'

export interface Props {
  movie: Movie
}

export default function MovieCard(props: Props) {
  const movie = props.movie
  const { openModal } = useModal()

  function handleOpenDetails(movie: Movie) {
    openModal(movie)
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
    </div>
  )
}
