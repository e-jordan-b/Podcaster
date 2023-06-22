import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AppLayout.css';
import { usePodcasts } from '../hooks/usePodcasts';

function AppLayout() {
  const { loading } = usePodcasts();
  console.log(loading);
  return (
    <div className="page">
      <div className="root-layout">
        <header>
          <nav className="navBar">
            <NavLink to="/">Podcaster</NavLink>
            {loading ? (<div className="spinner" />) : null}
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
