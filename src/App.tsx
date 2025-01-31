import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FoodDetail from './pages/FoodDetail';
import { AuthProvider } from './context/AuthContext';
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/foodDetail/:id"
            element={
              <ProtectedRoute>
                <FoodDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
