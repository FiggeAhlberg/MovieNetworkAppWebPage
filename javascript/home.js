function displayImages() {
  const featuredMovies = document.querySelector("#featured-container");
  const imagesUrls = [
    
    "../images/leon-the-professional.webp",
    "../images/requiem.webp",
    "../images/perfect_blue.webp",
    "../images/eternal_sunshine.webp",
    "../images/pulp_fiction.webp",
    "../images/ems.webp",
    "../images/parasite_movie_cover.webp",
    "../images/good_bad_ugly.webp"
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
