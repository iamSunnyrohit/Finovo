import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import Features from './components/features';
import Works from './components/works';
import Page4 from './components/page4';
import Pricing from './components/pricing';
import Banner from './components/banner';
import Footer from './components/footer';
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
          <Route path="/login" element={
            <>
              <Nav />
              <Login />
            </>
          } />
          <Route path="/signup" element={
            <>
              <Nav />
              <Signup />
            </>
          } />
          <Route path="/" element={
            <>
              <Nav />
              <Home />
              <Features />
              <Works />
              <Page4 />
              <Banner />
              <Pricing />
              <Footer />
              <DashboardPage />
              <AccountsPage />
              <CheckDepositPage />
              <TransfersPage />
              <BillsPage />
              <ProfilePage />
              <SettingsPage />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
