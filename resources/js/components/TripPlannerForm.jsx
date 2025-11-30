import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TravelPlanner({onNavigate}) {

  const citiesList = [
  { id: 1, name: "Cairo" },
  { id: 2, name: "Giza" },
  { id: 3, name: "Alexandria" },
  { id: 4, name: "Luxor" },
  { id: 5, name: "Aswan" },
  { id: 6, name: "New Adminstrative Capital" },
  { id: 7, name: "Fayoum" },
  { id: 8, name: "Sharm El Sheikh" },
  { id: 9, name: "Saint Catherine" },
  { id: 10, name: "Siwa Oasis" },
  { id: 11, name: "Damietta" },
  { id: 12, name: "Qena" },
  { id: 13, name: "Sohag" },
  { id: 14, name: "Mansoura" },
  { id: 15, name: "Port Said" },
];

  const [cities, setCities] = useState([]);

  const handleCityToggle = (id) => {
  setCities((prev) =>
    prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
  );
};

  const handleCityChange = (e) => {
    const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setCities(selected);
  }

  const [formData, setFormData] = useState({
    budget: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.budget || cities.length === 0) {
      alert("Please select both budget and city.");
      return;
    }

    const payload = {
      budget : formData.budget,
      cities : cities,
    }

    try {
      const response = await fetch("/api/find-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if(!response.ok){
          const text = await response.text();
          console.error("Error: ", text);
          alert("Server Error.");
          return;
      }

      const result = await response.json();
      console.log(result);
      alert("Data submitted successfully!");

      localStorage.setItem("tripFilters", JSON.stringify(payload));

      onNavigate('mytrips');

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error connecting to the server.");
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f0f0f0",
        minHeight: "40vh",
      }}
    >

      {/* Card Form */}
      <div
        className="planner-card card-shadow mx-auto mt-4 p-4"
        style={{
          backgroundColor: "#fffef6",
          border: "2px solid #dca878",
          borderRadius: "10px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
          maxWidth: "600px",
        }}
      >
        <h2
        className="text-center mb-4"
          style={{
            textAlign: "center",
            color: "#b30000",
            fontWeight: "700",
            marginBottom: "25px",
          }}
        >
          Explore Your Egyptian Adventure
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="budget" className="form-label fw-bold">
                Set your budget EGP£
              </label>
              <input 
                type="number"
                id="budget"
                className="form-select"
                value={formData.budget}
                onChange={handleChange}
                style={{
                  border: "2px solid #dca878",
                  borderRadius: "8px",
                  backgroundColor: "#fffef6",
                }}
               />
              
            </div>

            <div className="col-md-6">
              <label htmlFor="city" className="form-label fw-bold">
                Choose Cities
              </label>
  <div className="dropdown">
    <button
    className="btn btn-outline-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{
    backgroundColor: "#fffef6",
    border: "2px solid #dca878",
    color: "#7b0000",
    fontWeight: "600",
    borderRadius: "8px",
    
    }}
  >
   Select Cities
  </button>
  <ul className="dropdown-menu p-3" 
  style={{
      backgroundColor: "#64b0ab",
      border: "2px solid #dca878",
      borderRadius: "8px",
      minWidth: "220px",
    }}
  >
    {citiesList.map((city) => (
      <li key={city.id} style={{color: "#ffffff"}} id="citylistitem">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={`dropdown-${city.id}`}
            value={city.id}
            checked={cities.includes(city.id)}
            onChange={() => handleCityToggle(city.id)}
          />
          <label className="form-check-label" htmlFor={`dropdown-${city.id}`}>
            {city.name}
          </label>
        </div>
        
      </li>
      
    ))}
  </ul>
</div>

            </div>
          </div>

          <button
            type="submit"
            className="btn mt-3 w-100"
            id="sbmtbtn"
            style={{
              backgroundColor: "#64b0ab",
              color: "#fff",
              fontWeight: "600",
              borderRadius: "8px",
              border: "10px solid #dca878",
            }}
            
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
}
