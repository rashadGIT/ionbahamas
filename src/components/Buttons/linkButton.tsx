import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../interfaces/Button'

export default ({ to, label }: Button) => {
  return (
    <Link 
        to={to} 
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full shadow-xl transition duration-300 transform hover:scale-105"
        >
      {label}
    </Link>
  );
};
