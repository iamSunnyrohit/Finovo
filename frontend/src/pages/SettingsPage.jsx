import React, { useState } from 'react';
import './Settings.css';

const mockDevices = [
  { id: 1, name: 'iPhone 14', lastActive: '2024-06-10', location: 'Springfield, IL' },
  { id: 2, name: 'MacBook Pro', lastActive: '2024-06-08', location: 'Springfield, IL' },
];

const SettingsPage = () => {
  // Security
  const [showChangePw, setShowChangePw] = useState(false);
  const [biometric, setBiometric] = useState(true);
  const [mfa, setMfa] = useState('sms');
  const [alerts, setAlerts] = useState({
    newDevice: true,
    largeTx: true,
    passwordChange: true,
  });
  const [devices, setDevices] = useState(mockDevices);

  // App
  const [notifSound, setNotifSound] = useState(true);
  const [theme, setTheme] = useState('light');

  // Change password
  const [pw, setPw] = useState({ current: '', new: '', confirm: '' });

  const handleAlertToggle = (key) => setAlerts(a => ({ ...a, [key]: !a[key] }));
  const handleRemoveDevice = (id) => setDevices(devices.filter(d => d.id !== id));
  const handleLogout = () => alert('Logged out!');
  const handleChangePw = e => {
    e.preventDefault();
    setShowChangePw(false);
    setPw({ current: '', new: '', confirm: '' });
    alert('Password changed!');
  };

  return (
    <div className="settings-container">
      <h2 className="settings-header">Settings</h2>
      <div className="settings-section">
        <h3>Security Settings</h3>
        <div className="settings-row">
          <button className="settings-btn" onClick={() => setShowChangePw(s => !s)}>
            Change Password
          </button>
          {showChangePw && (
            <form className="settings-changepw-form" onSubmit={handleChangePw}>
              <input type="password" placeholder="Current Password" value={pw.current} onChange={e => setPw({ ...pw, current: e.target.value })} required className="settings-input" />
              <input type="password" placeholder="New Password" value={pw.new} onChange={e => setPw({ ...pw, new: e.target.value })} required className="settings-input" />
              <input type="password" placeholder="Confirm New Password" value={pw.confirm} onChange={e => setPw({ ...pw, confirm: e.target.value })} required className="settings-input" />
              <div className="settings-changepw-actions">
                <button type="button" className="settings-cancel-btn" onClick={() => setShowChangePw(false)}>Cancel</button>
                <button type="submit" className="settings-save-btn">Save</button>
              </div>
            </form>
          )}
        </div>
        <div className="settings-row">
          <label className="settings-switch-label">
            <input type="checkbox" checked={biometric} onChange={() => setBiometric(b => !b)} />
            Enable Biometric Login (Fingerprint/Face ID)
          </label>
        </div>
        <div className="settings-row">
          <label>MFA Preference:</label>
          <label className="settings-radio-label">
            <input type="radio" name="mfa" checked={mfa === 'sms'} onChange={() => setMfa('sms')} /> SMS
          </label>
          <label className="settings-radio-label">
            <input type="radio" name="mfa" checked={mfa === 'email'} onChange={() => setMfa('email')} /> Email OTP
          </label>
        </div>
        <div className="settings-row settings-alerts">
          <label>Security Alerts:</label>
          <label className="settings-switch-label">
            <input type="checkbox" checked={alerts.newDevice} onChange={() => handleAlertToggle('newDevice')} /> Login from New Device
          </label>
          <label className="settings-switch-label">
            <input type="checkbox" checked={alerts.largeTx} onChange={() => handleAlertToggle('largeTx')} /> Large Transaction Alert
          </label>
          <label className="settings-switch-label">
            <input type="checkbox" checked={alerts.passwordChange} onChange={() => handleAlertToggle('passwordChange')} /> Password Change
          </label>
        </div>
        <div className="settings-row settings-devices">
          <label>Linked Devices:</label>
          <ul className="settings-devices-list">
            {devices.map(d => (
              <li key={d.id} className="settings-device-item">
                <span>{d.name} ({d.location}) - Last Active: {d.lastActive}</span>
                <button className="settings-remove-btn" onClick={() => handleRemoveDevice(d.id)}>Remove</button>
              </li>
            ))}
            {devices.length === 0 && <li className="settings-device-item">No linked devices.</li>}
          </ul>
        </div>
      </div>
      <div className="settings-section">
        <h3>App Preferences</h3>
        <div className="settings-row">
          <label className="settings-switch-label">
            <input type="checkbox" checked={notifSound} onChange={() => setNotifSound(n => !n)} />
            Notification Sounds
          </label>
        </div>
        <div className="settings-row">
          <label>Theme:</label>
          <select value={theme} onChange={e => setTheme(e.target.value)} className="settings-select">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>
        </div>
      </div>
      <div className="settings-logout-row">
        <button className="settings-logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default SettingsPage;
