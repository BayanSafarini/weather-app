import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__logo" href="/">
          🌤️ SkyCast
        </a>
        <nav className="header__nav">
          <a href="#current">Today</a>
          <a href="#forecast">Forecast</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
