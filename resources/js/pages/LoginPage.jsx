import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

export default function LoginPage({ onNavigate, setIsLoggedIn }) {
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
        
      <LoginForm onNavigate={onNavigate} setIsLoggedIn={setIsLoggedIn}/>
      </div>
      
    </>
  );
}
