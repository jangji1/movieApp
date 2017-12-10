import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// return 만 필요한 컴포넌트의 경우 class 컴포넌트 대신 functional 컴포넌트를 사용
// functional 컴포넌트는 state, render, life cycle이 없음
function Movie({title, poster}) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  )
}

function MoviePoster({poster}) {
  return (
    <img src={poster} alt="Movie Poster" />
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie