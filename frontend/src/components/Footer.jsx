import React from "react";
import "../styles/style.css";

const Footer = () => {
  return (
    <footer className="fdla-footer">
      <div className="footer-content">

        <div className="footer-left">
          <h3 className="footer-logo">FDLA</h3>
          <p className="footer-text">
            Les Forces De L'au-delà 
          </p>
        </div>

        <div className="footer-socials">
          <a href="https://www.facebook.com/lesforcesdelaudela1/about?locale=fr_FR" target="_blank" rel="noreferrer">Facebook</a>

          <a href="https://www.instagram.com/lesforcesdelaudela/" target="_blank" rel="noreferrer">Instagram</a>

          <a href="https://www.tiktok.com/@lesforcesdelaudela" target="_blank" rel="noreferrer">TikTok</a>

          <a href="https://www.threads.com/@lesforcesdelaudela" target="_blank" rel="noreferrer">Threads</a>

          <a href="https://www.x.com/Lforcesdelodela" target="_blank" rel="noreferrer">X</a>

          <a href="https://www.twitch.tv/lesforcesdelaudela" target="_blank" rel="noreferrer">Twitch</a>

          <a href="https://www.helloasso.com/associations/les-forces-de-l-au-dela" target="_blank" rel="noreferrer">HelloAsso</a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2025 FDLA — Tous droits réservés</span>
      </div>


    </footer>
    
  );
};

export default Footer;
