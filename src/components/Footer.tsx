const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">© 2023 Anant Sharma.</p>
        <p className="footer__text">
          Built with{" "}
          <a
            className="highlight-laravel"
            href="https://react.dev/"
            target="_blank"
          >
            React
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
