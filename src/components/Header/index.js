import './index.css'
import {Component} from 'react'
import {FaMoon} from 'react-icons/fa'
import {AiFillCloseCircle, AiOutlineMenu} from 'react-icons/ai'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

class Header extends Component {
  state = {isNavLinksVisible: false}

  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({isNavLinksVisible: false})
    }
  }

  toggleDarkMode = () => {
    const main = document.querySelector('.main')
    main.classList.toggle('dark-mode')
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
        <Link to="/">
          <img
            className="header-website-logo"
            src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696434886/Book%20Hub/bookhub-web-logo.svg"
            alt="website logo"
          />
        </Link>
        <div className="nav-menu-container">
          <button
            type="button"
            className="menu-close-btn"
            onClick={this.onClickMenu}
          >
            <AiOutlineMenu className="menu-icon" />
          </button>
        </div>
        <ul className="nav-links-lg">
          <li>
            <Link to="/">
              <p className={`nav-link-item ${isHomeActive}`}>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/shelf">
              <p className={`nav-link-item ${isShelvesActive}`}>Bookshelves</p>
            </Link>
          </li>
          <li>
            <button
              className="theme-btn"
              type="button"
              onClick={this.toggleDarkMode}
            >
              <FaMoon className="nav-link-item" />
            </button>
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
              <Link to="/shelf">
                <p className="nav-link-item">Bookshelves</p>
              </Link>
            </li>
            <li>
              <button
                className="theme-btn"
                type="button"
                onClick={this.toggleDarkMode}
              >
                <FaMoon className="nav-link-item" />
              </button>
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
                <AiFillCloseCircle className="menu-close-icon" />
              </button>
            </li>
          </ul>
        )}
      </div>
    )
  }
}

export default withRouter(Header)
