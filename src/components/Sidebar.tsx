import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  RiDashboardLine, 
  RiUser3Line, 
  RiSettings3Line, 
  RiMessage2Line, 
  RiQuestionLine,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiListCheck,
  RiStore2Line
} from 'react-icons/ri';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  }, [isMobile]);

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button 
        className="collapse-btn"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
      </button>
      <ul className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <RiDashboardLine />
          {!isCollapsed && <span>Dashboard</span>}
        </NavLink>
        <NavLink to="/usermanagement" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <RiUser3Line />
          {!isCollapsed && <span>User Management</span>}
        </NavLink>
        <NavLink to="/categories" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <RiListCheck />
          {!isCollapsed && <span>Categories</span>}
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <RiStore2Line />
          {!isCollapsed && <span>Products</span>}
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <RiSettings3Line />
          {!isCollapsed && <span>Settings</span>}
        </NavLink>
        <NavLink to="/messages" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <RiMessage2Line />
          {!isCollapsed && <span>Messages</span>}
        </NavLink>
        <NavLink to="/help" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <RiQuestionLine />
          {!isCollapsed && <span>Help</span>}
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar; 