import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AppLayout.css';

function AppLayout() {
  return (
    <div className="app-layout">
      <div className="root-layout">
        <header>
          <nav className="navbar">
            <NavLink to="/" className="navbar__title">Podcaster</NavLink>
          </nav>
        </header>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
