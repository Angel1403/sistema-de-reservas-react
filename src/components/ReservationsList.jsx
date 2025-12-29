

export const ReservationsList = ({ handleDelete, reservations }) => {
  // const [reservations, setReservations] = useState([]);

  // useEffect(() => {
  //   const storeReservations = JSON.parse(localStorage.getItem("reservations")) || [];
  //   setReservations(storeReservations);
  // }, []);

  return (
    <>
      <div>
        <h2>Reservas Existentes</h2>
        <ul className="list-group ">
          {reservations.map((reservation, index) => (
            <li className="list-group-item mt-2" key={index}>
              <strong>Fecha: </strong> {reservation.date} <br />
              <strong>Hora: </strong> {reservation.time} <br />
              <strong>Personas: </strong> {reservation.people} <br />
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};