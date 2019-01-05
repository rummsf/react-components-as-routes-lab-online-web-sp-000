import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page </h1>
      {movies.map(movie => (
        <div>
          <h3>
            {movie.title} <br />
            Length: {movie.time}
          </h3>
          <ul>
            {movie.genres.map(genre => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;

// make a new < div > for each movie.The < div > should contain the movie's title,
// time and an <ul> for each genre
