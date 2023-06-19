import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
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
    </>
  );
}

export default AppLayout;
