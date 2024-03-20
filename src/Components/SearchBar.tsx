import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBarProps } from './Types/GlobalTypes';



const SearchBar = ({ className }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <div className={className ? `search-bar ${className}` : "search-bar"}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search recipes..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

