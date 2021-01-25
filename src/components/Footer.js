import React from "react";
import "./Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <div>Copyright &copy; {currentYear} Trvl | All Rights Reserved </div>
          <nav>
            <ul className="footer__list lists">
              <li className="footer_link">home</li>
              <li className="footer_link">about</li>
              <li className="footer_link">destinations</li>
              <li className="footer_link">faq</li>
              <li className="footer_link">privacy policy</li>
              <li className="footer_link">contact</li>
            </ul>
          </nav>
          <span>
            <i className="fab fa-typo3"></i>
          </span>
          <ul className="socal__list lists">
            <li className="footer_link">
              <span className="footer-social-link">
                <i className="fab fa-twitter-square"></i>
              </span>
            </li>
            <li className="footer_link">
              <span className="footer-social-link">
                <i className="fab fa-facebook-square"></i>
              </span>
            </li>
            <li className="footer_link">
              <span className="footer-social-link">
                <i className="fab fa-youtube-square"></i>
              </span>
            </li>
            <li className="footer_link">
              <span className="footer-social-link">
                <i class="fab fa-snapchat-square"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
