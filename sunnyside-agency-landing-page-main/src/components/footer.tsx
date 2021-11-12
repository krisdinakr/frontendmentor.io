export const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__logo"></div>
      <ul className="footer__links">
        <li><a className="footer__link" href="/">About</a></li>
        <li><a className="footer__link" href="/">Services</a></li>
        <li><a className="footer__link" href="/">Projects</a></li>
      </ul>
      <ul className="footer__socials">
        <li>
          <a className="footer__social" href="/">
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a className="footer__social" href="/">
            <i className="fab fa-instagram"></i>  
          </a>
        </li>
        <li>
          <a className="footer__social" href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a className="footer__social" href="/">
            <i className="fab fa-pinterest"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
)
