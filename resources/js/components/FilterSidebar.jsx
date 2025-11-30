import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const FilterSidebar = ({ searchQuery, setSearchQuery, minPrice, setMinPrice, maxPrice, setMaxPrice, globalMinPrice, globalMaxPrice }) => {

  // Ensure slider values stay within global min/max from backend data
  useEffect(() => {
    if (minPrice < globalMinPrice) setMinPrice(globalMinPrice);
    if (maxPrice > globalMaxPrice) setMaxPrice(globalMaxPrice);
  }, [globalMinPrice, globalMaxPrice]);

  return (
    <div className="card filter-container shadow-sm p-4 sticky-sidebar">

      {/* Search */}
      <div className="mb-4">
        <h6 className="text-uppercase text-muted fw-bold small mb-2">Search by city</h6>
        <div className="position-relative">
          <input
            type="text"
            className="form-control rounded-pill py-2 ps-5"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={18} className="position-absolute top-50 translate-middle-y text-gold" style={{ left: '15px' }} />
        </div>
      </div>

      <hr />

      {/* Numeric Price Filter */}
      <div className="mb-4">
        <h6 className="text-uppercase text-muted fw-bold small mb-2">Price Range</h6>

        <div className="d-flex justify-content-between mb-2">
          <span>EGP£{minPrice}</span>
          <span>EGP£{maxPrice}</span>
        </div>

        <input
          type="range"
          min={globalMinPrice}
          max={globalMaxPrice}
          step="0.01"
          value={minPrice}
          onChange={(e) => setMinPrice(parseFloat(e.target.value))}
          className="form-range mb-2"
        />

        <input
          type="range"
          min={globalMinPrice}
          max={globalMaxPrice}
          step="0.01"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
          className="form-range"
        />

        <div className="d-flex justify-content-between text-muted small fw-bold" style={{ fontSize: '0.7rem' }}>
          <span>Min</span>
          <span>Max</span>
        </div>

      </div>

    </div>
  );
};

export default FilterSidebar;

