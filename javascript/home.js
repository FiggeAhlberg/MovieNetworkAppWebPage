function displayImages() {
  const featuredMovies = document.querySelector("#featured-container");
  const movieData = [
    {
      imageUrl: "../images/leon-the-professional.webp",
      title: "Leon the Professional",
      description:
        "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
    },
    {
      imageUrl: "../images/requiem.webp",
      title: "Requiem for a Dream",
      description:
        "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    },
    {
      imageUrl: "/images/perfect_blue.webp",
      title: "Perfect Blue",
      description:
        "A pop singer gives up her career to become an actress, but she slowly goes insane when she starts being stalked by an obsessed fan and what seems to be a ghost of her past.",
    },
    {
      imageUrl: "../images/eternal_sunshine.webp",
      title: "Eternal Sunshine of the Spotless Mind",
      description:
        "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories for ever.",
    },
    {
      imageUrl: "../images/pulp_fiction.webp",
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    },
    {
      imageUrl: "../images/ems.webp",
      title: "Oldboy",
      description:
        "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    },
    {
      imageUrl: "../images/parasite_movie_cover.webp",
      title: "Parasite",
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    },
    {
      imageUrl: "../images/good_bad_ugly.webp",
      title: "The Good, the Bad and the Ugly",
      description:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    },
  ];
  for (const movie of movieData) {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");

    img.src = movie.imageUrl;
    img.alt = "featured-movie-image";

    img.width = 300;
    img.height = 450;

    imgDiv.appendChild(img);
    featuredMovies.appendChild(imgDiv);

    imgDiv.classList.add("col", "border", "rounded", "p-0", "me-2", "ms-2");
    img.classList.add("img-fluid", "rounded");

    imgDiv.addEventListener("mouseover", () => {
      imgDiv.classList.add("border-danger");
    });

    imgDiv.addEventListener("mouseout", () => {
      imgDiv.classList.remove("border-danger");
    });

    imgDiv.addEventListener("click", () => {
      console.log("Image clicked!");

      const modal = createModal(movie.imageUrl, movie.title, movie.description);

      document.body.appendChild(modal);

      modal.style.display = "block";
    });
  }
}

displayImages();

function createModal(imageUrl, title, description) {
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
                
          <img src="${imageUrl}" alt="featured-movie-image" class="img-fluid rounded me-3">
          <div>
          <h4 class="text-white">Plot</h4>
          <p class="text-white-50">${description}</p>
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

  document.body.appendChild(modal);

  var myModal = new bootstrap.Modal(modal, {
    backdrop: true,
    focus: true,
  });
  myModal.show();

  return modal;
}
