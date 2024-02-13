function displayImages() {
  const featuredMovies = document.querySelector("#featured-container");
  const imagesUrls = [
    "https://images.justwatch.com/poster/108619261/s592/leon-the-professional",
    "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMmMzOWNhNTYtYmY0My00OGJiLWIzNDUtZWRhNGY0NWFjNzFmXkEyXkFqcGdeQXVyNjUxMDQ0MTg@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "https://resizing.flixster.com/A4O8aEoaCjZEfnOEFvH8nUmxTtI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZjMjAzODE0LWQ3YTItNDg0NC1iMTY5LTIzOGJmZDM0ZTZjOC5qcGc=",
    "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
  ];
  for (const image of imagesUrls) {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    const infoBox = document.createElement("div");

    img.src = image;

    imgDiv.appendChild(img);
    imgDiv.appendChild(infoBox);
    featuredMovies.appendChild(imgDiv);

    imgDiv.classList.add("col", "border", "rounded", "p-0", "me-2", "ms-2");
    img.classList.add("img-fluid", "rounded");
    infoBox.classList.add("info-box");

    imgDiv.addEventListener("mouseover", () => {
      imgDiv.classList.add("border-danger");
      infoBox.style.display = "block";
    });

    imgDiv.addEventListener("mouseout", () => {
      imgDiv.classList.remove("border-danger");
      infoBox.style.display = "none";
    });
  }
}

displayImages();
