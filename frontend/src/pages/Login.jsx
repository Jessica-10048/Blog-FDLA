import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // ici tu mettras ton appel API plus tard
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h2 className="login-title">ACCÈS FDLA</h2>
        <p className="login-subtitle">Zone sécurisée — Authentification requise</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">SE CONNECTER</button>
        </form>

        <p className="login-register">
          Pas encore membre ? <Link to="/register">Faire une demande d'accès</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;