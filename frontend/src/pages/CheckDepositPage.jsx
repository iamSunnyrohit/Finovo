import React, { useState } from 'react';
import './CheckDeposit.css';

const mockAccounts = [
  { id: 'checking', name: 'Checking Account', number: '**** 1234' },
  { id: 'savings', name: 'Savings Account', number: '**** 5678' },
];

const CheckDepositPage = () => {
  const [account, setAccount] = useState('checking');
  const [amount, setAmount] = useState('');
  const [frontImg, setFrontImg] = useState(null);
  const [backImg, setBackImg] = useState(null);
  const [step, setStep] = useState('form'); // 'form' | 'review' | 'done'
  const [aiError, setAiError] = useState('');

  // Simulate AI: If image is missing or file size < 10KB, flag as issue
  const checkImageQuality = (file) => {
    if (!file) return 'No image uploaded.';
    if (file.size < 10000) return 'Image may be too small or blurry.';
    return '';
  };

  // Simulate AI: If amount is empty, pre-fill with a mock value
  const handleFrontImg = (e) => {
    const file = e.target.files[0];
    setFrontImg(file);
    if (!amount) setAmount('123.45'); // Simulate AI reading amount
  };
  const handleBackImg = (e) => {
    const file = e.target.files[0];
    setBackImg(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // AI checks
    const frontErr = checkImageQuality(frontImg);
    const backErr = checkImageQuality(backImg);
    if (frontErr || backErr) {
      setAiError(frontErr || backErr);
      return;
    }
    setAiError('');
    setStep('review');
  };

  const handleConfirm = () => {
    setStep('done');
  };

  const handleBack = () => {
    setStep('form');
  };

  return (
    <div className="checkdeposit-container">
      <h2 className="checkdeposit-header">Deposit a Check</h2>
      {step === 'form' && (
        <form className="checkdeposit-form" onSubmit={handleSubmit}>
          <div className="checkdeposit-row">
            <label>Deposit To</label>
            <select value={account} onChange={e => setAccount(e.target.value)} className="checkdeposit-select">
              {mockAccounts.map(acc => (
                <option key={acc.id} value={acc.id}>{acc.name} {acc.number}</option>
              ))}
            </select>
          </div>
          <div className="checkdeposit-row">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="checkdeposit-input"
              placeholder="$0.00"
              required
            />
          </div>
          <div className="checkdeposit-row">
            <label>Front of Check</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFrontImg}
              className="checkdeposit-file"
              required
            />
            <div className="checkdeposit-instructions">Take a clear photo of the front of the endorsed check.</div>
          </div>
          <div className="checkdeposit-row">
            <label>Back of Check</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleBackImg}
              className="checkdeposit-file"
              required
            />
            <div className="checkdeposit-instructions">Take a clear photo of the back of the endorsed check.</div>
          </div>
          {aiError && <div className="checkdeposit-aierror">{aiError}</div>}
          <button className="checkdeposit-submit-btn" type="submit">Review & Confirm</button>
        </form>
      )}
      {step === 'review' && (
        <div className="checkdeposit-review">
          <h3>Review Your Deposit</h3>
          <div className="checkdeposit-review-details">
            <div><strong>Deposit To:</strong> {mockAccounts.find(acc => acc.id === account)?.name} {mockAccounts.find(acc => acc.id === account)?.number}</div>
            <div><strong>Amount:</strong> ${parseFloat(amount).toFixed(2)}</div>
            <div className="checkdeposit-review-images">
              <div>
                <div className="checkdeposit-review-label">Front of Check</div>
                {frontImg && <img src={URL.createObjectURL(frontImg)} alt="Front of check" className="checkdeposit-review-img" />}
              </div>
              <div>
                <div className="checkdeposit-review-label">Back of Check</div>
                {backImg && <img src={URL.createObjectURL(backImg)} alt="Back of check" className="checkdeposit-review-img" />}
              </div>
            </div>
          </div>
          <div className="checkdeposit-review-actions">
            <button className="checkdeposit-back-btn" onClick={handleBack}>Back</button>
            <button className="checkdeposit-confirm-btn" onClick={handleConfirm}>Submit Deposit</button>
          </div>
        </div>
      )}
      {step === 'done' && (
        <div className="checkdeposit-done">
          <h3>Deposit Submitted!</h3>
          <p>Your check deposit is being processed. Funds will be available soon.</p>
        </div>
      )}
    </div>
  );
};

export default CheckDepositPage;
