import React from 'react';
import AddCityForm from '../components/AddCityForm';
import AddPlaceForm from '../components/AddPlaceForm';
import UpdatePlaceForm from '../components/UpdatePlaceForm';
import DeletePlaceForm from '../components/DeletePlaceForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AdminPanel({onNavigate}) {
  return (
    
    <>
    <div className='container'>
      <h1
  className="mb-4 mt-4 text-center"
  style={{ color: '#b30000' }}
      >Admin Panel</h1>
      <AddCityForm />
      <AddPlaceForm />
      <UpdatePlaceForm />
      <DeletePlaceForm />
    </div>
    
    </>
  );
}