import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const fakeDossiers = [
  {
    id: 1,
    code: "FDLA-001",
    lieu: "Manoir des Brumes",
    zone: "Pays de la Loire — Secteur Nord",
    description: "Ancien manoir du XIXe siècle, abandonné depuis 1987. Activité résiduelle détectée.",
    status: "ACTIF",
    articles: [
      {
        id: 101,
        title: "Première reconnaissance du site",
        date: "12 Jan 2024",
        category: "Exploration",
        extrait: "Lors de notre première visite, des anomalies électromagnétiques ont été relevées dans l'aile ouest du bâtiment...",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80"
      },
      {
        id: 102,
        title: "Enregistrement EVP — Nuit du 15",
        date: "16 Jan 2024",
        category: "Audio",
        extrait: "Trois captations vocales inexpliquées ont été isolées entre 02h00 et 03h30. Analyse en cours...",
        image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&q=80"
      },
      {
        id: 103,
        title: "Analyse des relevés thermiques",
        date: "20 Jan 2024",
        category: "Analyse",
        extrait: "Les caméras thermiques ont révélé des zones froides persistantes non justifiées par l'architecture...",
        image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&q=80"
      }
    ]
  },
  {
    id: 2,
    code: "FDLA-002",
    lieu: "Chapelle Oubliée",
    zone: "Région Ouest — Zone Eclipse",
    description: "Chapelle désacralisée du XVIe siècle. Témoignages de phénomènes lumineux rapportés.",
    status: "CLASSIFIÉ",
    articles: [
      {
        id: 201,
        title: "Témoignage d'une famille locale",
        date: "3 Fév 2024",
        category: "Témoignage",
        extrait: "Une famille résidant à proximité rapporte des lumières inexpliquées chaque nuit depuis octobre...",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80"
      },
      {
        id: 202,
        title: "Investigation nocturne — Phase 1",
        date: "10 Fév 2024",
        category: "Exploration",
        extrait: "Équipe déployée à 23h00. Détection d'infrasons récurrents dans la nef principale...",
        image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&q=80"
      }
    ]
  },
  {
    id: 3,
    code: "FDLA-003",
    lieu: "Usine Fantôme",
    zone: "Secteur Industriel — Zone X17",
    description: "Ancienne usine textile fermée en 1972. Présences résiduelles multiples signalées.",
    status: "EN COURS",
    articles: [
      {
        id: 301,
        title: "Phénomènes auditifs récurrents",
        date: "5 Mar 2024",
        category: "Audio",
        extrait: "Des sons mécaniques ont été captés alors que toute machinerie a été démantelée depuis 50 ans...",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80"
      }
    ]
  }
];

const statusColors = {
  "ACTIF":     { color: "#2ecc71", border: "rgba(46,204,113,0.3)" },
  "CLASSIFIÉ": { color: "#c0392b", border: "rgba(192,57,43,0.3)" },
  "EN COURS":  { color: "#d4af37", border: "rgba(212,175,55,0.3)" }
};

const Fdla = () => {
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate();

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="dossiers-page">

      {/* FUMÉE */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
        <svg width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
          <defs>
            <filter id="smoke-d" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.008" numOctaves="4" seed="5">
                <animate attributeName="baseFrequency" values="0.012 0.008;0.015 0.010;0.012 0.008" dur="8s" repeatCount="indefinite"/>
              </feTurbulence>
              <feColorMatrix type="matrix" values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.55  0 0 0 0.3 -0.15"/>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="rgba(100,95,115,0.08)" filter="url(#smoke-d)"/>
        </svg>
      </div>

      <div className="scanlines"></div>

      {/* HEADER */}
      <div className="dossiers-header">
        <div className="classified-banner">
          <span className="dot"></span>
          <span className="classified-text">BASE DE DONNÉES — FDLA</span>
          <span className="dot"></span>
        </div>
        <h1 className="dossiers-title">Dossiers d'Enquête</h1>
        <div className="divider"></div>
        <p className="dossiers-subtitle">
          {fakeDossiers.length} lieux répertoriés — Accès restreint
        </p>
      </div>

      {/* LISTE DES LIEUX */}
      <div className="dossiers-list">
        {fakeDossiers.map((dossier) => {
          const isOpen = openId === dossier.id;
          const sc = statusColors[dossier.status];

          return (
            <div key={dossier.id} className={`lieu-block ${isOpen ? "lieu-block--open" : ""}`}>

              {/* EN-TÊTE DU LIEU */}
              <div className="lieu-header" onClick={() => toggle(dossier.id)}>
                <div className="lieu-header-left">
                  <span className="lieu-code">{dossier.code}</span>
                  <div>
                    <h2 className="lieu-name">{dossier.lieu}</h2>
                    <p className="lieu-zone">{dossier.zone}</p>
                  </div>
                </div>
                <div className="lieu-header-right">
                  <span
                    className="lieu-status"
                    style={{ color: sc.color, borderColor: sc.border }}
                  >
                    ● {dossier.status}
                  </span>
                  <span className="lieu-count">{dossier.articles.length} rapport{dossier.articles.length > 1 ? "s" : ""}</span>
                  <span className="lieu-arrow">{isOpen ? "▲" : "▼"}</span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="lieu-desc">{dossier.description}</p>

              {/* ARTICLES — s'affichent si ouvert */}
              {isOpen && (
                <div className="articles-grid">
                  {dossier.articles.map((article) => (
                    <div
                      key={article.id}
                      className="article-card"
                      onClick={() => navigate(`/fdla/${article.id}`)}
                    >
                      <div className="article-img-wrap">
                        <img src={article.image} alt={article.title} className="article-img"/>
                        <span className="article-category">{article.category}</span>
                      </div>
                      <div className="article-body">
                        <p className="article-date">{article.date}</p>
                        <h3 className="article-title">{article.title}</h3>
                        <p className="article-extrait">{article.extrait}</p>
                        <button className="article-btn">Lire le rapport →</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          );
        })}
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

export default Fdla;