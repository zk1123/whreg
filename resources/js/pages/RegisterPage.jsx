import React from "react";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

export default function RegisterPage({ onNavigate }) {
  return (
    <>
      
      <div
        className="register-page position-relative d-flex flex-column justify-content-center align-items-center"
        style={{
          
          backgroundImage: "url('/css/backgroundimage.png')",
          backgroundSize: "cover",        // ensures full coverage
          backgroundPosition: "center",   // centers the image
          backgroundRepeat: "no-repeat",  // prevents tiling
          minHeight: "100vh",             // full screen height
          width: "100%",
          overflowX: "hidden",
        
        }}
      >
        <RegisterForm onNavigate={onNavigate}/>
      
      </div>
      <Footer />
    </>
  );
}
