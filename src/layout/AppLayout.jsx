import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AppLayout.css';

function AppLayout() {
  return (
    <div className="page">
      <div className="root-layout">
        <header>
          <nav className="navBar">
            <NavLink to="/">Podcaster</NavLink>
            <hr />
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
