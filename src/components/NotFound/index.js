import './index.css'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-img"
      src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696619405/Book%20Hub/not-found-img.png"
      alt="not found"
    />
    <h1 className="page-not-found-title">Page Not Found</h1>
    <p className="page-not-found-description">
      we are sorry, the page you requested could not be found. Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button type="button" className="retry-btn">
        Go Back to Home
      </button>
    </Link>
  </div>
)

export default NotFound
