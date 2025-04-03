import { useState, useEffect } from 'react';
import { Lock, Award, AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  // const { logout } = useAuth();
  const logout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [domain, setDomain] = useState(null);
  const [quizUrl, setQuizUrl] = useState("#");
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState({
    round1: { status: 'locked', score: null, maxScore: 100, unlockDate: 'TBD' },
    round2: { status: 'locked', score: null, maxScore: 150, unlockDate: 'TBD' },
    round3: { status: 'locked', score: null, maxScore: 200, unlockDate: 'TBD' },
    currentRound: null
  });

  // Simulate fetching quiz data
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if(!token) navigate('/login'); // Redirect to login if token is not found;
        console.log('Token:', token);
        const response = await fetch('https://icc-backend-orientation.onrender.com/api/auth/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data.student) {
          // console.log('User Data:', data.student);
          // console.log('Current:', currentUser)
          const { firstName, lastName, email, primaryDomain } = data.student;
          setCurrentUser(prev => ({ ...prev, firstName, lastName, email, primaryDomain }));
          setDomain(primaryDomain);
          
          // Set quiz URL based on primaryDomain
          if(primaryDomain === "computer_science" || primaryDomain === "cs"){
            setQuizUrl("https://iic-183532.learnyst.com/learn/computer-science");
          }
          else if(primaryDomain === "management" || primaryDomain === "Management"){
            setQuizUrl("https://iic-183532.learnyst.com/learn/Management");
          }
          else if(primaryDomain === "mechanical" ||primaryDomain === "Mechanical"){
            setQuizUrl("https://iic-183532.learnyst.com/learn/Mechanical");
          }
          else if(primaryDomain === "chemical"  || primaryDomain === "Chemical"){
            setQuizUrl("https://iic-183532.learnyst.com/learn/Chemical");
          }
          else if(primaryDomain === "electronics" || primaryDomain === "Electronics"){
            setQuizUrl("https://iic-183532.learnyst.com/learn/Electronics");
          }
          else{
            setQuizUrl("#");
          }
          // console.log('Current (a):', currentUser)
        }
        
        // Set Round 1 as available
        setQuizData({
          round1: { status: 'available', score: null, maxScore: 100, unlockDate: '30 Mar 2025' },
          round2: { status: 'locked', score: null, maxScore: 150, unlockDate: 'TBD' },
          round3: { status: 'locked', score: null, maxScore: 200, unlockDate: 'TBD' },
          currentRound: 1
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchQuizData();
  }, [navigate]);

  const getRoundStatusColor = (status) => {
    switch(status) {
      case 'available': return 'bg-green-500';
      case 'locked': return 'bg-gray-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getRoundStatusIcon = (status) => {
    switch(status) {
      case 'available': return <Clock size={24} />;
      case 'locked': return <Lock size={24} />;
      case 'completed': return <CheckCircle size={24} />;
      default: return <AlertTriangle size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
      <header className="bg-gray-800/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Quiz Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-blue-300 font-medium">
              Hello, {currentUser?.firstName || 'User'}!
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
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            {/* Main Panel */}
            <div className="w-full md:w-2/3 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
                <h2 className="text-3xl font-bold mb-2">Welcome to the Induction!</h2>
                <p className="text-blue-100">Round 1 quiz is now available!</p>
              </div>
              
              <div className="p-6">
                <div className="flex justify-center my-8">
                  <a href={quizUrl} target="_blank" rel="noopener noreferrer">
                    <button 
                      onClick={() => console.log('Quiz URL:', quizUrl)}
                      className="bg-green-600 hover:bg-green-700 text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center"
                    >
                      Take Quiz
                    </button>
                  </a>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Your Progress</h3>
                  
                  <div className="space-y-6">
                    {/* Round 1 */}
                    <div className="bg-gray-700/50 rounded-lg p-4 flex items-center border-l-4 border-green-500">
                      <div className={`${getRoundStatusColor(quizData.round1.status)} p-3 rounded-full mr-4`}>
                        {getRoundStatusIcon(quizData.round1.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold text-lg">Round 1</h4>
                          <div className="text-right">
                            <span className="text-green-400 text-sm">Available Now</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">Fundamentals Quiz </p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div className="bg-gray-700/50 rounded-lg p-4 flex items-center border-l-4 border-gray-500 opacity-80">
                      <div className={`${getRoundStatusColor(quizData.round2.status)} p-3 rounded-full mr-4`}>
                        {getRoundStatusIcon(quizData.round2.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold text-lg">Round 2</h4>
                          <div className="text-right">
                            <span className="text-gray-400 text-sm">Locked</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">PI round - 1</p>
                      </div>
                    </div>
                    
                    {/* Round 3 */}
                    <div className="bg-gray-700/50 rounded-lg p-4 flex items-center border-l-4 border-gray-500 opacity-80">
                      <div className={`${getRoundStatusColor(quizData.round3.status)} p-3 rounded-full mr-4`}>
                        {getRoundStatusIcon(quizData.round3.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold text-lg">Round 3</h4>
                          <div className="text-right">
                            <span className="text-gray-400 text-sm">Locked</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">PI round -2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Side Panel */}
            <div className="w-full md:w-1/3 space-y-6">
              {/* User Profile Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold">{currentUser?.firstName?.charAt(0) || 'U'}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{currentUser?.firstName} {currentUser?.lastName || 'User'}</h3>
                      <p className="text-gray-400 text-sm">{currentUser?.email || 'user@example.com'}</p>
                      <p className="text-blue-300 text-sm mt-1">Domain: {currentUser?.primaryDomain || 'Not set'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Locked Features */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Lock size={16} className="mr-2 text-gray-400" />
                  Results
                </h3>
                <div className="bg-gray-700/50 rounded-lg p-6 text-center">
                  <Lock size={40} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-300">Results are currently locked</p>
                  <div className="mt-4 w-full h-3 bg-gray-600 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Progress Overview */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp size={16} className="mr-2 text-blue-400" />
                  Progress Overview
                </h3>
                <div className="bg-gray-700/50 rounded-lg p-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Total Progress</span>
                      <span className="text-blue-400 font-bold">0%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-600 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-green-400" />
                      <span className="text-green-300">Round 1 Available</span>
                    </div>
                    <div className="flex items-center">
                      <Lock size={16} className="mr-2 text-gray-400" />
                      <span className="text-gray-300">Round 2 Locked</span>
                    </div>
                    <div className="flex items-center">
                      <Lock size={16} className="mr-2 text-gray-400" />
                      <span className="text-gray-300">Round 3 Locked</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-gray-800 rounded-lg p-3 text-center">
                    <p className="text-sm text-gray-400">
                      Round 1 is now available! Click the "Take Quiz" button to begin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;