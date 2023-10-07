import Slider from 'react-slick'
import './index.css'
import {Link} from 'react-router-dom'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
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
      {topRatedBooksData.map(each => (
        <div className="slick-item" key={each.id}>
          <Link to={`/books/${each.id}`}>
            <div className="top-rated-book-item" key={each.id}>
              <img
                className="top-rated-book-cover-pic"
                src={each.coverPic}
                alt={each.title}
              />
              <h1 className="top-rated-book-author-name">{each.authorName}</h1>
              <p className="top-rated-book-title">{each.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  )
}

export default TopRatedBooks
