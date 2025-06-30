import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNav.css';

const mockUser = {
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  profilePic: null,
};

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { to: '/accounts', label: 'Accounts', icon: '💳' },
  { to: '/transfers', label: 'Transfers', icon: '🔄' },
  { to: '/bills', label: 'Bills', icon: '🧾' },
  { to: '/check-deposit', label: 'Check Deposit', icon: '📸' },
  { to: '/profile', label: 'Profile', icon: '👤' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
];

const SideNav = () => {
  return (
    <aside className="sidenav-container">
      <div className="sidenav-profile">
        <img
          src={mockUser.profilePic || `https://ui-avatars.com/api/?name=${encodeURIComponent(mockUser.name)}`}
          alt="Profile"
          className="sidenav-profile-pic"
        />
        <div className="sidenav-profile-info">
          <div className="sidenav-profile-name">{mockUser.name}</div>
          <div className="sidenav-profile-email">{mockUser.email}</div>
        </div>
      </div>
      <nav className="sidenav-nav">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              'sidenav-link' + (isActive ? ' active' : '')
            }
          >
            <span className="sidenav-link-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="sidenav-logout">
        <NavLink to="/logout" className="sidenav-link sidenav-logout-link">
          <span className="sidenav-link-icon">🚪</span>Logout
        </NavLink>
      </div>
    </aside>
  );
};

export default SideNav; 