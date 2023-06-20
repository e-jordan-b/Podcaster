import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AppLayout.css';

function AppLayout() {
  return (
    <div className="page">
      <div className="root-layout">
        <header>
          <nav>
            <NavLink to="/">Podcaster</NavLink>
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
