
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Packs2025() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const response = await fetch('/api/packs/2025');
      const data = await response.json();
      setFilms(data);
    };
    fetchFilms();
  }, []);

  return (
    <div>
      <h1>Santa Fe Film Festival 2025</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {films.map((film) => (
          <div key={film.slug} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <img src={film.thumbnailUrl} alt={film.title} style={{ width: '150px', height: 'auto' }} />
            <h3>{film.title}</h3>
            <Link to={`/stream/2025/${film.slug}`}>Watch Film</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packs2025;
