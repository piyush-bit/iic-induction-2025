import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm({ onToggleForm }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    registrationNumber: '',
    primaryDomain: '',
    secondaryDomain: '',
    contactNumber: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Primary domain array
  const primaryDomains = [
    { value: 'mechanical', label: 'Mechanical' },
    { value: 'chemical', label: 'Chemical' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'computer_science', label: 'Computer Science' },
    { value: 'management', label: 'Management' }
  ];
  
  // Updated secondary domain array
  const secondaryDomains = [
    { value: 'graphic_design', label: 'Graphic Designing' },
    { value: 'content_writing', label: 'Content Writing' },
    { value: 'video_editing', label: 'Video Editing' },
    { value: 'na', label: 'None' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Validate that both primary and secondary domains are selected
    if (!formData.primaryDomain || !formData.secondaryDomain) {
      setError('Please select both Primary and Secondary Domains');
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('https://icc-backend-orientation.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
      
      console.log('Registration successful:', data);
      
      // Auto-login the user after registration
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Redirect to dashboard
      navigate('/dashboard');
      
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || 'An error occurred during registration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={onToggleForm}
        className="flex items-center text-gray-400 hover:text-gray-300 mb-4"
        disabled={isLoading}
      >
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"></path>
        </svg>
        Back to Login
      </button>
      <h2 className="text-2xl font-bold text-center text-white mb-6">Create Account</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-200 rounded-lg text-sm">
          {error}
        </div>
      )}
      
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
              disabled={isLoading}
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
              disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <select
              id="primaryDomain"
              name="primaryDomain"
              className="w-full appearance-none px-4 py-3 bg-gray-800 border-l-4 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              required
              value={formData.primaryDomain}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="" disabled> Primary Domain </option>
              {primaryDomains.map((domain) => (
                <option key={domain.value} value={domain.value}>
                  {domain.label}
                </option>
              ))}
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

          <div className="relative">
            <select
              id="secondaryDomain"
              name="secondaryDomain"
              className="w-full appearance-none px-4 py-3 bg-gray-800 border-l-4 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              required
              value={formData.secondaryDomain}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="" disabled> Secondary Domain </option>
              {secondaryDomains.map((domain) => (
                <option key={domain.value} value={domain.value}>
                  {domain.label}
                </option>
              ))}
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
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Creating Account...</span>
            </div>
          ) : (
            "Start Creating"
          )}
        </button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>Make A Step Towards The Revolution .</p>
      </div>
    </div>
  );
}

export default RegistrationForm;