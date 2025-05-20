import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="social-links">
          <a href="https://www.linkedin.com/in/nestor-jacinto-17763a22a/" className="text-white">LinkedIn</a>
          <a href="https://github.com/nest-quick" className="text-white">GitHub</a>
        </div>
        <p>&copy;{new Date().getFullYear()} Nestor Jacinto. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
