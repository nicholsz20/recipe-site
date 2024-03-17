// import React, { useState } from 'react';


import { useNavigate, useSearchParams } from 'react-router-dom';

import React, { useState } from 'react';
import './Home.css';





const Home = () => {
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
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleSearch}
                    placeholder="Search recipes..."
                />
                <button type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
