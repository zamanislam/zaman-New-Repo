import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const [emails, setEmails] = useState(['']);
  const [errors, setErrors] = useState(['']);

  const handleAddEmail = () => {
    setEmails([...emails, '']);
    setErrors([...errors, '']);
  };

  const handleEmailChange = (index, value) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);

    const updatedErrors = [...errors];
    updatedErrors[index] = validateEmail(value) ? '' : 'Invalid email format';
    setErrors(updatedErrors);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Add Emails</h2>
      {emails.map((email, index) => (
        <div key={index} style={{ marginBottom: '12px' }}>
          <input
            type="email"
            placeholder={`Email ${index + 1}`}
            value={email}
            onChange={(e) => handleEmailChange(index, e.target.value)}
            style={{ padding: '8px', width: '100%' }}
          />
          {errors[index] && (
            <div style={{ color: 'red', fontSize: '12px' }}>{errors[index]}</div>
          )}
        </div>
      ))}
      <button onClick={handleAddEmail} style={{ padding: '10px 16px', marginTop: '10px' }}>
        Add Email
      </button>

      <h3 style={{ marginTop: '30px' }}>Entered Emails:</h3>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email || <i>Empty</i>}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
