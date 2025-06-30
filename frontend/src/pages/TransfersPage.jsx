import React, { useState } from 'react';
import './Transfer.css';

const mockAccounts = [
  { id: 'checking', name: 'Checking Account', number: '**** 1234' },
  { id: 'savings', name: 'Savings Account', number: '**** 5678' },
  { id: 'credit', name: 'Credit Card', number: '**** 9012' },
  { id: 'external', name: 'External Bank (ACH)', number: '**** 0000' },
];

const mockSuggestedRecipients = [
  { id: 'fav1', name: 'Jane Doe', bank: 'Bank of America', number: '**** 4321' },
  { id: 'fav2', name: 'My Savings', bank: 'Finovo', number: '**** 5678' },
  { id: 'fav3', name: 'Landlord', bank: 'Chase', number: '**** 8765' },
];

const TransfersPage = () => {
  const [from, setFrom] = useState('checking');
  const [to, setTo] = useState('savings');
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  const handleSuggestedClick = (recipient) => {
    setTo('external');
    setSelectedRecipient(recipient);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    // Here you would execute the transfer
    alert('Transfer executed!');
    setShowConfirm(false);
    setAmount('');
    setMemo('');
    setSelectedRecipient(null);
  };

  const handleBack = () => {
    setShowConfirm(false);
  };

  return (
    <div className="transfer-container">
      <h2 className="transfer-header">Transfer Funds</h2>
      {!showConfirm ? (
        <form className="transfer-form" onSubmit={handleSubmit}>
          <div className="transfer-row">
            <label>From Account</label>
            <select value={from} onChange={e => setFrom(e.target.value)} className="transfer-select">
              {mockAccounts.map(acc => (
                <option key={acc.id} value={acc.id}>{acc.name} {acc.number}</option>
              ))}
            </select>
          </div>
          <div className="transfer-row">
            <label>To Account</label>
            <select value={to} onChange={e => { setTo(e.target.value); setSelectedRecipient(null); }} className="transfer-select">
              {mockAccounts.map(acc => (
                <option key={acc.id} value={acc.id}>{acc.name} {acc.number}</option>
              ))}
            </select>
          </div>
          <div className="transfer-row">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="transfer-input"
              placeholder="$0.00"
              required
            />
          </div>
          <div className="transfer-row">
            <label>Memo (optional)</label>
            <input
              type="text"
              value={memo}
              onChange={e => setMemo(e.target.value)}
              className="transfer-input"
              placeholder="Add a note..."
            />
          </div>

          <div className="transfer-suggested">
            <div className="transfer-suggested-title">Suggested Recipients</div>
            <div className="transfer-suggested-list">
              {mockSuggestedRecipients.map(rec => (
                <button
                  type="button"
                  key={rec.id}
                  className="transfer-suggested-btn"
                  onClick={() => handleSuggestedClick(rec)}
                >
                  <div className="transfer-suggested-name">{rec.name}</div>
                  <div className="transfer-suggested-bank">{rec.bank} {rec.number}</div>
                </button>
              ))}
            </div>
          </div>

          <button className="transfer-submit-btn" type="submit">Continue</button>
        </form>
      ) : (
        <div className="transfer-confirm">
          <h3>Confirm Transfer</h3>
          <div className="transfer-confirm-details">
            <div><strong>From:</strong> {mockAccounts.find(acc => acc.id === from)?.name} {mockAccounts.find(acc => acc.id === from)?.number}</div>
            <div><strong>To:</strong> {selectedRecipient ? `${selectedRecipient.name} (${selectedRecipient.bank} ${selectedRecipient.number})` : `${mockAccounts.find(acc => acc.id === to)?.name} ${mockAccounts.find(acc => acc.id === to)?.number}`}</div>
            <div><strong>Amount:</strong> ${parseFloat(amount).toFixed(2)}</div>
            {memo && <div><strong>Memo:</strong> {memo}</div>}
          </div>
          <div className="transfer-confirm-actions">
            <button className="transfer-back-btn" onClick={handleBack}>Back</button>
            <button className="transfer-confirm-btn" onClick={handleConfirm}>Confirm & Transfer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransfersPage;
