import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* FUMÉE SVG */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <filter id="smoke-a" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.008" numOctaves="4" seed="2">
                <animate attributeName="baseFrequency" values="0.012 0.008;0.015 0.010;0.012 0.008" dur="8s" repeatCount="indefinite"/>
              </feTurbulence>
              <feColorMatrix type="matrix" values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.55  0 0 0 0.3 -0.15"/>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="rgba(100,95,115,0.08)" filter="url(#smoke-a)"/>
        </svg>
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
          <defs>
            <filter id="smoke-a2" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.01" numOctaves="3" seed="8">
                <animate attributeName="baseFrequency" values="0.02 0.01;0.018 0.013;0.02 0.01" dur="12s" repeatCount="indefinite"/>
                <animate attributeName="seed" values="8;12;8" dur="20s" repeatCount="indefinite"/>
              </feTurbulence>
              <feColorMatrix type="matrix" values="0 0 0 0 0.4  0 0 0 0 0.4  0 0 0 0 0.45  0 0 0 0.8 -0.3"/>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="rgba(90,85,105,0.08)" filter="url(#smoke-a2)"/>
        </svg>
      </div>

      <div className="scanlines"></div>

      {/* HERO ABOUT */}
      <div className="about-hero">
        <div className="classified-banner">
          <span className="dot"></span>
          <span className="classified-text">DOSSIER — FDLA</span>
          <span className="dot"></span>
        </div>
        <h1 className="about-main-title">Derrière le voile<br/>de l'invisible</h1>
        <div className="divider"></div>
        <p className="about-intro">
          Bienvenue dans l'univers Les Forces de L'Au-delà. Ici, nous explorons les mystères 
          qui nous entourent et transformons ces découvertes en expériences, créations et objets 
          chargés de sens. Entre enquêtes paranormales, énergie spirituelle et savoirs anciens, 
          ce projet crée un pont entre le monde visible et l'invisible.
        </p>
      </div>

      {/* SECTION CAMILLE */}
      <div className="about-section">
          <div className="section-label">L’équipe qui rend tout possible</div>
            <h2 className="section-title">Camille</h2>
              <div className="section-subtitle">Enquêteur des mystères</div>
                <div className="divider"></div>
                  <p className="section-text">
                   Camille, enquêteur du monde invisible basé dans les Pays de la Loire.
                   À travers ces explorations, il étudie les lieux oubliés, les énergies résiduelles 
                   et les phénomènes inexpliqués avec une approche mêlant méthode, respect et ouverture d'esprit.
                   Chaque enquête est menée avec sérieux et sensibilité, à la frontière entre science 
                   et spiritualité. Son objectif est de documenter, comprendre et transmettre ces expériences 
                   pour offrir une vision accessible et authentique du monde invisible.
                   </p>
      
      
            <h2 className="section-title">Thibaud</h2>
              <div className="section-subtitle">Enquêteur paranormal & Monteur vidéo</div>
                <div className="divider"></div>
                  <p className="section-text">
         Thibaud accompagne les explorations sur le terrain en tant qu’enquêteur paranormal, capturant les manifestations et les instants invisibles à l’œil nu. À travers son travail de montage, il donne vie aux enquêtes, transformant chaque expérience en récit visuel immersif, fidèle aux énergies perçues et aux réalités explorées.
        </p>
        
        <h2 className="section-title">Dad</h2>
        <div className="section-subtitle">Responsable modération & Médiateur</div>
        <div className="divider"></div>
        <p className="section-text">
         Dad veille au bon déroulement des échanges au sein de notre communauté, assurant respect, harmonie et équilibre dans nos interactions. Son rôle est de garantir un espace sûr et bienveillant pour tous, où chacun peut explorer et partager ses expériences en toute confiance.</p>
        <p className="section-text">
          Chaque enquête est menée avec sérieux et sensibilité, à la frontière entre science 
          et spiritualité. Mon objectif est de documenter, comprendre et transmettre ces expériences 
          pour offrir une vision accessible et authentique du monde invisible.
        </p>
        <h2 className="section-title">Carla (Papillon de L’Au-delà)</h2>
        <div className="section-subtitle">Responsable documentation & Modération</div>
        <div className="divider"></div>
        <p className="section-text">
         Carla centralise et organise nos découvertes, enquêtes et savoirs anciens. Elle assure également la modération avec douceur et discernement, veillant à ce que nos contenus restent fidèles à l’esprit de Les Forces de L’Au-delà et accessibles à tous.</p>
      
        </div>
      {/* SECTION CRÉATIONS */}
      <div className="about-section about-section--alt">
        <div className="section-label">MISSION</div>
        <h2 className="section-title">Des explorations aux créations</h2>
        <div className="section-subtitle">L'énergie transformée</div>
        <div className="divider"></div>
        <p className="section-text">
          Fort de mes expériences sur le terrain et de ma connexion profonde avec les énergies 
          du monde invisible, j'ai créé Les Forces de L'Au-delà avec une intention claire : 
          transformer l'exploration en création.
        </p>
        <p className="section-text">
          Ma mission est de proposer des objets uniques — bijoux, bougies artisanales et articles 
          ésotériques — imprégnés de symbolisme et d'énergies subtiles. Chaque pièce est pensée 
          pour accompagner, protéger et inspirer.
        </p>

        {/* VALEURS */}
        <div className="values-grid">
          {[
            "Guidance • Écoute • Authenticité",
            "Accompagner avec le cœur et l'âme",
            "Un lien basé sur la confiance et l'énergie",
            "Présence sincère, accompagnement vrai",
            "Marcher ensemble vers l'équilibre"
          ].map((v, i) => (
            <div key={i} className="value-item">
              <span className="value-dot">◆</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TÉMOIGNAGE */}
      <div className="about-section">
        <div className="section-label">TÉMOIGNAGE</div>
        <div className="testimonial">
          <div className="testimonial-quote">"</div>
          <p className="testimonial-text">
            L'approche de Camille et la qualité de ses créations m'ont ouvert les yeux sur 
            un monde nouveau. Une guidance précieuse et des objets chargés d'une belle énergie. 
            Je recommande chaleureusement !
          </p>
          <div className="testimonial-author">— Élodie M.</div>
        </div>
      </div>

      {/* SECTION REJOINDRE */}
      <div className="about-section about-section--alt">
        <div className="section-label">REJOINDRE</div>
        <h2 className="section-title">L'univers Les Forces<br/>de L'Au-delà</h2>
        <div className="divider"></div>
        <p className="section-text">
          L'aventure Les Forces de L'Au-delà continue chaque jour à travers nos enquêtes, 
          nos créations et notre communauté passionnée par les mystères du monde invisible.
          Suivez nos explorations, découvrez nos créations énergétiques et participez à ce projet 
          dédié à la compréhension et à la préservation de l'invisible.
        </p>

        <p className="about-phrase">✨ Ensemble, explorons ce qui se cache au-delà du visible.</p>

        <div className="btn-group-about">
          <button className="btn-primary" onClick={() => navigate("/fdla")}>
            🌐 Découvrir les enquêtes
          </button>
          <button className="btn-secondary">
            🕯️ Boutique spirituelle
          </button>
        </div>
      </div>

      {/* MESSAGE GRATITUDE */}
      <div className="gratitude-section">
        <div className="gratitude-inner">
          <div className="classified-banner" style={{ marginBottom: "28px" }}>
            <span className="dot"></span>
            <span className="classified-text">MESSAGE DU CERCLE</span>
            <span className="dot"></span>
          </div>
          <p className="gratitude-title">✨ Message de gratitude ✨</p>
          <div className="divider"></div>
          <p className="gratitude-text">
            Nous te remercions profondément pour ta commande et pour ton passage dans le Cercle.
            En entrant ici, tu n'es pas simplement client… Tu deviens une âme reliée, un esprit 
            curieux, un gardien du visible et de l'invisible.
          </p>
          <p className="gratitude-text">
            Chaque objet que tu reçois a été choisi, préparé ou consacré avec intention. 
            Que ce que tu as entre les mains t'accompagne, t'élève, et t'ouvre les portes 
            subtiles de ta propre lumière intérieure.
          </p>
          <p className="gratitude-text">
            Merci de faire partie du Cercle. Merci de soutenir la transmission. 
            Merci de marcher entre les mondes avec nous.
          </p>
          <div className="gratitude-signature">
            À très bientôt dans les ombres et la lumière.<br/>
            <span>Camille – Les Forces de l'Au-delà</span>
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

export default About;