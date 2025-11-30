import React from "react";
import Navbar from "../components/Navbar";
import TripPlannerForm from "../components/TripPlannerForm";
import Footer from "../components/Footer";
import CurrencyConverter from "../components/CurrencyConverter";

export default function TripPlannerPage({onNavigate}){

return(
<>
         <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#b30000",
          fontWeight: "700",
          paddingTop: "30px",
          fontSize: "70px",
        }}
      >
        Travel Planner
      </h1>
       <div
        style={{
          background: "url('/css/backgroundimagecropped.png') no-repeat center top",
          backgroundSize: "cover",
          height: "70vh",
          width: "100%",
          marginTop: "-70px",
        }}
      >
      </div>

<TripPlannerForm onNavigate={onNavigate}/>
<CurrencyConverter />
      
</>
);

}