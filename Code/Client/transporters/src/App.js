import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={() => console.log('Signup clicked')}>Signup</button>
      <button onClick={() => console.log('Login clicked')}>Login</button>
    </div>
  );
}

export default App;