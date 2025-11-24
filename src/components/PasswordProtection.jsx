// src/components/PasswordProtection.js
import React, { useState, useEffect } from 'react';
import './PasswordProtection.css';

const PasswordProtection = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Mot de passe en dur - Modifiez cette valeur
  const CORRECT_PASSWORD = 'YELLOWJERSEY';
  
  // Clé pour le sessionStorage (expire à la fermeture de l'onglet)
  const AUTH_KEY = 'YELLOWJERSEY';

  useEffect(() => {
    // Vérifier si déjà authentifié dans cette session
    const authStatus = sessionStorage.getItem(AUTH_KEY);
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_KEY, 'true');
    } else {
      setError('Mot de passe incorrect');
      setPassword('');
    }

  };
    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (value === CORRECT_PASSWORD) {
            setIsAuthenticated(true);
            sessionStorage.setItem(AUTH_KEY, 'true');
        }
    }
  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="password-container">
      <div className="password-box">
        
        <form onSubmit={handleSubmit}>
            
          <input
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            autoFocus
            className="password-input"
          />
          {error && <p className="error-message">{error}</p>}
          {/* <button type="submit" className="password-button">
            Login
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default PasswordProtection;