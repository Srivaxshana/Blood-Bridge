// Add this component
const ProtectedRoute = ({ children }) => {
    const userRole = localStorage.getItem('userRole');
    return userRole === 'admin' ? children : <Navigate to="/" replace />;
  };
  
  // Update your route
  <Route 
    path="/admin/dashboard" 
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />