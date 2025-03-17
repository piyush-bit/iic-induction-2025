import { useAuth } from '.././context/AuthContext';

function Dashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">
              Welcome, {currentUser?.firstName || 'User'}
            </span>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Authentication successful!
          </h2>
          <p className="text-gray-300 mb-4">
            You are now logged in and viewing a protected route.
          </p>
          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Your Account Details:</h3>
            <pre className="whitespace-pre-wrap text-sm text-gray-300">
              {JSON.stringify(currentUser, null, 2)}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;