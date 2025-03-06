// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import NavBar from './components/NavBar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact'; // Make sure to create this component
// import Dashboard from './admin/adminpages/Dashboard';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           {/* Add more routes as needed */}


//           <Route path="/admin/dashboard" element={<Dashboard />}/>        
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './admin/adminpages/Dashboard';

// Add Protected Route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('userRole') === 'admin';
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Protected Admin Route */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Add fallback route for 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;