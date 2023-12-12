import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add the new book
      const response = await fetch('http://localhost:3001/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        throw new Error('Failed to add the new book');
      }

      navigate('/books');

    } catch (error) {
      console.error('Error adding book:', error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Dodaj knjigu</h1>

      <form onSubmit={handleSubmit} className='flex flex-col p-4'>
        <label>Naslov:</label>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          required
          className="border p-2 mb-2"
        />

        <label>Autor:</label>
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
          className="border p-2 mb-2"
        />

        <label>Opis:</label>
        <textarea
          name="description"
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
          required
          className="border p-2 mb-4"
        />

        <button type="submit" className="bg-green-500 text-white p-2">
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default AddBook;
