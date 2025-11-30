import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({onNavigate}) => {
   
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/RegisterUser', formData);
      setMessage(response.data.message);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'Registration failed');
      } else {
        setMessage('An unexpected error occurred.');
      }
    }
  };
   
   
   
    return(
        
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
                <h2 className="text-center mb-4 fw-bold" style={{ color: "#5c3d00" }}>
                  Register
                </h2>
                {message && <p className="text-center text-success">{message}</p>}
                <form onSubmit={handleSubmit} >
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input type="text" value={formData.name} onChange={handleChange} className="form-control border-warning-subtle" id="name" name="name" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">E-Mail</label>
                    <input type="email" value={formData.email} onChange={handleChange} className="form-control border-warning-subtle" id="email" name='email'/>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>
                    <input type="password" value={formData.password} onChange={handleChange} className="form-control border-warning-subtle" id="password" name="password"/>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Confirm Password</label>
                    <input type="password" value={formData.password_confirmation} onChange={handleChange} className="form-control border-warning-subtle" id="password_confirmation" name="password_confirmation" />
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="terms" />
                    <label className="form-check-label small" htmlFor="terms">
                      I have read and agreed to the{" "}
                      <a href="#" className="text-danger fw-semibold text-decoration-none" id="reg-log-link">
                        terms and conditions
                      </a>
                    </label>
                  </div>

                  <p className="small text-center mb-2">
                    Already have an account?{" "}
                    <button
                      type="button"
                      id="reg-log-link"
                      className="btn btn-link p-0 text-danger text-decoration-none"
                      onClick={() => onNavigate("login")}
                    >
                     Login here 
                    </button>
                  </p>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn fw-bold px-5 py-2"
                      id="sbmtbtn"
                      style={{
                      backgroundColor: "#64b0ab",
                      color: "#fff",
                      fontWeight: "600",
                      borderRadius: "8px",
                      border: "10px solid #dca878",
                      }}
                    >
                      Register
                    </button>
                  </div>
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
            </div>
        </div>
        </div>

        
);
};

export default RegisterForm;