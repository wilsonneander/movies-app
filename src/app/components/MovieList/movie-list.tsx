'use client';

import React, { useEffect, useState } from 'react';
import "./movie-list.scss";
import { Movie } from '../../types/movie';
import MovieCard from '../MovieCard/movie-card';

type Props = {
  movies?: Movie[];
};

export default function MovieList({ movies = [] }: Props) {
  const [showContent, setShowContent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 1500);

    return () => clearTimeout(timer);
  }, [movies]);

  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <div className="loader-container"></div>
        </div>
      )}

      <ul className={`movie-list ${showContent ? 'fade-in' : 'content-hidden'}`}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul>
    </>
  );
}
