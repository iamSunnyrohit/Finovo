import React, { useState } from 'react';
import './Bills.css';

const mockBillers = [
  { id: 'b1', name: 'Electric Company', account: '**** 1122', type: 'Utility' },
  { id: 'b2', name: 'Water Utility', account: '**** 3344', type: 'Utility' },
  { id: 'b3', name: 'Visa Credit Card', account: '**** 5566', type: 'Credit Card' },
  { id: 'b4', name: 'Internet Provider', account: '**** 7788', type: 'Internet' },
];

const mockPayments = [
  { id: 'p1', biller: 'Electric Company', date: '2024-06-05', amount: 120.00, status: 'Paid' },
  { id: 'p2', biller: 'Visa Credit Card', date: '2024-06-03', amount: 320.00, status: 'Paid' },
  { id: 'p3', biller: 'Water Utility', date: '2024-05-28', amount: 30.00, status: 'Paid' },
  { id: 'p4', biller: 'Internet Provider', date: '2024-05-25', amount: 60.00, status: 'Paid' },
];

const BillsPage = () => {
  const [billers, setBillers] = useState(mockBillers);
  const [payments, setPayments] = useState(mockPayments);
  const [showPayForm, setShowPayForm] = useState(false);
  const [payBiller, setPayBiller] = useState(null);
  const [payAmount, setPayAmount] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBiller, setNewBiller] = useState({ name: '', account: '', type: '' });

  // Payment form handlers
  const openPayForm = (biller) => {
    setPayBiller(biller);
    setPayAmount('');
    setShowPayForm(true);
  };
  const handlePay = (e) => {
    e.preventDefault();
    setPayments([
      { id: 'p' + (payments.length + 1), biller: payBiller.name, date: new Date().toISOString().slice(0, 10), amount: parseFloat(payAmount), status: 'Paid' },
      ...payments,
    ]);
    setShowPayForm(false);
    setPayBiller(null);
    setPayAmount('');
  };

  // Add biller handlers
  const openAddForm = () => {
    setShowAddForm(true);
    setNewBiller({ name: '', account: '', type: '' });
  };
  const handleAddBiller = (e) => {
    e.preventDefault();
    setBillers([
      { id: 'b' + (billers.length + 1), ...newBiller },
      ...billers,
    ]);
    setShowAddForm(false);
    setNewBiller({ name: '', account: '', type: '' });
  };

  return (
    <div className="bills-container">
      <h2 className="bills-header">My Billers</h2>
      <div className="bills-actions">
        <button className="bills-add-btn" onClick={openAddForm}>Add Biller</button>
      </div>
      <div className="bills-list-section">
        <table className="bills-list-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Account</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {billers.map(biller => (
              <tr key={biller.id}>
                <td>{biller.name}</td>
                <td>{biller.account}</td>
                <td>{biller.type}</td>
                <td>
                  <button className="bills-pay-btn" onClick={() => openPayForm(biller)}>Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* One-Time Payment Form */}
      {showPayForm && (
        <div className="bills-modal">
          <div className="bills-modal-content">
            <h3>Pay {payBiller.name}</h3>
            <form onSubmit={handlePay} className="bills-pay-form">
              <div>
                <label>Amount</label>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={payAmount}
                  onChange={e => setPayAmount(e.target.value)}
                  required
                  className="bills-input"
                  placeholder="$0.00"
                />
              </div>
              <div className="bills-modal-actions">
                <button type="button" className="bills-cancel-btn" onClick={() => setShowPayForm(false)}>Cancel</button>
                <button type="submit" className="bills-confirm-btn">Pay</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Biller Form */}
      {showAddForm && (
        <div className="bills-modal">
          <div className="bills-modal-content">
            <h3>Add New Biller</h3>
            <form onSubmit={handleAddBiller} className="bills-add-form">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={newBiller.name}
                  onChange={e => setNewBiller({ ...newBiller, name: e.target.value })}
                  required
                  className="bills-input"
                />
              </div>
              <div>
                <label>Account</label>
                <input
                  type="text"
                  value={newBiller.account}
                  onChange={e => setNewBiller({ ...newBiller, account: e.target.value })}
                  required
                  className="bills-input"
                />
              </div>
              <div>
                <label>Type</label>
                <input
                  type="text"
                  value={newBiller.type}
                  onChange={e => setNewBiller({ ...newBiller, type: e.target.value })}
                  required
                  className="bills-input"
                />
              </div>
              <div className="bills-modal-actions">
                <button type="button" className="bills-cancel-btn" onClick={() => setShowAddForm(false)}>Cancel</button>
                <button type="submit" className="bills-confirm-btn">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bills-history-section">
        <h3>Payment History</h3>
        <table className="bills-history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Biller</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.length === 0 ? (
              <tr><td colSpan={4} style={{ textAlign: 'center', color: '#888' }}>No payments found.</td></tr>
            ) : (
              payments.map(payment => (
                <tr key={payment.id}>
                  <td>{payment.date}</td>
                  <td>{payment.biller}</td>
                  <td>${payment.amount.toFixed(2)}</td>
                  <td>{payment.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillsPage;
