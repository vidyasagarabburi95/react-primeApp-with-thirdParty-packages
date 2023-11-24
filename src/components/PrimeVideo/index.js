import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = () =>
    moviesList.filter(each => each.categoryId === actionMovie)
  const comedyMoviesList = () =>
    moviesList.filter(each => each.categoryId === comedyMovie)

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />

      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovieList()} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList()} />
      </div>
    </div>
  )
}

export default PrimeVideo
