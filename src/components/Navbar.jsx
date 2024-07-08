import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const {  isAuthenticated } = useAuth0();
  const navigate = useNavigate()

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      {/* Left side */}
      <div>
        <a href="#" className="text-gray-800 hover:text-gray-600 font-bold text-lg">Home</a>
      </div>

      {/* Right side */}
      <div className="flex items-center">
        <a href="#" className="text-gray-800 hover:text-gray-600 mr-4">Download Excel</a>
        
        {isAuthenticated ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => navigate({ pathname: '/logout' })}
          >
            Log Out
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => navigate({ pathname: '/login' })}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
