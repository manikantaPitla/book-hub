import './index.css'
import {Component} from 'react'
import {AiFillStar} from 'react-icons/ai'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'

const apiStatus = {
  initial: 'INITIAL',
  pending: 'PENDING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class BookDetail extends Component {
  state = {currentApiStatus: apiStatus.initial, bookDetail: []}

  componentDidMount() {
    this.getBookDetail()
  }

  getBookDetail = async () => {
    this.setState({currentApiStatus: apiStatus.pending})
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/book-hub/books/${params.id}`

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      console.log(data.book_details)

      if (response.ok) {
        this.setState({
          bookDetail: data.book_details,
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
    <div
      className="loader-container book-detail-loading-container"
      testid="loader"
    >
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
      <button className="retry-btn" onClick={this.getBookDetail} type="button">
        Try Again
      </button>
    </div>
  )

  renderSuccess = () => {
    const {bookDetail} = this.state

    const data = {
      id: bookDetail.id,
      authorName: bookDetail.author_name,
      aboutAuthor: bookDetail.about_author,
      aboutBook: bookDetail.about_book,
      coverPic: bookDetail.cover_pic,
      title: bookDetail.title,
      rating: bookDetail.rating,
      readStatus: bookDetail.read_status,
    }
    console.log(data)

    return (
      <div className="book-detail-card">
        <div className="book-top-detail-container">
          <img
            className="b-d-book-image"
            src={data.coverPic}
            alt={data.title}
          />
          <div className="book-main-context-container">
            <h1 className="b-d-book-title">{data.title}</h1>
            <p className="b-d-book-author-name">{data.authorName}</p>
            <p className="b-d-book-rating">
              Avg Rating
              <AiFillStar className="star" />
              {data.rating}
            </p>
            <p className="b-d-book-reading-status">
              Status :{' '}
              <span className="d-book-reading-status-active">
                {data.readStatus}
              </span>
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="book-description-container">
          <h1 className="author-book-title">About Author</h1>
          <p className="author-book-description">{data.aboutAuthor}</p>
          <h1 className="author-book-title">About Book</h1>
          <p className="author-book-description">{data.aboutBook}</p>
        </div>
      </div>
    )
  }

  renderBody = () => {
    const {currentApiStatus} = this.state
    console.log(currentApiStatus)
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
      <div className="book-detail-container">
        <Header shelves />
        <div className="book-detail-body">
          {this.renderBody()}
          <Footer />
        </div>
      </div>
    )
  }
}

export default BookDetail
