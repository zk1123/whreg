import React from 'react';
import { MapPin, Ticket, ExternalLink } from 'lucide-react';

function DestinationCard({ place }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100 border-0 shadow-custom card-hover">

        {/* IMAGE */}
        <div className="position-relative" style={{ height: '220px' }}>
          <img
            src={place.image_url}
            className="card-img-top w-100 h-100 object-fit-cover"
            alt={place.name}
          />

          <div className="card-overlay position-absolute bottom-0 start-0 w-100 p-3 text-white">
            <h5 className="card-title mb-1 fw-bold">{place.name}</h5>

           
            <p className="card-text small text-teal d-flex align-items-center gap-1">
              <MapPin size={14} /> City ID: {place.city_id}
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="card-body d-flex flex-column justify-content-between">

          {/* PRICE */}
          <div className="d-flex justify-content-between align-items-center mb-3 p-2 rounded bg-light-beige">
            <div className="d-flex align-items-center gap-1 text-brown fw-bold small">
              <Ticket size={16} className="text-teal" />
              {place.price == 0 || place.price === "0.00" ? "Free" : `${place.price} EGP`}
            </div>

            {/* GOOGLE MAPS LINK */}
            <a
              href={place.google_maps_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal d-flex align-items-center gap-1 small fw-bold"
            >
              Maps <ExternalLink size={14} />
            </a>
          </div>

          {/* DESCRIPTION */}
          <p className="card-text text-brown small mb-4">
            {place.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
