import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditBook() {
  const { id } = useParams();

  const [editedBook, setEditedBook] = useState({
    title: '',
    author: '',
    description: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the book data based on the ID
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/books/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book data');
        }

        const data = await response.json();
        setEditedBook(data);
      } catch (error) {
        console.error('Error fetching book data:', error.message);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a PUT request to update the book
      const response = await fetch(`http://localhost:3001/api/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedBook),
      });

      if (!response.ok) {
        throw new Error('Failed to update the book');
      }

      // Redirect to the home page after updating the book
      navigate('/books');
    } catch (error) {
      console.error('Error updating book:', error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Uredi knjigu {id}</h1>

      <form onSubmit={handleSubmit} className='flex flex-col p-4'>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={editedBook.title}
          onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
          required
          className="border p-2 mb-2"
        />

        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={editedBook.author}
          onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
          required
          className="border p-2 mb-2"
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={editedBook.description}
          onChange={(e) => setEditedBook({ ...editedBook, description: e.target.value })}
          required
          className="border p-2 mb-4"
        />

        <button type="submit" className="bg-blue-500 text-white p-2">
         Spremi
        </button>
      </form>
    </div>
  );
}

export default EditBook;
