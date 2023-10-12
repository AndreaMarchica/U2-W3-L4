// fetch(
//   "https://api.pexels.com/v1/search?query=9wOOJ7U1KDQicwSZB38vpmEexnzyOrcKfsfFelfzVoxC9MePUBH6yybU",
//   {
//     headers: {
//       authorization: "9wOOJ7U1KDQicwSZB38vpmEexnzyOrcKfsfFelfzVoxC9MePUBH6yybU",
//     },
//   }
// );

const getPhotos1 = function () {
  fetch("https://api.pexels.com/v1/search?query=[crocodiles]", {
    headers: {
      authorization: "9wOOJ7U1KDQicwSZB38vpmEexnzyOrcKfsfFelfzVoxC9MePUBH6yybU",
    },
  })
    .then((res) => {
      // metti qui lo spinner
      console.log("Response ottenuta dalla GET", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((gesù) => {
      console.log("PHOTOS", gesù);

      renderPhotos1(gesù.photos);
    })
    .catch((err) => {
      // metti qui lo spinner
      console.log("Si è verificato un errore:", err);
    });
};

// getPhotos1();

const getPhotos2 = function () {
  fetch("https://api.pexels.com/v1/search?query=[sharks]", {
    headers: {
      authorization: "9wOOJ7U1KDQicwSZB38vpmEexnzyOrcKfsfFelfzVoxC9MePUBH6yybU",
    },
  })
    .then((res) => {
      // metti qui lo spinner
      console.log("Response ottenuta dalla GET", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((photos) => {
      console.log("PHOTOS", photos);

      renderPhotos1(photos.photos);
    })
    .catch((err) => {
      // metti qui lo spinner
      console.log("Si è verificato un errore:", err);
    });
};

// getPhotos2();

const buttonPrimary = document.getElementById("button-1");
const buttonSecondary = document.getElementById("button-2");

const renderPhotos1 = function (photos) {
  const row = document.getElementById("rack");
  photos.forEach((photo) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-sm-6", "col-md-3");
    newCol.innerHTML = `<div class="card">
    <img src="${photo.src.large}" class="card-img-top" alt="${photo.alt}">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary hide" onclick='hideCard(e)'>Hide photo</a>
    </div>
  </div>`;
    row.appendChild(newCol);
  });
};

buttonPrimary.addEventListener("click", getPhotos1);
buttonSecondary.addEventListener("click", getPhotos2);
const hideButton = document.getElementsByClassName("hide");

const hideCard = function (e) {
  const card = e.target.closest(".card");
  if (card) {
    card.remove();
  }
};
