import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      setIsCollapsed(true);
    }
  };

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
        <li className="sidebar-item" onClick={() => handleNavigation('/')}>
          <RiDashboardLine />
          {!isCollapsed && <span>Dashboard</span>}
        </li>
        <li className="sidebar-item" onClick={() => handleNavigation('/usermanagement')}>
          <RiUser3Line />
          {!isCollapsed && <span>User Management</span>}
        </li>
        <li className="sidebar-item" onClick={() => handleNavigation('/categories')}>
          <RiListCheck />
          {!isCollapsed && <span>Categories</span>}
        </li>
        <li className="sidebar-item" onClick={() => handleNavigation('/products')}>
          <RiStore2Line />
          {!isCollapsed && <span>Products</span>}
        </li>
        <li className="sidebar-item" onClick={() => handleNavigation('/settings')}>
          <RiSettings3Line />
          {!isCollapsed && <span>Settings</span>}
        </li>
        <li className="sidebar-item" onClick={() => handleNavigation('/messages')}>
          <RiMessage2Line />
          {!isCollapsed && <span>Messages</span>}
        </li>
        <li className="sidebar-item" onClick={() => handleNavigation('/help')}>
          <RiQuestionLine />
          {!isCollapsed && <span>Help</span>}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar; 