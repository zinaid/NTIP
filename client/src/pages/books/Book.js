import React from 'react';
import {Link} from 'react-router-dom'

function Book ({ id, title, author, description, onDelete }) {
  return (
    <div className="flex flex-inline bg-gray-200 shadow-md p-4 mb-4 rounded-md">
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{author}</p>
        <p className="mt-2">{description}</p>
      </div>
      <div className='flex w-full justify-end items-center'>
        <button className='bg-red-800 rounded-md mr-2 p-4' onClick={() => onDelete(id)}>Delete</button>
        <Link to={`/edit-book/${id}`}  className='bg-blue-800 rounded-md mr-2 p-4'>
          Edit
        </Link>
      </div> 
    </div>
  );
};

export default Book;
