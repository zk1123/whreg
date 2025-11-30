import { useState, useEffect } from 'react';
import '/public/css/center.css';
import Citymincrd from '../components/Citymincrd';
import Button from '../components/Button';
import Trendcrd from '../components/Trendcrd';

function Homepage({ onNavigate }) {
const [places, setPlaces] = useState([]);
const [trendy, setTrendy] = useState([]);

// Fetch main places
const fetchPlaces = async () => {
try {
const response = await fetch('/api/placesbycity', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({})
});
if (!response.ok) throw new Error('Network response was not ok');
const data = await response.json();
setPlaces(data);
} catch (err) {
console.error('Error fetching places:', err);
}
};

useEffect(() => {
fetchPlaces();
}, []);

return (
<> <main>

    
        <>
  <main>
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#FAF7F2",
        color: "#333",
      }}
    >
      {/* HERO WITH BACKGROUND */}
      <section
        className="py-5 mt-5"
        style={{
          backgroundImage: "url('/css/backgroundimagecropped.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <h1
                style={{
                  color: "#8B4513",
                  fontSize: "40px",
                  fontWeight: "bold",
                  marginBottom: "40px",
                  textAlign: "center",
                }}
              >
                DISCOVER THE TREASURES OF EGYPT.
              </h1>
            {/* TEXT */}
            <div className="col-md-6 text-center text-md-start">
            
              <p
                style={{
                  color: "#FFF",
                  fontSize: "32px",
                  marginBottom: "25px",
                  maxWidth: "100%",
                  marginTop: "60px",
                  fontWeight: "bold"
                }}
              >
                Plan your own trip using our trip planner !
              </p>

              <button
                style={{
                  backgroundColor: "#D4A574",
                  color: "white",
                  border: "none",
                  padding: "12px 30px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
                onClick={() => onNavigate("tripplanner")}
              >
                Discover Now
              </button>
            </div>

            {/* COLLAGE */}
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src="/css/collage.png"
                alt="Collage"
                style={{
                  width: "90%",
                  maxWidth: "450px",
                  
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION BUTTONS */}
      

      {/* CARDS BELOW HERO */}
      <section style={{ padding: "60px 40px", backgroundColor: "#FAF7F2" }}>
        <div className="container">
  <div className="row g-4">

    {/* Card 1 */}
    <div className="col-md-4">
      <div
        style={{
          backgroundColor: "#D4A574",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="/images/pyramids.jpg"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            backgroundColor: "#C9A068",
          }}
          alt=""
        />
        <div style={{ padding: "20px", color: "white" }}>
          <h3 style={{ marginBottom: "10px", fontSize: "18px" }}>Giza</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Description goes here. Add details about this amazing Egyptian
            location and what makes it special.
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-4">
      <div
        style={{
          backgroundColor: "#D4A574",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="/images/cairotower.jpg"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            backgroundColor: "#C9A068",
          }}
          alt=""
        />
        <div style={{ padding: "20px", color: "white" }}>
          <h3 style={{ marginBottom: "10px", fontSize: "18px" }}>Cairo</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Description goes here. Add details about this amazing Egyptian
            location and what makes it special.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-4">
      <div
        style={{
          backgroundColor: "#D4A574",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="/images/alexandriabibliotheca.jpg"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            backgroundColor: "#C9A068",
          }}
          alt=""
        />
        <div style={{ padding: "20px", color: "white" }}>
          <h3 style={{ marginBottom: "10px", fontSize: "18px" }}>Alexandria</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Description goes here. Add details about this amazing Egyptian
            location and what makes it special.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
      </section>

      {/* REST OF YOUR SECTIONS – untouched */}
      {/* TOP TRENDING… etc. */}
    </div>
  </main>
  <section style={{ padding: '60px 40px', backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <polygon points="15,2 18,12 28,12 20,18 23,28 15,22 7,28 10,18 2,12 12,12" fill="#D4A574"/>
            </svg>
            <h2 style={{ color: '#5BA8A0', fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
              TOP TRENDING PLACES IN EGYPT
            </h2>
          </div>

          {/* The Pyramids */}
          <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '30px', marginBottom: '40px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <img src="/images/pyramids.jpg" alt="Pyramids" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px', backgroundColor: '#E8DCC8' }} />
              </div>
              <div className="col-md-6">
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', marginBottom: '20px' }}>
                  Located on the Giza plateau on the outskirts of Cairo, the Pyramids of Giza are one of the most iconic monuments in the world. These ancient structures have stood for over 4,500 years and continue to captivate visitors with their impressive scale and mysterious construction techniques.
                </p>
                <div style={{ backgroundColor: '#F5EFE6', padding: '15px 25px', display: 'inline-block', borderRadius: '0 20px 0 20px', border: '2px solid #D4A574' }}>
                  <h3 style={{ color: '#8B4513', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>THE PYRAMIDS</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Abu Simbel Temple */}
          <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '30px', marginBottom: '40px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <img src="/images/GEM1.jpg" alt="Abu Simbel" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px', backgroundColor: '#E8DCC8' }} />
              </div>
              <div className="col-md-6">
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', marginBottom: '20px' }}>
                 The Grand Egyptian Museum is a world-class cultural landmark near the Pyramids, featuring Egypt’s largest collection of ancient artifacts, including the full Tutankhamun treasures. It blends modern design with pharaonic history for an immersive visitor experience.
                </p>
                <div style={{ backgroundColor: '#F5EFE6', padding: '15px 25px', display: 'inline-block', borderRadius: '0 20px 0 20px', border: '2px solid #D4A574' }}>
                  <h3 style={{ color: '#8B4513', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>The Grand Egyptian Museum</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Sphinx */}
          <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div className="row align-items-center g-4">
              <div className="col-md-4">
                <img src="/images/sphinx.jpg" alt="Sphinx" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', backgroundColor: '#E8DCC8' }} />
              </div>
              <div className="col-md-8">
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333' }}>
                  The Great Sphinx of Giza is a limestone statue featuring the head of a pharaoh and the body of a lion. This enigmatic monument has guarded the Giza plateau for millennia and remains one of Egypt's most recognizable symbols.
                </p>
                <div style={{ backgroundColor: '#F5EFE6', padding: '15px 25px', display: 'inline-block', borderRadius: '0 20px 0 20px', border: '2px solid #D4A574' }}>
                  <h3 style={{ color: '#8B4513', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Sphinx</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</>


   
  </main>
</>


);
}

export default Homepage;

