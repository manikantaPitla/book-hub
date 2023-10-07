import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'
import TopRatedBooks from '../TopRatedBooks'

const apiStatus = {
  initial: 'INITIAL',
  pending: 'PENDING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {topRatedBooksData: [], currentApiStatus: apiStatus.initial}

  componentDidMount() {
    this.getTopRatedBooks()
  }

  getTopRatedBooks = async () => {
    this.setState({currentApiStatus: apiStatus.pending})
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = 'https://apis.ccbp.in/book-hub/top-rated-books'

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        const updatedBooksList = data.books.map(each => ({
          id: each.id,
          authorName: each.author_name,
          coverPic: each.cover_pic,
          title: each.title,
        }))

        this.setState({
          topRatedBooksData: updatedBooksList,
          currentApiStatus: apiStatus.success,
        })
      } else {
        this.setState({currentApiStatus: apiStatus.failure})
      }
    } catch (err) {
      this.setState({currentApiStatus: apiStatus.failure})
    }
  }

  renderSpinner = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
    </div>
  )

  renderFailure = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696500698/Book%20Hub/failure-cat.svg"
        alt="failure img"
        className="failure-img"
      />
      <p className="failure-text">Something went wrong, Please try again.</p>
      <button
        className="retry-btn"
        onClick={this.getTopRatedBooks}
        type="button"
      >
        Try Again
      </button>
    </div>
  )

  renderSuccess = () => {
    const {topRatedBooksData} = this.state
    return (
      <div className="slide-books-slick-container">
        <TopRatedBooks topRatedBooksData={topRatedBooksData} />
      </div>
    )
  }

  renderBody = () => {
    const {currentApiStatus} = this.state

    switch (currentApiStatus) {
      case apiStatus.success:
        return this.renderSuccess()
      case apiStatus.failure:
        return this.renderFailure()
      default:
        return this.renderSpinner()
    }
  }

  render() {
    return (
      <div className="home-container">
        <Header home />
        <div className="home-content">
          <div className="home-text-container">
            <h1 className="home-content-title">
              Find Your Next Favorite Books?
            </h1>
            <p className="home-content-description">
              You are in the right place. Tell us what titles or genres you have
              enjoyed in the past, and we will give you surprisingly insightful
              recommendations.
            </p>
            <button type="button" className="find-books-btn find-book-btn-sm">
              Find Books
            </button>
          </div>
          <div className="slide-books-container">
            <div className="slide-books-title-container">
              <h1 className="slide-books-title">Top Rated Books</h1>
              <button type="button" className="find-books-btn find-book-btn-lg">
                Find Books
              </button>
            </div>
            {this.renderBody()}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
export default Home
