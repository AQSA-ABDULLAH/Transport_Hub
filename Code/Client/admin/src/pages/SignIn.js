import React, { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('aqsaabdullah38403@gmail.com');
  const [password, setPassword] = useState('12345');

  const handleSignIn = async () => {
 
  };

  return (
    <div>
      <h1>Admin Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;