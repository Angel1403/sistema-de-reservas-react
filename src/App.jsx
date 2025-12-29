import { useState } from 'react';
import './App.css';
import { ReservationForm } from './components/ReservationForm';
import { ReservationsList } from './components/ReservationsList';

function App() {
  const [reservations, setReservations] = useState([]);

  const handleReservation = (formData) => {
    setReservations([...reservations, formData]);
  }

  const handleDelete = (index) => {
    const updateReservations = [...reservations];
    updateReservations.splice(index, 1);
    setReservations(updateReservations);
  }


  return (
    <>
      <div className='container'>
        <h1>Sistema de Reservas en Linea</h1>
        <ReservationForm handleReservation={handleReservation} />
        <ReservationsList handleDelete={handleDelete} reservations={reservations} />
      </div>
    </>
  )
}

export default App;
