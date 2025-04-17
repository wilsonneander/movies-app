/* eslint-disable @next/next/no-img-element */
'use client'

import { useModal } from "@/app/context/modal-context";
import StarRating from "../StarRating/star-rating";
import './movie-modal.scss'

export default function MovieModal() {
  const { isOpen, closeModal, movieData } = useModal()

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => closeModal()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-banner">
          <img
            src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
            alt={movieData?.title}
          />
          <div className="modal-gradient" />
          <div className="modal-header-content">
            <h1>{movieData?.title}</h1>
            <div className="modal-buttons">
              <button className="btn-play">▶ Continuar</button>
              <button className="btn-like">👍</button>
            </div>
          </div>
        </div>
        <div className="modal-description-area">
          <p className="modal-overview">{movieData?.overview}</p>
          <div className="modal-meta">
            <p>
              <strong>Ano:</strong>{' '}
              {new Date(movieData?.release_date || '').getFullYear()}
            </p>
            <p>
              <strong>Idioma:</strong> {movieData?.original_language}
            </p>
            <p>
              <strong>Popularidade:</strong> {movieData?.popularity}
            </p>
            <p>
              <strong>Votos:</strong> {movieData?.vote_count}
            </p>
            <div>
              <strong>Avaliação:</strong>{' '}
              <StarRating rating={movieData?.vote_average || 0} />
            </div>
          </div>
        </div>
        <button
          className="modal-close"
          onClick={() => closeModal()}
        >
          ×
        </button>
      </div>
    </div>
  )
}