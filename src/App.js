import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RestaurantReservation = () => {
  const [reservations, setReservations] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  const handleReservation = () => {
    if (!name || !date || !time || guests < 1) {
      alert("Please fill all fields correctly");
      return;
    }

    const newReservation = { name, date, time, guests };
    setReservations([...reservations, newReservation]);
    setName("");
    setDate(new Date());
    setTime("");
    setGuests(1);
  };

  return (
    <div className="p-6 max-w-lg mx-auto border rounded shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Restaurant Reservation</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 w-full p-2 border rounded"
        />
        <DatePicker 
          selected={date} 
          onChange={(date) => setDate(date)} 
          dateFormat="MM/dd/yyyy"
          className="mb-2 w-full p-2 border rounded" 
        />
        <select 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          className="mb-2 w-full p-2 border rounded">
          <option value="">Select a time</option>
          <option value="6:00 PM">6:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
          <option value="8:00 PM">8:00 PM</option>
        </select>
        <input
          type="number"
          placeholder="Number of guests"
          value={guests}
          min={1}
          onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
          className="mb-4 w-full p-2 border rounded"
        />
        <button onClick={handleReservation} className="w-full p-2 bg-blue-500 text-white rounded">Reserve Table</button>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Reservations</h3>
        {reservations.length === 0 ? (
          <p>No reservations yet.</p>
        ) : (
          <ul className="mt-2">
            {reservations.map((res, index) => (
              <li key={index} className="border p-2 rounded mb-2">
                {res.name} - {res.date ? res.date.toLocaleDateString() : "No date selected"} at {res.time} ({res.guests} guests)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default RestaurantReservation;
