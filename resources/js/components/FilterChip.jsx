import React from 'react';

const FilterChip = ({ label, active, onClick, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`btn rounded-pill d-flex align-items-center gap-2 px-3 py-2 filter-btn ${active ? 'active' : ''}`}
  >
    {Icon && <Icon size={16} />}
    {label}
  </button>
);

export default FilterChip;