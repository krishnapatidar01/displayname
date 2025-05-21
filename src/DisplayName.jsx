import React, { useState } from 'react';

function DisplayName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const nameRegex = /^[A-Za-z]+$/; 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: only letters allowed
    if (!nameRegex.test(firstName)) {
      setError("First name should contain only letters and must not start with a number or special character.");
      setFullName("");
      return;
    }

    if (!nameRegex.test(lastName)) {
      setError("Last name should contain only letters and must not start with a number or special character.");
      setFullName("");
      return;
    }

    setFullName(`${firstName} ${lastName}`);
    setError("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <label>First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        /><br/>
        <label>Last Name:</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        /><br/>
        <button type="submit">Submit</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display full name only if available */}
      {fullName && <div>Full Name: {fullName}</div>}
    </div>
  );
}

export default DisplayName;
