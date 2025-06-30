import React from 'react';
import './Dashboard.css';

const mockBalances = [
  { type: 'Checking', amount: 2450.23, currency: 'USD' },
  { type: 'Savings', amount: 10234.88, currency: 'USD' },
  { type: 'Credit Card', amount: -320.50, currency: 'USD' },
];

const mockTransactions = [
  { date: '2024-06-10', description: 'Starbucks', amount: -5.75 },
  { date: '2024-06-09', description: 'Payroll Deposit', amount: 1500.00 },
  { date: '2024-06-08', description: 'Amazon', amount: -45.99 },
  { date: '2024-06-07', description: 'Electric Bill', amount: -120.00 },
  { date: '2024-06-06', description: 'Grocery Store', amount: -87.40 },
];

const mockAlerts = [
  {
    type: 'warning',
    message: 'Your checking balance is predicted to be low by June 15 due to upcoming bills.'
  },
  {
    type: 'danger',
    message: 'Unusual transaction detected: $320 at "Unknown Merchant". Confirm or Freeze Card.'
  },
  {
    type: 'reminder',
    message: 'Reminder: Your internet bill is typically due soon.'
  }
];

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Welcome, User!</h2>

      {/* AI Alerts */}
      <div className="dashboard-alerts">
        {mockAlerts.map((alert, idx) => (
          <div
            key={idx}
            className={`dashboard-alert dashboard-alert-${alert.type}`}
          >
            {alert.message}
          </div>
        ))}
      </div>

      {/* Balances */}
      <div className="dashboard-balances">
        {mockBalances.map((bal, idx) => (
          <div
            key={bal.type}
            className="dashboard-balance-card"
          >
            <div className="dashboard-balance-type">{bal.type}</div>
            <div className="dashboard-balance-amount">
              {bal.currency} {bal.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="dashboard-transactions">
        <h3 style={{ marginBottom: 10 }}>Recent Transactions</h3>
        <table className="dashboard-transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {mockTransactions.map((tx, idx) => (
              <tr key={idx}>
                <td>{tx.date}</td>
                <td>{tx.description}</td>
                <td className={tx.amount < 0 ? 'dashboard-amount-negative' : 'dashboard-amount-positive'}>
                  {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-actions">
        <button className="dashboard-action-btn">Transfer Funds</button>
        <button className="dashboard-action-btn pay">Pay Bill</button>
        <button className="dashboard-action-btn deposit">Deposit Check</button>
      </div>
    </div>
  );
};

export default DashboardPage;
