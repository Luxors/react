import { Outlet, useLocation, Link } from 'react-router-dom';

import './assets/styles/App.css';

export function App() {
  const location = useLocation();

  const isHome = location.pathname === '/';

  const pageClass = isHome ? 'app-layout--home' : '';

  return (
    <div className={`app-layout ${pageClass}`}>
      <header className="app-header">
        <div className="app-container">
          <div className="app-header__content">
            {!isHome && (
              <Link to="/" title="go home" className="app-header__link">
                &#10094;
              </Link>
            )}
            <div className="app-logo">User CRM</div>
          </div>
        </div>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
