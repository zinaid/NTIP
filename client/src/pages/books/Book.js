import React from 'react';

function Book ({ id, title, author, description, onDelete, onEdit }) {
  return (
    <div className="flex flex-inline bg-gray-200 shadow-md p-4 mb-4 rounded-md">
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{author}</p>
        <p className="mt-2">{description}</p>
      </div>
      <div className='flex w-full justify-end items-center'>
        <button className='bg-red-800 rounded-md mr-2 p-4' onClick={() => onDelete(id)}>Delete</button>
        <button className='bg-green-800 rounded-md p-4' onClick={() => onEdit(id)}>Edit</button>
      </div> 
    </div>
  );
};

export default Book;
