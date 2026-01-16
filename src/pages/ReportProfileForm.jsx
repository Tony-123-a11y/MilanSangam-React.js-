import React, { useState } from 'react';

const ReportProfileForm = ({ reportedUserId }) => {
  const [formData, setFormData] = useState({
    userId: reportedUserId || '',
    name: '',
    location: '',
    age: '',
    maritalStatus: '',
    mobileNumber: '',
    reason: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace this with your actual API call
      await fetch('/api/report-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Report submission failed', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 bg-amber-50 text-amber-700 border border-amber-300 rounded-md">
        Thank you for reporting. We'll review this profile shortly.
      </div>
    );
  }

  return (
   <div className="min-h-screen flex items-center justify-center py-10">
     <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6   bg-white rounded shadow border border-amber-200">
      <h2 className="text-2xl font-bold text-amber-700 mb-4">Report Fake or Fraud Profile</h2>

      <input
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        placeholder="UserID of the person"
        className="w-full p-2 border border-amber-300 rounded mb-4"
        required
      />
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name of the Person"
        className="w-full p-2 border border-amber-300 rounded mb-4"
        required
      />

      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location / City"
        className="w-full p-2 border border-amber-300 rounded mb-4"
        required
      />

      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        className="w-full p-2 border border-amber-300 rounded mb-4"
        required
      />

      <select
        name="maritalStatus"
        value={formData.maritalStatus}
        onChange={handleChange}
        className="w-full p-2 border border-amber-300 rounded mb-4"
        required
      >
        <option value="">Marital Status</option>
        <option value="Never Married">Never Married</option>
        <option value="Divorced">Divorced</option>
        <option value="Widowed">Widowed</option>
        <option value="Separated">Separated</option>
      </select>

      <input
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        placeholder="Mobile Number"
        className="w-full p-2 border border-amber-300 rounded mb-4"
        required
      />

      <textarea
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        placeholder="Reason for reporting"
        rows={4}
        className="w-full p-2 border border-amber-300 rounded mb-4"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-600 text-white font-semibold py-2 px-4 rounded hover:bg-amber-700 transition"
      >
        {loading ? 'Submitting...' : 'Submit Report'}
      </button>
    </form>
   </div>
  );
};

export default ReportProfileForm;
