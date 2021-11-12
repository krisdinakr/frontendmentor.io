import { useState } from 'react';
import menu from 'assets/images/icon-hamburger.svg';
import logo from 'assets/images/logo.svg';

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
  <nav className="navbar">
    <div className="navbar__wrapper">
      <a href="/" className="navbar__brand"><img src={logo} alt="Sunnyside Agency" /></a>
      <div className={`navbar__collapse ${isClicked && 'show'}`}>
        <div className="navbar__links">
          <a href="/" className="navbar__link">About</a>
          <a href="/" className="navbar__link">Services</a>
          <a href="/" className="navbar__link">Projects</a>
        </div>
        <button className="navbar__cta"><a href="/">Contact</a></button>
      </div>
      <button className="navbar__toggle" onClick={() => setIsClicked(!isClicked)}>
        <img src={menu} alt="menu icon" />
      </button>
    </div>
  </nav>
)};
