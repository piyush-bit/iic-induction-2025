import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);
  
  // Check if user is already logged in
  const isAuthenticated = localStorage.getItem('authToken');
  
  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-white relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
               style={{ backgroundImage: "url('/iic_building.webp')" }}></div>
               {/* Add background image */}
          <div className="relative flex flex-col justify-center h-full">
            <div className="mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">IIC</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">Create Your Account And Give Reality To Your Dreams</h1>
            <p className="text-lg mb-8 text-gray-300">Join Us For Achieving Greater Dreams</p>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gray-900">
          <div className="w-full max-w-md">
            {showLogin ? (
              <LoginForm onToggleForm={() => setShowLogin(false)} />
            ) : (
              <RegistrationForm onToggleForm={() => setShowLogin(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;