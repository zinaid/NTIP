import { useState, useEffect } from 'react';
import Book from './Book'

function Books() {
    // Dummy data
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3001/api/books');
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
          // Make a DELETE request to the API
          const response = await fetch(`http://localhost:3001/api/books/${id}`, {
            method: 'DELETE',
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
    
      const handleEdit = (id) => {
        
      };
    

    return (
        <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Lista knjiga</h1>

        {books.map((book) => (
            <Book key={book.id} {...book} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
        </div>
    );
}
  
export default Books 