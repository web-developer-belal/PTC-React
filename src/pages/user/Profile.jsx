import React, { useState } from 'react';
import { FaEdit, FaSave, FaSpinner } from 'react-icons/fa';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Placeholder user data
  const [formData, setFormData] = useState({
    avatar: 'https://placehold.co/100',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '1234567890',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsEditing(false);
      alert('Profile updated!');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {!isEditing ? (
        // Display Profile Info
        <div className="card bg-base-100 shadow">
          <div className="card-body flex flex-col sm:flex-row items-center gap-6">
            <img src={formData.avatar} alt="Avatar" className="w-24 h-24 rounded-full border" />
            <div className="flex-1 space-y-1">
              <h2 className="text-xl font-bold">
                {formData.firstName} {formData.lastName}
              </h2>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.phone}</p>
            </div>
            <button onClick={() => setIsEditing(true)} className="btn btn-outline btn-primary mt-4 sm:mt-0">
              <FaEdit className="mr-2" /> Edit
            </button>
          </div>
        </div>
      ) : (
        // Edit Form
        <form onSubmit={handleSubmit} className="card bg-base-100 shadow p-6 space-y-4">
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={formData.avatar} alt="Avatar" />
              </div>
            </div>
          </div>

          {/* 2-column form layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="input input-bordered w-full" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="input input-bordered w-full" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input input-bordered w-full" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="input input-bordered w-full" required />
          </div>

          {/* Toggleable password change */}
          <div>
            <button
              type="button"
              onClick={() => setChangePassword((prev) => !prev)}
              className="btn btn-sm btn-outline mt-2"
            >
              {changePassword ? 'Cancel Password Change' : 'Change Password'}
            </button>

            {changePassword && (
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="New Password"
                className="input input-bordered w-full mt-2"
              />
            )}
          </div>

          {/* Submit + Loading Spinner */}
          <div className="flex justify-end gap-2">
            <button onClick={()=>setIsEditing(false)} className="btn btn-warning">Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <>
                  <FaSave className="mr-2" /> Save
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
