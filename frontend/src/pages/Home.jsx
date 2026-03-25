import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="fdla-home">

      {/* SCANLINES */}
      <div className="scanlines"></div>

      {/* CERCLES FOND */}
      <div className="bg-circles">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="hero">

        {/* FUMÉE SVG — uniquement dans le hero */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <filter id="smoke-filter" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.012 0.008"
                  numOctaves="4"
                  seed="2"
                >
                  <animate
                    attributeName="baseFrequency"
                    values="0.012 0.008;0.015 0.010;0.012 0.008"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.5
        0 0 0 0 0.5
        0 0 0 0 0.55
        0 0 0 0.3 -0.15"
                />
              </filter>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="rgba(100,95,115,0.2)"
              filter="url(#smoke-filter)"
            />
          </svg>

          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
            <defs>
              <filter id="smoke-filter2" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.02 0.01"
                  numOctaves="3"
                  seed="8"
                >
                  <animate
                    attributeName="baseFrequency"
                    values="0.02 0.01;0.018 0.013;0.02 0.01"
                    dur="12s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="seed"
                    values="8;12;8"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.4
                          0 0 0 0 0.4
                          0 0 0 0 0.45
                          0 0 0 0.8 -0.3"
                />
              </filter>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="rgba(90,85,105,0.2)"
              filter="url(#smoke-filter2)"
            />
          </svg>
        </div>

        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="classified-banner">
            <span className="dot"></span>
            <span className="classified-text">ACCÈS RESTREINT</span>
            <span className="dot"></span>
          </div>

          <h1 className="hero-title">FDLA</h1>
          <p className="hero-subtitle">Les Forces De L'au-delà</p>

          <div className="divider"></div>

          <p className="hero-desc">
            Certaines vérités ne doivent pas être révélées.<br />
            Ce que vous ne voyez pas… nous le voyons.
          </p>

          <div className="btn-group">
            <button className="btn-primary" onClick={() => navigate("/fdla")}>
              Accéder aux dossiers
            </button>
            <button className="btn-secondary" onClick={() => navigate("/about")}>
              En savoir plus
            </button>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="footer-bar">
        <span className="footer-code">SYSTÈME FDLA — v2.1 — CLASSIFIÉ</span>
        <div className="footer-status">
          <span className="status-dot"></span>
          <span>SYSTÈME ACTIF</span>
        </div>
      </div>

    </div>
  );
};

export default Home;