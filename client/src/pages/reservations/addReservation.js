import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function AddReservation() {
  const [newReservation, setNewReservation] = useState({
    bookId: ''
  });

  const [availableBooks, setAvailableBooks] = useState([]);

  const navigate = useNavigate();

  // Fetch available books when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const authToken = Cookies.get('authData');
        const response = await fetch('http://localhost:3001/api/books', {
            headers: {
                Authorization: `${authToken}`, // Include the authorization token in the headers
            }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch available books');
        }

        const books = await response.json();
        setAvailableBooks(books);
      } catch (error) {
        console.error('Error fetching available books:', error.message);
      }
    };

    fetchBooks();
  }, []);

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
        <select
          name="bookId"
          value={newReservation.bookId}
          onChange={(e) => setNewReservation({ ...newReservation, bookId: e.target.value })}
          required
          className="border p-2 mb-2"
        >
          <option value="" disabled>
            Odaberi knjigu
          </option>
          {availableBooks.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title}
            </option>
          ))}
        </select>

        <button type="submit" className="bg-green-500 text-white p-2">
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default AddReservation;
