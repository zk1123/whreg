import React, { useState } from 'react';

export default function DeletePlaceForm() {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/placeedit/${id}`, {
        method: 'DELETE',
      });

      const result = await res.json();
      console.log(result);
      alert('Place deleted!');
      setId('');
    } catch (error) {
      console.error(error);
      alert('Error deleting place.');
    }
  };

  return (
    <div className="card mb-5">
      <div className="card-header text-white" id="delplccrd">Delete Place</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Place ID:</label>
            <input
              type="number"
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn w-100" id="delplcbtn">
            Delete Place
          </button>
        </form>
      </div>
    </div>
  );
}
