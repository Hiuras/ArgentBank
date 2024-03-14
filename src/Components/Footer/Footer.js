function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer">
          <p className="footer-text">
          Copyright {currentYear} Argent Bank
          </p>
        </footer>
        </div>
    )
}

export default Footer;