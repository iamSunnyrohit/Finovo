import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SideNav from './components/SideNav';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import DashboardPage from './pages/DashboardPage';
import AccountsPage from './pages/AccountsPage';
import TransfersPage from './pages/TransfersPage';
import CheckDepositPage from'./pages/CheckDepositPage';
import BillsPage from './pages/BillsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={
            <div className="main-layout">
              <SideNav />
              <main className="main-content">
                <Routes>
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="accounts" element={<AccountsPage />} />
                  <Route path="transfers" element={<TransfersPage />} />
                  <Route path="bills" element={<BillsPage />} />
                  <Route path="check-deposit" element={<CheckDepositPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </main>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
