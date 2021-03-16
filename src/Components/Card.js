import React from "react";

const Card = (props) => {
  const { data, index } = props;

  return (
    <div className="Card">
      <h1 className="Card-Number">
        {data[index].id}/{data.length}
      </h1>

      <div className="Card-Name">
        <h1>
          {data[index].name.first} {data[index].name.last}
        </h1>
      </div>

      <div className="Card-Info">
        <p>
          From: {data[index].city}, {data[index].country}
        </p>
        <p>Job Title: {data[index].title}</p>
        <p>Employer: {data[index].employer}</p>
        <h3 id="fav-movies">Favorites Movies: </h3>
        <ol id="movie-list">
          {data[index].favoriteMovies.map((movie) => (
            <li>{movie}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Card;
