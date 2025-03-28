import { useAuth } from '.././Context/AuthContext';
import { useState, useEffect } from 'react';
import { Lock, Award, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

function Dashboard() {
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [quizData, setQuizData] = useState({
    round1: { status: 'locked', score: null, maxScore: 100, unlockDate: 'March 25, 2025' },
    round2: { status: 'locked', score: null, maxScore: 150, unlockDate: 'March 28, 2025' },
    round3: { status: 'locked', score: null, maxScore: 200, unlockDate: 'April 1, 2025' },
    currentRound: null
  });

  // Simulate fetching quiz data
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if(!token) return;
        console.log('Token:', token);
        const response = await fetch('https://icc-backend-orientation.onrender.com/api/auth/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data.student) {
          const { firstName, lastName, email } = data.student;
          setCurrentUser(prev => ({ ...prev, firstName, lastName, email }));
        }
        setQuizData({
          round1: { status: 'available', score: null, maxScore: 100, unlockDate: 'Now Available' },
          round2: { status: 'locked', score: null, maxScore: 150, unlockDate: 'March 28, 2025' },
          round3: { status: 'locked', score: null, maxScore: 200, unlockDate: 'April 1, 2025' },
          currentRound: 'round1'
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchQuizData();
  }, []);

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

  const handleTakeQuiz = () => {
    // Would normally navigate to the quiz page or start the quiz
    alert(`Starting ${quizData.currentRound ? quizData.currentRound.replace('round', 'Round ') : 'the quiz'}!`);
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
                <h2 className="text-3xl font-bold mb-2">Welcome to the Quiz Challenge!</h2>
                <p className="text-blue-100">Complete all rounds to earn your certification</p>
              </div>
              
              <div className="p-6">
                <div className="flex justify-center my-8">
                  <button 
                    onClick={handleTakeQuiz}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                  >
                    <span className="mr-2">Take Quiz</span>
                    {quizData.currentRound && (
                      <span className="bg-white text-emerald-600 text-sm font-bold px-2 py-1 rounded-full">
                        {quizData.currentRound.replace('round', 'Round ')}
                      </span>
                    )}
                  </button>
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
                            {quizData.round1.score !== null ? (
                              <span className="text-emerald-400 font-bold">
                                {quizData.round1.score}/{quizData.round1.maxScore}
                              </span>
                            ) : (
                              <span className="text-blue-300 text-sm">
                                {quizData.round1.unlockDate}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">Fundamentals Quiz - 10 questions</p>
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
                            <span className="text-yellow-300 text-sm">
                              Unlocks {quizData.round2.unlockDate}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">Advanced Concepts - 15 questions</p>
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
                            <span className="text-yellow-300 text-sm">
                              Unlocks {quizData.round3.unlockDate}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">Expert Challenge - 20 questions</p>
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
                  <AlertTriangle size={40} className="mx-auto mb-4 text-yellow-400" />
                  <p className="text-gray-300">Results will be available after completing quizzes</p>
                  <div className="mt-4 w-full h-3 bg-gray-600 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Locked Features */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Lock size={16} className="mr-2 text-gray-400" />
                  Certificates
                </h3>
                <div className="bg-gray-700/50 rounded-lg p-6 text-center">
                  <Award size={40} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-300">Complete all rounds to unlock your certificates</p>
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