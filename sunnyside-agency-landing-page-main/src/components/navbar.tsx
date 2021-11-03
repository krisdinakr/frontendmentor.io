export const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__wrapper">
      <a href="/" className="navbar__brand">sunnyside</a>
      <div className="navbar__collapse">
        <div className="navbar__links">
          <a href="/" className="navbar__link">About</a>
          <a href="/" className="navbar__link">Services</a>
          <a href="/" className="navbar__link">Projects</a>
        </div>
        <button className="navbar__cta"><a href="/">Contact</a></button>
      </div>
    </div>
  </nav>
);
