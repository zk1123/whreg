import React from 'react';

const Navbar = ({onNavigate}) => {
    return(
        <nav className="navbar navbar-expand-lg">
             <div className="container-fluid"> 
                <a className="navbar-brand" href="./pages/LoginPage.jsx">
                     <img src="css/whereinegyptlogo.png" alt="Logo Placeholder"/>
                </a>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon"></span> </button> 
                    <div className="collapse navbar-collapse justify-content-center text-center" id="navbarNav"> 
                        <ul className="navbar-nav">
                             <li className="nav-item"> 
                                <a className="nav-link" href="#" onClick={(e) => {e.preventDefault();onNavigate('home')}}>Home</a>
                            </li> 
                            <li className="nav-item"> 
                                <a className="nav-link" href="#" onClick={(e) => {e.preventDefault();onNavigate('about')}}>About</a> 
                            </li> 
                            <li className="nav-item"> 
                                <a className="nav-link" href="#" onClick={(e) => {e.preventDefault();onNavigate('contact')}}>Contact</a>
                            </li> 
                            <li className="nav-item"> 
                                <a className="nav-link" href="#" onClick={(e) => {e.preventDefault();onNavigate('destinations')}}>Destinations</a>
                            </li> 
                            <li className="nav-item"> 
                                <a className="nav-link" href="#" onClick={(e) => {e.preventDefault();onNavigate('tripplanner')}}>Trip Planner</a>
                            </li> 
                        </ul> 
                    </div> 
                    <div className="d-flex align-items-center"> 
                        <a href="#" className="signin" onClick={(e) => {e.preventDefault();onNavigate('login')}}> 
                            <i className="bi bi-person-circle"></i> SIGN IN </a>
                    </div> 
                </div> 
        </nav>
    );
};
export default Navbar;