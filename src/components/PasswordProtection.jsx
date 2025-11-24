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
  const AUTH_KEY = 'site_auth';

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

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="password-container">
      <div className="password-box">
        <h1>Accès protégé</h1>
        <p>Veuillez entrer le mot de passe pour accéder au site</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            autoFocus
            className="password-input"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="password-button">
            Accéder
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtection;