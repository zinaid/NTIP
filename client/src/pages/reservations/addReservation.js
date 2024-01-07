import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function AddReservation() {
  const [newReservation, setNewReservation] = useState({
    book: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add the new Reservation
      const authToken = Cookies.get('authData');
      const response = await fetch('http://localhost:3001/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           Authorization: `${authToken}`, // Include the authorization token in the headers
        },
        body: JSON.stringify(newReservation),
      });

      if (!response.ok) {
        throw new Error('Failed to add the new Reservation');
      }

      navigate('/Reservations');

    } catch (error) {
      console.error('Error adding Reservation:', error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Dodaj rezervaciju</h1>

      <form onSubmit={handleSubmit} className='flex flex-col p-4'>
        <label>Knjiga:</label>
        <input
          type="text"
          name="book"
          value={newReservation.book}
          onChange={(e) => setNewReservation({ ...newReservation, book: e.target.value })}
          required
          className="border p-2 mb-2"
        />

        <button type="submit" className="bg-green-500 text-white p-2">
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default AddReservation;
