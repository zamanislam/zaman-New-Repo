import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
       const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredValue = inputRef.current.value;

    if (enteredValue.trim() === '') {
      alert('Input is required');
    } else {
      alert(`Submitted: ${enteredValue}`);
    }

    // Clear the input after submission
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Text:
        <input type="text" ref={inputRef} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );

}

export default App
