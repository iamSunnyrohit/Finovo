import React, { useState } from 'react';
import './Account.css';

const mockAccount = {
  name: 'Checking Account',
  number: '**** 1234',
  routing: '*****6789',
  currentBalance: 2450.23,
  availableBalance: 2400.00,
  currency: 'USD',
};

const mockTransactions = [
  { date: '2024-06-10', description: 'Starbucks', amount: -5.75, category: 'Dining' },
  { date: '2024-06-09', description: 'Payroll Deposit', amount: 1500.00, category: 'Income' },
  { date: '2024-06-08', description: 'Amazon', amount: -45.99, category: 'Shopping' },
  { date: '2024-06-07', description: 'Electric Bill', amount: -120.00, category: 'Utilities' },
  { date: '2024-06-06', description: 'Grocery Store', amount: -87.40, category: 'Groceries' },
  { date: '2024-06-05', description: 'Uber', amount: -18.20, category: 'Transport' },
  { date: '2024-06-04', description: 'Water Bill', amount: -30.00, category: 'Utilities' },
  { date: '2024-06-03', description: 'Netflix', amount: -15.99, category: 'Entertainment' },
];

const AccountsPage = () => {
  const [search, setSearch] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  // Filter transactions by date and search
  const filteredTransactions = mockTransactions.filter(tx => {
    const txDate = new Date(tx.date);
    const from = dateFrom ? new Date(dateFrom) : null;
    const to = dateTo ? new Date(dateTo) : null;
    const matchesDate = (!from || txDate >= from) && (!to || txDate <= to);
    const matchesSearch =
      !search ||
      tx.description.toLowerCase().includes(search.toLowerCase()) ||
      tx.category.toLowerCase().includes(search.toLowerCase());
    return matchesDate && matchesSearch;
  });

  return (
    <div className="account-container">
      <h2 className="account-header">{mockAccount.name}</h2>
      <div className="account-details">
        <div><strong>Account Number:</strong> {mockAccount.number}</div>
        <div><strong>Routing Number:</strong> {mockAccount.routing}</div>
        <div><strong>Current Balance:</strong> {mockAccount.currency} {mockAccount.currentBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
        <div><strong>Available Balance:</strong> {mockAccount.currency} {mockAccount.availableBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
      </div>

      <div className="account-actions">
        <button className="account-action-btn">View Statement (PDF)</button>
        <button className="account-action-btn">Download CSV</button>
      </div>

      <div className="account-filters">
        <input
          type="date"
          value={dateFrom}
          onChange={e => setDateFrom(e.target.value)}
          className="account-filter-input"
          placeholder="From"
        />
        <input
          type="date"
          value={dateTo}
          onChange={e => setDateTo(e.target.value)}
          className="account-filter-input"
          placeholder="To"
        />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="account-filter-input"
          placeholder="Search transactions..."
        />
      </div>

      <div className="account-transactions">
        <h3>Transaction History</h3>
        <table className="account-transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length === 0 ? (
              <tr><td colSpan={4} style={{ textAlign: 'center', color: '#888' }}>No transactions found.</td></tr>
            ) : (
              filteredTransactions.map((tx, idx) => (
                <tr key={idx}>
                  <td>{tx.date}</td>
                  <td>{tx.description}</td>
                  <td>{tx.category}</td>
                  <td className={tx.amount < 0 ? 'account-amount-negative' : 'account-amount-positive'}>
                    {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountsPage;
