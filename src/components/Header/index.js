import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

class Header extends Component {
  state = {isNavLinksVisible: false}

  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({isNavLinksVisible: false})
    }
  }

  logout = () => {
    Cookies.remove('jwt_token')

    const {history} = this.props
    history.replace('/login')
  }

  onClickMenu = () => {
    this.setState(prevState => ({
      isNavLinksVisible: !prevState.isNavLinksVisible,
    }))
  }

  render() {
    const {home, shelves} = this.props

    const isHomeActive = home && 'active-tab'
    const isShelvesActive = shelves && 'active-tab'

    const {isNavLinksVisible} = this.state
    return (
      <div className="header-container">
        <img
          className="header-website-logo"
          src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696434886/Book%20Hub/bookhub-web-logo.svg"
          alt="website logo"
        />
        <div className="nav-menu-container">
          <button
            type="button"
            className="menu-close-btn"
            onClick={this.onClickMenu}
          >
            <img
              className="menu-icon"
              src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696486450/Book%20Hub/menu-icon.svg"
              alt="menu-icon"
            />
          </button>
        </div>
        <ul className="nav-links-lg">
          <li>
            <Link to="/">
              <p className={`nav-link-item ${isHomeActive}`}>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/book-shelves">
              <p className={`nav-link-item ${isShelvesActive}`}>Bookshelves</p>
            </Link>
          </li>
          <li>
            <button
              className="nav-link-item logout-btn"
              type="button"
              onClick={this.logout}
            >
              Logout
            </button>
          </li>
        </ul>
        {isNavLinksVisible && (
          <ul className="nav-links">
            <li>
              <Link to="/">
                <p className="nav-link-item">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/book-shelves">
                <p className="nav-link-item">Bookshelves</p>
              </Link>
            </li>
            <li>
              <button
                className="nav-link-item logout-btn"
                type="button"
                onClick={this.logout}
              >
                Logout
              </button>
            </li>
            <li className="close-btn-element">
              <button
                type="button"
                className="menu-close-btn"
                onClick={this.onClickMenu}
              >
                <img
                  src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696489738/Book%20Hub/close-icon.svg"
                  alt="close icon"
                />
              </button>
            </li>
          </ul>
        )}
      </div>
    )
  }
}

export default withRouter(Header)
