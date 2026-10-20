import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Weather data by{" "}
          <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">
            Open-Meteo
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
