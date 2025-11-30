import React, { useState, useEffect } from 'react';
import TripCard from '../components/Tripcard';

export default function MyTrips({ onNavigate }) {
  const [places, setPlaces] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const filters = JSON.parse(localStorage.getItem("tripFilters"));

    if (!filters) return;

    fetch('/api/find-trip', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filters)
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch trips");
        return res.json();
      })
      .then(data => {
        console.log("Fetched trips:", data);

        // ← TAKE THE places ARRAY from the object
        setPlaces(data.places || []);
        setTotalSpent(data.total_spent || 0);
        setRemaining(data.remaining || 0);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-5">

      <div>
      <p style={{color: "#000000", fontWeight: "bold"}}>Spent: <span style={{color: "#b30000", fontWeight: "bold"}}>{totalSpent}</span>EGP£</p>
      <p style={{color: "#000000", fontWeight: "bold"}}>Remaining: <span style={{color: "#b30000", fontWeight: "bold"}}>{remaining}</span>EGP£</p>
      </div>
      
      {places.length > 0 ? (
        places.map(place => <TripCard key={place.id} place={place} />)
      ) : (
        <div className="text-center py-5">
          <h4>No trips found</h4>
        </div>
      )}

      {/* Empty paragraph for your sentence */}
      <p style={{ textAlign: 'center', marginTop: '2rem', color: "#b30000", fontWeight: "bold" }}>
        Note: All prices listed above are for tourists and may vary slightly depending on the season or ticket type. Each attraction may offer multiple ticket tiers based on the activities or areas included. Prices generally stay consistent, with only minor seasonal variations.
      </p>
    </div>
  );
}
