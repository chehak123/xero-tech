import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© Xero Technologies ${new Date().getFullYear()}`}
    </span>
    <Link secondary className="footer__link" href="/humans.txt" target="_self">
      Crafted by Hamish Williams
    </Link>
  </footer>
);

export default Footer;
