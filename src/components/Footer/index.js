import './index.css'
import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-icons ">
      <FaGoogle className="footer-icon-item" />
      <FaTwitter className="footer-icon-item" />
      <FaInstagram className="footer-icon-item" />
      <FaYoutube className="footer-icon-item" />
    </div>
    <p className="footer-contact-text">Contact us</p>
  </div>
)

export default Footer
