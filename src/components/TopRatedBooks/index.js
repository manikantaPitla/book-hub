import Slider from 'react-slick'
import './index.css'
import {Link} from 'react-router-dom'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const TopRatedBooks = props => {
  const {topRatedBooksData} = props

  return (
    <Slider {...settings}>
      {topRatedBooksData.map(each => {
        const {id, title, authorName, coverPic} = each

        return (
          <li className="slick-item" key={id}>
            <Link to={`/books/${id}`}>
              <div className="top-rated-book-item">
                <img
                  className="top-rated-book-cover-pic"
                  src={coverPic}
                  alt={title}
                />
                <h1 className="top-rated-book-title">{title}</h1>
                <p className="top-rated-book-author-name">{authorName}</p>
              </div>
            </Link>
          </li>
        )
      })}
    </Slider>
  )
}

export default TopRatedBooks
