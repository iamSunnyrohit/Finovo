import React, { useState } from 'react';
import './Profile.css';

const mockUser = {
  name: 'Alex Johnson',
  address: '123 Main St, Springfield, IL 62704',
  phone: '(555) 123-4567',
  email: 'alex.johnson@email.com',
  marketing: true,
  profilePic: null,
};

const ProfilePage = () => {
  const [user, setUser] = useState(mockUser);
  const [edit, setEdit] = useState(false);
  const [picPreview, setPicPreview] = useState(null);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePicChange = e => {
    const file = e.target.files[0];
    setUser(prev => ({ ...prev, profilePic: file }));
    setPicPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleEdit = () => setEdit(true);
  const handleCancel = () => {
    setUser(mockUser);
    setPicPreview(null);
    setEdit(false);
  };
  const handleSave = e => {
    e.preventDefault();
    setEdit(false);
    // Here you would send updated data to backend
    alert('Profile updated!');
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">My Profile</h2>
      <form className="profile-form" onSubmit={handleSave}>
        <div className="profile-pic-section">
          <img
            src={picPreview || user.profilePic ? (picPreview || URL.createObjectURL(user.profilePic)) : 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name)}
            alt="Profile"
            className="profile-pic"
          />
          {edit && (
            <input type="file" accept="image/*" onChange={handlePicChange} className="profile-pic-input" />
          )}
        </div>
        <div className="profile-fields">
          <div className="profile-row">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="profile-input"
              disabled={!edit}
              required
            />
          </div>
          <div className="profile-row">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="profile-input"
              disabled={!edit}
              required
            />
          </div>
          <div className="profile-row">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="profile-input"
              disabled={!edit}
              required
            />
          </div>
          <div className="profile-row">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="profile-input"
              disabled={!edit}
              required
            />
          </div>
          <div className="profile-row">
            <label className="profile-checkbox-label">
              <input
                type="checkbox"
                name="marketing"
                checked={user.marketing}
                onChange={handleChange}
                disabled={!edit}
              />
              Receive marketing communications
            </label>
          </div>
        </div>
        <div className="profile-actions">
          {!edit ? (
            <button type="button" className="profile-edit-btn" onClick={handleEdit}>Edit</button>
          ) : (
            <>
              <button type="button" className="profile-cancel-btn" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="profile-save-btn">Save</button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
