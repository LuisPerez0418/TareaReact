import React, { useState, useEffect } from 'react';

export const CuartoComponente = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d230199873967dcbe0d4b8cf8d5af604&hash=70ae1e5dd4d9c8518de5ded4f8985c5c'
        );
        const data = await response.json();
        setCharacters(data.data.results);    
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Marvel Characters</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </div>
      ))}
    </div>
  );
};
