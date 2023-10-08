import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {username: '', password: '', isErrorOccur: false, errorMessage: ''}

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  login = async e => {
    e.preventDefault()
    this.setState({isErrorOccur: false, errorMessage: ''})

    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        const twtToken = data.jwt_token
        Cookies.set('jwt_token', twtToken, {expires: 10})

        this.setState({username: '', password: ''})

        const {history} = this.props
        history.replace('/')
      } else {
        const errorMsg = data.error_msg
        this.setState({isErrorOccur: true, errorMessage: errorMsg})
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {errorMessage, isErrorOccur, username, password} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <img
          className="login-page-image-lg"
          src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696420594/Book%20Hub/login-page-img-lg.png"
          alt="login page poster"
        />
        <img
          className="login-page-image-sm"
          src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696420594/Book%20Hub/login-page-img-sm.png"
          alt="website login"
        />
        <div className="form-main-container">
          <form className="form-card" onSubmit={this.login}>
            <img
              className="website-logo"
              src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696434886/Book%20Hub/bookhub-web-logo.svg"
              alt="login website logo"
            />
            <div className="input-elements">
              <label className="label-text" htmlFor="input-username">
                Username*
              </label>
              <input
                className="input-element"
                id="input-username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-elements">
              <label className="label-text" htmlFor="input-password">
                Password*
              </label>
              <input
                className="input-element"
                id="input-password"
                type="Password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
              {isErrorOccur && <p className="error-message">{errorMessage}</p>}
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
