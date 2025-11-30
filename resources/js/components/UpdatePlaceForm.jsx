import React, { useState } from 'react';

export default function UpdatePlaceForm() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    image_url: '',
    price: '',
    city_id: '',
    google_maps_link: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const { id, ...updates } = formData;
      const filtered = Object.fromEntries(
      Object.entries(updates).filter(([_, value]) => value !== "")
      );
      const res = await fetch(`/api/placeedit/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filtered),
      });

      const result = await res.json();
      console.log(result);
      alert('Place updated!');
      setFormData({ id: '', name: '', description: '', image_url: '', price: '', city_id: '', google_maps_link: '' });
    } catch (error) {
      console.error(error);
      alert('Error updating place.');
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-warning text-dark">Update Place</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Place ID:</label>
            <input
              type="number"
              id="id"
              className="form-control"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">New Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">New Description:</label>
            <textarea
              id="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

           <div className="mb-3">
            <label className="form-label">Photo URL:</label>
            <input
              type="text"
              id="image_url"
              className="form-control"
              value={formData.image_url}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">New Price:</label>
            <input
              type="number"
              id="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div class="mb-3">
           <label for="google_maps_link" class="form-label">Google Maps Link</label>
            <input
              type="url"
              className="form-control"
              id="google_maps_link"
              name="google_maps_link"
              placeholder="https://maps.google.com/..."
              value={formData.google_maps_link}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">New City ID:</label>
            <input
              type="number"
              id="city_id"
              className="form-control"
              value={formData.city_id}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Update Place
          </button>
        </form>
      </div>
    </div>
  );
}
