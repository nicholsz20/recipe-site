import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        navigate(`/search/${searchInput}`);
    };

    return (
        <div>
            <div className="hero">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search recipes..."
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Home;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//     const [searchInput, setSearchInput] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = () => {
//         // Navigate to the search results page with the search query
//         navigate(`/search/${searchInput}`);
//     };

//     return (
//         <div>
//             <div className="hero">
//                 <input
//                     type="text"
//                     value={searchInput}
//                     onChange={(e) => setSearchInput(e.target.value)}
//                     placeholder="Search recipes..."
//                 />
//                 <button onClick={handleSearch}>Search</button>
//             </div>
//         </div>
//     );
// };

// export default Home;




// // import React, { useState } from 'react';

// import './Home.css';


// const Home = () => {
//     // State for search input
//     // const [searchInput, setSearchInput] = useState('');

//     // Function to handle search submit
//     // const handleSearch = () => {
//     //     // You would implement search functionality here
//     //     console.log('Searching for:', searchInput);
//     // };

//     return (
//         <div>
//             <div className="hero">
//                 <input
//                     type="text"
//                     // value={searchInput}
//                     // onChange={(e) => setSearchInput(e.target.value)}
//                     placeholder="Search recipes..."
//                 />
//                 <button>Search</button>
//             </div>
//         </div>
//     );
// };

// export default Home;
