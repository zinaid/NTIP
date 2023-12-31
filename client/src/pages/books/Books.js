import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Book from './Book'
import Cookies from 'js-cookie';

function Books() {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
          try {
            const authToken = Cookies.get('authData');
            const response = await fetch('http://localhost:3001/api/books', {
              headers: {
                Authorization: `${authToken}`, // Include the authorization token in the headers
              },
            });
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
    
            const data = await response.json();
            setBooks(data);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        // Call the fetch data function
        fetchData();
      }, []); // Empty dependency array means this effect runs once after the initial render>

      const handleDelete = async (id) => {
        try {
          const authToken = Cookies.get('authData');
          // Make a DELETE request to the API
          const response = await fetch(`http://localhost:3001/api/books/${id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `${authToken}`, // Include the authorization token in the headers
            },
          });
    
          if (!response.ok) {
            throw new Error('Failed to delete the book');
          }
    
          // Update the local state without the deleted book
          setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        } catch (error) {
          console.error('Error deleting book:', error.message);
        }
      };
    

    return (
        <div className="container mx-auto mt-8">
          <div className='flex w-full justify-between'>
            <h1 className="text-3xl font-bold mb-4">Lista knjiga</h1>
            <Link to="/add-book" className="bg-blue-500 text-white p-2 mb-4">
              Dodaj knjigu
            </Link>
          </div>
        
        {books.map((book) => (
            <Book key={book.id} {...book} onDelete={handleDelete}/>
        ))}
        </div>
    );
}
  
export default Books 