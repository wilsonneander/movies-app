// components/NavBar/navbar.tsx
import React from 'react'
import SearchBar from '../SearchBar/search-bar'
import './navbar.scss'

type NavbarProps = {
  onSearchChange?: (search: string) => void
}

export default function Navbar({ onSearchChange }: NavbarProps) {
  return (
    <nav className="navbar">
      <h1 className="page-title">Filmes</h1>
      {onSearchChange && <SearchBar onSearchChange={onSearchChange} />}
    </nav>
  )
}
