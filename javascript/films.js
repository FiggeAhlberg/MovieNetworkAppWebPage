class Movie {
  constructor(id, poster_path, title, overview) {
    this.id = id;
    this.poster_path = poster_path;
    this.title = title;
    this.overview = overview;
  }
}

const movies = [];
const imgUrl = "https://api.themoviedb.org/3/movie/";

async function getMovies() {
  const api_key = "936fc4084d3ed69d2ed54442b8abc7b7";
  const movieUrl = `
  https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;

  const response = await fetch(movieUrl);

  const results = await response.json();

  console.log(results);

  for (const movie of results["results"]) {
    const m = new Movie(
      movie["Id"],
      movie["poster_path"],
      movie["title"],
      movie["overview"]
    );
    movies.push(m);
  }

  preloadImages;
  displayMovies();
}

getMovies();

const allMovies = document.querySelector("#all-movies");

function preloadImages() {
  movies.forEach((movie) => {
    const img = new Image();
    img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  });
}

function displayMovies() {
  for (const movie of movies) {
    const { id, poster_path, title, overview } = movie;
    const movieDiv = document.createElement("div");
    const movieImg = document.createElement("img");

    movieImg.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    movieImg.alt = "high-rated-movie-img";

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

    movieDiv.addEventListener("click", () => {
      console.log("Image clicked!");

      const modal = createModal(poster_path, title, overview);

      document.body.appendChild(modal);

      modal.style.display = "block";
    });
  }
}

function createModal(poster_path, title, overview) {
  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-dark">
        <div class="modal-header border-0">
        <h3 class="modal-title text-white">${title}</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body d-flex">
                
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="featured-movie-image" class="img-fluid rounded me-3">
          <div>
          <h4 class="text-white">Plot</h4>
          <p class="text-white-50">${overview}</p>
          <button class="btn btn-primary add-btn">Add to Watchlist</button>
          </div>
          
        </div>
          
        </div>
      </div>
    </div>
  `;

  modal.querySelector(".btn-close").addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      modal.style.display = "none";
    }
  });

  modal.querySelector(".add-btn").addEventListener("click", () => {
    addMovieToList(poster_path); // Add poster_path to the list
    displayAddedMovies(); // Display added movies
  });

  document.body.appendChild(modal);

  var myModal = new bootstrap.Modal(modal, {
    backdrop: true,
    focus: true,
  });
  myModal.show();

  return modal;
}

const movieList = [];

function addMovieToList(poster_path) {
  movieList.push(poster_path);
}

function displayAddedMovies() {
  const movieListContainer = document.querySelector("#movie-list");
  movieListContainer.innerHTML = "";

  movieList.forEach((poster_path) => {
    const movieDiv = document.createElement("div");
    const movieImg = document.createElement("img");
    const buttonContainer = document.createElement("div");
    const removeBtn = document.createElement("button");

    movieImg.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    removeBtn.innerText = "Remove";
    removeBtn.classList.add(
      "btn",
      "btn-danger",
      "btn-sm",
      "remove-btn",
      "position-absolute",
      "mt-2"
    );
    removeBtn.addEventListener("click", () => {
      removeMovieFromList(poster_path);
      displayAddedMovies();
    });

    buttonContainer.appendChild(removeBtn);
    movieDiv.appendChild(movieImg);
    movieDiv.appendChild(buttonContainer);
    movieListContainer.appendChild(movieDiv);

    movieDiv.classList.add(
      "col-1",
      "border",
      "rounded",
      "p-0",
      "me-2",
      "ms-2",
      "m-3",
      "m-5"
    );
    movieImg.classList.add("img-fluid", "rounded");
    buttonContainer.classList.add("d-flex", "justify-content-center");
  });
}

function removeMovieFromList(poster_path) {
  const index = movieList.indexOf(poster_path);
  if (index !== -1) {
    movieList.splice(index, 1);
  }
}
