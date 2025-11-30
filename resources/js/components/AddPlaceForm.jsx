import React, { useState } from 'react';

export default function AddPlaceForm() {
  const [formData, setFormData] = useState({
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
      const res = await fetch('/api/placeedit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log(result);
      alert('Place added!');
      setFormData({ name: '', description: '', image_url: '', price: '', city_id: '', google_maps_link: '', });
    } catch (error) {
      console.error(error);
      alert('Error adding place.');
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header text-white" id="addplccrd">Add New Place</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              id="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              required
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
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price:</label>
            <input
              type="number"
              id="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
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
              required
              value={formData.google_maps_link}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">City ID:</label>
            <input
              type="number"
              id="city_id"
              className="form-control"
              value={formData.city_id}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn w-100" id="addplcbtn">
            Add Place
          </button>
        </form>
      </div>
    </div>
  );
}
