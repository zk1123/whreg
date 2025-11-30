import React, { useState, useEffect } from 'react';

import DestinationCard from '../components/DestinationCard';
import FilterSidebar from '../components/FilterSidebar';
import '/public/css/Destinations.css';

export default function Destinations({ onNavigate }) {
  const [places, setPlaces] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000); // default max, can adjust later

  const globalMinPrice = places.length ? Math.min(...places.map(p => p.price)) : 0;
  const globalMaxPrice = places.length ? Math.max(...places.map(p => p.price)) : 10000;



  const [searchQuery, setSearchQuery] = useState('');
  const [activeCity, setActiveCity] = useState('');

  // === FETCH PLACES ===
  useEffect(() => {
    fetch("/api/destinations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(data => {
        setPlaces(data);
        setFiltered(data);
      })
      .catch(err => console.log(err));
  }, []); // <-- you were missing this closing )

  // === FILTERING ===
  useEffect(() => {
  let result = places;

  // Search filter
  if (searchQuery) {
    result = result.filter(p =>
      p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Price filter
  result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

  setFiltered(result);
}, [places, searchQuery, minPrice, maxPrice]);

  return (
    <div className="d-flex flex-column min-vh-100">

      <header className="hero-section text-center mb-5">
        <div className="container">
          <h2 className="display-4 fw-bold hero-title mb-3" style={{color: "#c2904a"}}>EXPLORE ATTRACTIONS</h2>
          <p className="lead hero-subtitle mb-0">"From ancient wonders to hidden gems"</p>
        </div>
      </header>

      <main className="container flex-grow-1" style={{ marginTop: '-3rem', position: 'relative', zIndex: 20 }}>
        <div className="row g-4">

          {/* MAIN GRID */}
          <div className="col-12 col-md-8 col-lg-9">
            <div className="row g-4">
              {filtered.length > 0 ? (
                filtered.map(place => (
                  <DestinationCard key={place.id} place={place} />
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <div className="display-1 mb-3">🏜️</div>
                  <h3 className="text-brown fw-bold">No destinations found</h3>
                </div>
              )}
            </div>
          </div>

          {/* FILTER SIDEBAR (disabled for now) */}
          
          <div className="col-12 col-md-4 col-lg-3">
             <FilterSidebar
               searchQuery={searchQuery}
               setSearchQuery={setSearchQuery}
               minPrice={minPrice}
               setMinPrice={setMinPrice}
               maxPrice={maxPrice}
               setMaxPrice={setMaxPrice}
               globalMinPrice={globalMinPrice}
               globalMaxPrice={globalMaxPrice}
             />
            </div>
         

        </div>
      </main>
    </div>
  );
}
