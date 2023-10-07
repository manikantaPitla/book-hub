import './index.css'

const socialIcons = [
  {
    id: 1,
    icon:
      'https://res.cloudinary.com/df9fyawpk/image/upload/v1696497846/Book%20Hub/google-icon.svg',
  },
  {
    id: 2,
    icon:
      'https://res.cloudinary.com/df9fyawpk/image/upload/v1696497846/Book%20Hub/twitter-icon.svg',
  },
  {
    id: 3,
    icon:
      'https://res.cloudinary.com/df9fyawpk/image/upload/v1696497846/Book%20Hub/instagram-icon.svg',
  },
  {
    id: 4,
    icon:
      'https://res.cloudinary.com/df9fyawpk/image/upload/v1696497846/Book%20Hub/youtube-icon.svg',
  },
]

const Footer = () => (
  <div className="footer-container">
    <ul className="footer-icons">
      {socialIcons.map(each => (
        <li key={each.id}>
          <img className="footer-icon-item" src={each.icon} alt="social-icon" />
        </li>
      ))}
    </ul>
    <p className="footer-contact-text">Contact Us</p>
  </div>
)

export default Footer
