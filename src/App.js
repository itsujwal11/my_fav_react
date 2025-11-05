import { useState, useEffect } from 'react';
import './App.css';
import Greet from './Greet'

import JSXRules  from './JSXRules';
import MovieCard from './MovieCard'; // Corrected case
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com/?apikey=839f145c';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []); // Safeguard in case there's no Search field
  };

  useEffect(() => {
    searchMovies('Superman'); // Initial search
  }, []);

  return (

  
    <div className="app">
      <h1>Ujwal Shrestha Movie</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Fixed the change handler
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
          <JSXRules />
          <Greet />
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} /> // Added 'key' prop and corrected 'movieCard' to 'MovieCard'
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
          
        </div>
        
      )}
    </div>

    
  );
  
};
export default App;

{/*
  // import './App.css';
  // import React from 'react';
  // import { useState, useEffect } from 'react';

  // const Person = (props) => {
  //   return (
  //     <>
  //       <h1> Name: {props.name}</h1>
  //       <h2>Last Name: {props.LastName}</h2>
  //       <h2>Age : {props.age} </h2>
  //     </>
  //   );
  // };

  // const App = () => {
  //   const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     alert("You've changed the counter to " + counter);
  //     // setCounter(100);
  //   }, [counter]);

  //   // const name = 'ujwal';
  //   // const isNameShowing = false;
  //   return (
  //     <div className="App">
  //       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>- </button>
  //       <h1>{counter}</h1>
  //       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+ </button>

  //       {/* 
  //         <Person 
  //           name={'Ujwal'} 
  //           LastName={'stha'} 
  //           age={25} 
  //         />
  //         <Person 
  //           name={'Kiran'} 
  //           LastName={'stha'} 
  //           age={20} 
  //         />
  //         <Person />
  //         <Person />
  //         // We can call multiple times
  //       */}
  //     </div>
  //   );
  // };

  // export default App;
  
  // {/* <h1>Hello, {2 + 2}reacting {isNameShowing ? name : 'someone' }</h1> */}
  // {/* {name ? (
  //     <>
  //       <h1>{name}</h1>
  //     </>
  //   ) : (
  //     <>
  //       <h1>test </h1>
  //       <h2>There is no name</h2>
  //     </>
  //   )}
  // */}

