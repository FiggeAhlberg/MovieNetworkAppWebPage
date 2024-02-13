class Movie {
  constructor(id, poster_path) {
    this.id = id;
    this.poster_path = poster_path;
  }
}

const movies = [];
const imgUrl = "https://api.themoviedb.org/3/movie/";

async function getMovies() {
  const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

  const response = await fetch(movieUrl);

  const results = await response.json();

  console.log(results);

  for (const movie of results["results"]) {
    const m = new Movie(movie["Id"], movie["poster_path"]);
    movies.push(m);
  }

  displayMovies();
}

getMovies();

const allMovies = document.querySelector("#all-movies");

function displayMovies() {
  for (const movie of movies) {
    const { id, poster_path } = movie;
    const movieDiv = document.createElement("div");
    const movieImg = document.createElement("img");

    movieImg.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    movieDiv.appendChild(movieImg);
    allMovies.appendChild(movieDiv);

    movieDiv.classList.add(
      "col-1",
      "border",
      "rounded",
      "p-0",
      "me-2",
      "ms-2",
      "m-3"
    );
    movieImg.classList.add("img-fluid", "rounded");

    movieDiv.addEventListener("mouseover", () => {
      movieDiv.classList.add("border-danger");
    });

    movieDiv.addEventListener("mouseout", () => {
      movieDiv.classList.remove("border-danger");
    });
  }
}
