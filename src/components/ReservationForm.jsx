import { useState } from 'react';

export const ReservationForm = ({ handleReservation }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    people: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReservation(formData);
    // const reservationsLocalStorage =
    //   JSON.parse(localStorage.getItem("reservations")) || [];
    // reservationsLocalStorage.push(formData);
    // localStorage.setItem(
    //   "reservations",
    //   JSON.stringify(reservationsLocalStorage)
    // );

    setFormData(
      {
        date: "",
        time: "",
        people: "",
      }
    )
  };

  return (
    <>
      <h2>Reserva tu mesa</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="people">Personas:</label>
          <input
            type="number"
            id="people"
            name="people"
            value={formData.people}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reservar
        </button>
      </form>
    </>
  );
};