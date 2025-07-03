import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === '') {
      setError('Username is required');
    } else {
      setError('');
      alert(`Submitted username: ${username}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}


export default App
