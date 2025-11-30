import React, { useState } from "react";

export default function LoginForm({ onNavigate, setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

      const response = await fetch("/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken,
            
        },
        credentials: "same-origin",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(true);
        if(data.redirect === '/adminpage'){
        onNavigate('admin');
        }else{
          onNavigate('tripplanner');
        }
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An unexpected error occurred.");
    }
  };

  return (
     <div className="container d-flex justify-content-center align-items-center py-5">
     <div
            className="card shadow-lg border-0 p-4"
            style={{
              borderRadius: "20px",
              backgroundColor: "#fff8ec",
              maxWidth: "700px",
              width: "100%",
              zIndex: 2,
            }}
          >
    <div className="row align-items-center g-4">
    <div className="col-md-6">
      <h3 className="text-center mb-4 fw-bold" style={{color: "#5c3d00"}}>Login</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn w-100 mt-4"
        id="sbmtbtn"
            style={{
              backgroundColor: "#64b0ab",
              color: "#fff",
              fontWeight: "600",
              borderRadius: "8px",
              border: "10px solid #dca878",
            }}
        >
          Login
        </button>
      </form>
      </div>
      
       <div className="col-md-6 text-center">
                <img
                  src="/css/collage.png"
                  alt="Egypt Collage"
                  className="img-fluid rounded-4"
                  style={{
                    maxWidth: "100%",
                    objectFit: "cover",
                    borderRadius: "25px",
                  }}
                />
              </div>
              {errorMessage && (
        <div className="alert alert-danger mt-3 text-center">{errorMessage}</div>
      )}
      <div className="text-center mt-3">
        <span>Don’t have an account? </span>
        <button
          type="button"
          id="reg-log-link"
          className="btn btn-link p-0 text-danger text-decoration-none"
          onClick={() => onNavigate("register")}
        >
          Register Here
        </button>
      </div>
      <div className="text-center mt-3">
        <span>Forgot Your Password ? </span>
        <button
          type="button"
          id="reg-log-link"
          className="btn btn-link p-0 text-danger text-decoration-none"
          onClick={() => onNavigate("forget")}
        >
          Register Here
        </button>
      </div>
    </div>
    </div>
    </div>

  );
}
