import React from 'react';

function Book ({ title, author, description }) {
  return (
    <div className="bg-gray-200 shadow-md p-4 mb-4 rounded-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{author}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Book;
