import React, { useState } from 'react';

export default function AddCityForm() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/addcity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    console.log(await res.json());
    alert('City added!');
    setName('');
  };

  return (
    <div className="card mb-4">
      <div className="card-header text-white" id="addcitycrd">Add New City</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold fs-5">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn w-100 fw-300 fs-5" id="addcitybtn">
            Add City
          </button>
        </form>
      </div>
    </div>
  );
}
