import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login'
import { getTokenFromUrl } from './components/spotify';

function App() {
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log(token);
  }, [])

  return (
    <div className="app">
      <Login/>
    </div>
  );
}

export default App;
