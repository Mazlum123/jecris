// frontend/src/components/Layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}