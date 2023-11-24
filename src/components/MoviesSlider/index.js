import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <Slider {...settings}>
      {moviesList.map(each => (
        <MovieItem key={each.id} movieDetails={each} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
