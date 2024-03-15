// import React, { useState } from 'react';

import './Home.css';


const Home = () => {
    // State for search input
    // const [searchInput, setSearchInput] = useState('');

    // Function to handle search submit
    // const handleSearch = () => {
    //     // You would implement search functionality here
    //     console.log('Searching for:', searchInput);
    // };

    return (
        <div>
            <div className="hero">
                <input
                    type="text"
                    // value={searchInput}
                    // onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search recipes..."
                />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Home;
