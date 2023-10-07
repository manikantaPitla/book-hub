import './index.css'
import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'

const BookItem = props => {
  const {booksList} = props
  const {id, title, authorName, rating, readStatus, coverPic} = booksList

  return (
    <li className="book-item">
      <Link to={`/books/${id}`} className="book-item-wrapper">
        <img className="book-image" src={coverPic} alt={title} />
        <div className="book-item-content">
          <h1 className="book-item-title">{title}</h1>
          <p className="book-item-author-name">{authorName}</p>
          <p className="book-item-rating">
            Avg Rating
            <AiFillStar className="star book-item-star" />
            {rating}
          </p>
          <p className="book-item-reading-status">
            Status :{' '}
            <span className="book-item-reading-status-active">
              {readStatus}
            </span>
          </p>
        </div>
      </Link>
    </li>
  )
}

export default BookItem
