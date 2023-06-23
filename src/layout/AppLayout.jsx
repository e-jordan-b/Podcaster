import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AppLayout.css';
import { usePodcasts } from '../hooks/usePodcasts';

function AppLayout() {
  const { loading } = usePodcasts();

  return (
    <div className="app-layout">
      <div className="root-layout">
        <header>
          <nav className="navbar">
            <NavLink to="/">Podcaster</NavLink>
            {loading && (<div className="spinner" />)}
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
