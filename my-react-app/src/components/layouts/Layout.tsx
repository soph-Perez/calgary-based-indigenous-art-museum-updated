import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <main>
        <Outlet /> {/* This is where child pages render */}
      </main>
    </div>
  );
}

export default Layout;
