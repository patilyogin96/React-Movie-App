import React, { Component } from "react";
import { addFavourite , remFavourite } from "./actions";

export class MovieCard extends Component {
  handleFavClick = () => {
    const { movie } = this.props;

    console.log("Props", this.props);
    this.props.dispatch(addFavourite(movie));
  };

  handleUnFavClick = () =>{
    const {movie} =  this.props;

    this.props.dispatch(remFavourite(movie))
  }

  render() {
    
    const { movie, isMovieFav } = this.props;
    // console.log("movie",movie);

    // console.log(movie);
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isMovieFav ? (
              <button className="unfavourite-btn" onClick={this.handleUnFavClick}>
                Unfavourite
              </button>
            ) : (
              <button className="favourite-btn" onClick={this.handleFavClick}>
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
