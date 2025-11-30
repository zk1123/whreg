import React from 'react';

const TripCard = ({ place }) => {
  return (
    <div
      className="card mb-4"
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        backgroundColor: "#fffbf2",
        border: "solid 4px #d6a55a",
      }}
    >
      {/* Image */}
      <img
        src={place.image_url}
        alt={place.name}
        style={{ width: '250px', objectFit: 'cover' }}
      />

      {/* Card content */}
      <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{place.name}</h5>
          <p style={{ marginBottom: '0.5rem', color: '#555' }}>{place.description}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <span style={{fontWeight: "bold"}}>Price:  <span style={{ fontWeight: 'bold', color: '#b30000' }}>EGP£{parseFloat(place.price).toFixed(2)}</span> </span>
          <a
            href={place.google_maps_link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#fff',
              backgroundColor: '#4A9D9C',
              padding: '0.4rem 0.8rem',
              borderRadius: '4px',
              fontSize: '0.9rem'
            }}
          >
            View on Map
          </a>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
