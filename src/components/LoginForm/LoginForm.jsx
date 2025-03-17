import { useState } from 'react';

function LoginForm({ onToggleForm }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-6">
        <button onClick={onToggleForm} className="bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-full p-2 transition duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      </div>
      
      <h2 className="text-2xl font-bold text-center text-white mb-6">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 text-white border-0 border-b-2 border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <div className="absolute right-3 top-3 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-800 text-white border-0 border-b-2 border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <div className="absolute right-3 top-3 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
        >
          <span>Start Creating</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-400">
          Don't have an account?{' '}
          <button
            onClick={onToggleForm}
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;