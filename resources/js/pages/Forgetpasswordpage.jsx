import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Forgetpasswordform from "../components/Forgetpasswordform";
import Footer from "../components/Footer";

export default function Forgotpasswordpage({ onNavigate }) {
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
      <Forgetpasswordform onNavigate={onNavigate} />  
      </div>
      
      <Footer />
    </>
  );
}