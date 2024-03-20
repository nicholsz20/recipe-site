// import React, { useState } from 'react';

import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Home.css';
import SearchBar from './SearchBar';

interface ShowNav {
    showNav: boolean
}




const Home = ({showNav}: ShowNav) => {
    // State for search input, s
    const [searchInput, setSearchInput] = useState('');
    


    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // Function to handle search submit
     const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
        
         // You would implement search functionality here
         console.log('Searching for:', searchInput);
         setSearchParams({ q: e.target.value });
     };

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchInput.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`)
        }
     }

    

    return (
        <div>
            <div className="hero">

                <SearchBar className={!showNav ? 'hero-search' : 'hero-search hidden'} />

            </div>
        </div>
    );
};

export default Home;
