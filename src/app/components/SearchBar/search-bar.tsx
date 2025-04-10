'use client';

import { useEffect, useState } from 'react';
import './search-bar.scss';
import { FaMagnifyingGlass } from "react-icons/fa6";

type Props = {
  onSearchChange?: (search: string) => void;
};

export default function SearchBar({ onSearchChange }: Props) {
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (onSearchChange) {
      onSearchChange(search);
    }
  }, [search, onSearchChange]); // Adiciona onSearchChange como dependência

  return (
    <div className="input-group">
      <div className="input-icon">
        <FaMagnifyingGlass />
      </div>
      <input
        type="text"
        className="input-field"
        placeholder="Pesquisar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
