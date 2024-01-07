import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'

function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Function to fetch reservations
    const fetchReservations = async () => {
      try {
        const authToken = Cookies.get('authData');
        const response = await fetch('http://localhost:3001/api/reservations', {
          headers: {
            Authorization: `${authToken}`, // Include the authorization token in the headers
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch reservations');
        }

        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error.message);
      }
    };

    // Call the fetch reservations function
    fetchReservations();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="container mx-auto mt-8">
      <div className='flex w-full justify-between'>
        <h1 className="text-3xl font-bold mb-4">Lista rezervacija</h1>
        <Link to="/add-reservation" className="bg-blue-500 text-white p-2 mb-4">
          Dodaj rezervaciju
        </Link>
      </div>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            User ID: {reservation.user_id}, Book Title: {reservation.title}, Date: {reservation.reservation_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;
