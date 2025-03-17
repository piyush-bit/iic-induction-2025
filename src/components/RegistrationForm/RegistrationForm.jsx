import { useState } from 'react';

function RegistrationForm({ onToggleForm }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    registrationNumber: '',
    domain: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration form submitted:', formData);
  };

  return (
    <div className="w-full">
      <button
        onClick={onToggleForm}
        className="flex items-center text-gray-400 hover:text-gray-300 mb-4"
      >
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"></path>
        </svg>
        Back to Login
      </button>
      <h2 className="text-2xl font-bold text-center text-white mb-6">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 bg-gray-800 border-l-4 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 bg-gray-800 border-l-4 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-gray-800 border-l-4 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-3 bg-gray-800 border-l-4 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            id="registrationNumber"
            name="registrationNumber"
            className="w-full px-4 py-3 bg-gray-800 border-l-4 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            placeholder="Registration Number"
            required
            value={formData.registrationNumber}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <select
            id="domain"
            name="domain"
            className="w-full appearance-none px-4 py-3 bg-gray-800 border-l-4 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            required
            value={formData.domain}
            onChange={handleChange}
          >
            <option value="" disabled>Select Domain</option>
            <option value="cs">Computer Science</option>
            <option value="electronics">Electronics</option>
            <option value="management">Management</option>
            <option value="mechanical">Mechanical</option>
            <option value="chemical">Chemical</option>
          </select>

          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            className="w-full px-4 py-3 bg-gray-800 border-l-4 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            placeholder="Contact Number"
            required
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Start Creating
        </button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>By signing up, you agree to our <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>.</p>
      </div>
    </div>
  );
}

export default RegistrationForm;
