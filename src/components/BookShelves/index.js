import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import BookItem from '../BookItem'
import Footer from '../Footer'

import './index.css'

const bookshelvesList = [
  {
    id: '22526c8e-680e-4419-a041-b05cc239ece4',
    value: 'ALL',
    label: 'All',
  },
  {
    id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
    value: 'READ',
    label: 'Read',
  },
  {
    id: '2ab42512-3d05-4fba-8191-5122175b154e',
    value: 'CURRENTLY_READING',
    label: 'Currently Reading',
  },
  {
    id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
    value: 'WANT_TO_READ',
    label: 'Want to Read',
  },
]

const apiStatus = {
  initial: 'INITIAL',
  pending: 'PENDING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class BookShelves extends Component {
  state = {
    activeShelve: bookshelvesList[0].value,
    currentApiStatus: apiStatus.initial,
    searchInput: '',
    booksList: [],
    currentShelve: bookshelvesList[0].label,
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = async () => {
    this.setState({currentApiStatus: apiStatus.pending})

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const {activeShelve, searchInput} = this.state

    try {
      const apiUrl = `https://apis.ccbp.in/book-hub/books?shelf=${activeShelve}&search=${searchInput}`

      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const data = await response.json()

        const updatedDataList = data.books.map(each => ({
          id: each.id,
          title: each.title,
          authorName: each.author_name,
          rating: each.rating,
          readStatus: each.read_status,
          coverPic: each.cover_pic,
        }))

        this.setState({
          currentApiStatus: apiStatus.success,
          booksList: updatedDataList,
        })
      } else {
        this.setState({currentApiStatus: apiStatus.failure})
      }
    } catch (err) {
      this.setState({currentApiStatus: apiStatus.failure})
    }
  }

  onClickChangeActiveShelve = (tab, label) => {
    this.setState({activeShelve: tab, currentShelve: label}, this.getAllBooks)
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  onClickSearchBtn = () => {
    this.getAllBooks()
  }

  renderSpinner = () => (
    <div className="loader-container book-shelves-loader" testid="loader">
      <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
    </div>
  )

  renderFailure = () => (
    <div className="failure-container book-shelves-failure-container">
      <img
        src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696500698/Book%20Hub/failure-cat.svg"
        alt="failure view"
        className="failure-img"
      />
      <p className="failure-text">Something went wrong, Please try again.</p>
      <button className="retry-btn" onClick={this.getAllBooks} type="button">
        Try Again
      </button>
    </div>
  )

  renderNoSearchResults = () => {
    const {searchInput} = this.state

    return (
      <div className="failure-container">
        <img
          className="failure-img"
          src="https://res.cloudinary.com/df9fyawpk/image/upload/v1696676268/Book%20Hub/no-results-found-png.png"
          alt="no books"
        />
        <p className="failure-text">
          Your search for {searchInput} did not find any matches.
        </p>
      </div>
    )
  }

  renderSuccess = () => {
    const {booksList} = this.state

    return (
      <>
        {booksList.length === 0
          ? this.renderNoSearchResults()
          : booksList.map(each => <BookItem key={each.id} booksList={each} />)}
      </>
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
    const {activeShelve, searchInput, currentShelve} = this.state

    return (
      <div className="book-shelves-container">
        <Header shelves />
        <div className="book-shelves-content-container">
          <div className="book-shelves-responsive-wrapper">
            {/* <div className="search-container search-container-sm">
              <input
                className="search-input"
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <button
                type="button"
                className="search-btn"
                onClick={this.onClickSearchBtn}
                testid="searchButton"
              >
                <BsSearch className="search-icon" />
              </button>
            </div> */}
            <div className="book-shelves-sidebar">
              <h1 className="book-shelves-title">Bookshelves</h1>
              <ul className="book-shelve-list">
                {bookshelvesList.map(each => (
                  <li className="book-shelve-list-item-wrapper" key={each.id}>
                    <button
                      className={`book-shelve-list-item ${
                        each.value === activeShelve && 'active-shelve'
                      }`}
                      type="button"
                      onClick={() =>
                        this.onClickChangeActiveShelve(each.value, each.label)
                      }
                    >
                      {each.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="book-display-responsive-container">
              <div className="book-display-top-section">
                <h1 className="all-books-title">{`${currentShelve} Books`}</h1>
                <div className="search-container search-container-lg">
                  <input
                    className="search-input"
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                  />
                  <button
                    type="button"
                    className="search-btn"
                    testid="searchButton"
                    onClick={this.onClickSearchBtn}
                  >
                    <BsSearch className="search-icon" />
                  </button>
                </div>
              </div>
              <ul className="books-list-container">{this.renderBody()}</ul>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelves
