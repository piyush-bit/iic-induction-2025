import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Members } from "./pages/Members";
import Achievements from "./components/Achievements/Achievements";
import Project from "./pages/Project";
import Countdown from "./components/Countdown/Countdown";
import Loading from "./components/Loading/Loading";
import { useState, useEffect } from "react";
import Ticket from "./components/Ticket/New_Ticket.jsx";
import BackgroundBeams from "./components/BackgroundBeams/BackgroundBeams.jsx";
import AuthPage from "./components/AuthPage/AuthPage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import InductionPageWithStyles from "./components/InductionPage/InductionPage.jsx";


function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate a loading delay
    }, 1500);
  }, []);

  return loading ? (<Loading />) :
    (
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authpage" element={<AuthPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/inductionPage" element={<InductionPageWithStyles />} />
            <Route
              path="/"
              element={
                localStorage.getItem('authToken') ?
                  <Navigate to="/dashboard" replace /> :
                  <Navigate to="/login" replace />
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* <Route path="*" element={<NotFound />} /> */}
            {/* <Route path="/members" element={<Members/>} /> */}
            {/* <Route path="/achievements" element={<Achievements/>} /> */}
            {/* <Route path="/project" element={<Project/>} /> */}
            {/* <Route path="/countdown" element={<Countdown/>} /> */}
            {/* <Route path="/ticket" element={<Ticket />} /> */}
            {/* <Route path="/background-beams" element={<BackgroundBeams />} /> */}
          </Routes>
      </Router>)
};


export default App

