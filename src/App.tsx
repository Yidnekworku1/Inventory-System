import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import UserManagement from './pages/UserManagement';
import TopNav from './components/TopNav';
const App = () => {
  return (
      <Router>
        <div>
          <TopNav />
        <div className="layout">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/usermanagement" element={<UserManagement />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;