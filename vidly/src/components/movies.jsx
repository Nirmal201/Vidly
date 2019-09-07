import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../common/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
      return (
        <p
          className="badge badge-dark"
          style={{ fontSize: "20px", color: "darkorange" }}
        >
          There are no movies in the Database
        </p>
      );
    return (
      <React.Fragment>
        <p
          className="badge badge-secondary"
          style={{ color: "white", fontSize: "20px" }}
        >
          There are <span className="badge badge-dark badge-pill">{count}</span>{" "}
          Movies in database.
        </p>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLike={() => this.handleLike(movie)}
                  ></Like>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
