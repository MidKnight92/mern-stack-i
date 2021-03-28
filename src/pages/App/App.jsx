import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      { user ? <NewOrderPage /> : <AuthPage />}
    </main>
  );
}

