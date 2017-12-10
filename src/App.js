import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> redner() -> componentDidMount()
  // update componentWillReceiveProps() -> sholdComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
          },
          {
            title: "Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
          },
          {
            title: "Star Wars",
            poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/220px-Star_Wars_Logo.svg.png"
          },
          {
            title: "Trainspotting",
            poster: "https://upload.wikimedia.org/wikipedia/en/7/71/Trainspotting_ver2.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })

    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
