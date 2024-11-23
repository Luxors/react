import './assets/styles/App.css';

import { Home } from './pages/Home';

export function App() {
  return (
    <>
      <header className="app-header">
        <h1 className="app-title">User CRM</h1>
      </header>
      <main className="app-main">
        <Home />
      </main>
    </>
  );
}
