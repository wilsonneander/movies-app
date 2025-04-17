// components/NavBar/navbar.tsx
import React from 'react'
import SearchBar from '../SearchBar/search-bar'
import './navbar.scss'

type NavbarProps = {
  onSearchChange?: (search: string) => void
  isLoading?: boolean
}

export default function Navbar({ onSearchChange, isLoading }: NavbarProps) {
  return (
    <nav className={`navbar ${isLoading ? 'navbar--hidden' : ''}`}>
      <h1 className="page-title">Filmes</h1>
      {onSearchChange && <SearchBar onSearchChange={onSearchChange} />}
    </nav>
  )
}
