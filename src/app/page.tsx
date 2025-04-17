'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieList from './components/MovieList/movie-list'
import Navbar from './components/NavBar/navbar'
import { Movie } from './types/movie'

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [search, setSearch] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true) // novo estado

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true) // começar loading

      const endpoint =
        search.trim().length > 0
          ? 'https://api.themoviedb.org/3/search/movie'
          : 'https://api.themoviedb.org/3/discover/movie'

      const response = await axios.get(endpoint, {
        params: {
          api_key: '1e6e90943fd8f71405480a3b9f76ecd0',
          language: 'pt-BR',
          query: search,
        },
      })

      setMovies(response.data.results)
      setIsLoading(false) // terminar loading
    }

    fetchMovies()
  }, [search])

  return (
    <>
      <Navbar onSearchChange={setSearch} isLoading={isLoading} />
      <MovieList movies={movies} isLoading={isLoading} />
    </>
  )
}
