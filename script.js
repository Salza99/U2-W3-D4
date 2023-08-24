const URL = "https://api.pexels.com/v1/search?query=";
const query = URL + "fiori";
const secondaryQuery = URL + "casa";
let isSearch = false;
let selectedQuery = 0;

const loadImage = async (event) => {
  console.log(event);

  if (isSearch) {
    isSearch = false;
  } else {
    if (event.target.innerText === "Load Images") {
      selectedQuery = query;
    } else {
      selectedQuery = secondaryQuery;
    }
  }
  try {
    const photos = await fetch(selectedQuery, {
      headers: {
        Authorization: "1Y0icWE8UpRxmg3PvJAfyt3krxFaUOf1I9l4QYKwr18CaCGnRhbPmCLU",
        "Content-Type": "application/json",
      },
    });
    const resp = await photos.json();
    console.log(resp.photos);
    const row = document.getElementById("riga");
    row.innerHTML = "";
    let cardId = 0;
    resp.photos.forEach((photo) => {
      cardId++;
      row.innerHTML += `<div class="col-md-4">
              <div id="card${cardId}" class="card mb-4 shadow-sm">
              <img src="${photo.src.original}" alt="${photo.alt}">
                  
                
                <div  class="card-body">
                <a class="d-inline-block" href="details.html?image=${photo.src.original}"><h5 class="card-title">${photo.alt}</h5></a>
                  <p class="card-text">
                    ${photo.photographer}
                  </p>
                  <a href="${photo.photographer_url}">
                      <p class="card-text mb-3">
                        Check the author
                      </p>
                  </a>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button onclick= "hideCard( card${cardId})" type="button" class="btn btn-sm btn-outline-secondary">Hide</button>
                    </div>
                    <small class="text-muted">${photo.id}</small>
                  </div>
                </div>
              </div>
            </div>`;
    });
  } catch (error) {
    (err) => console.log(err);
  }
};

const hideCard = (id) => {
  id.className += " d-none";

  console.log(id);
};

const search = (event) => {
  let input = document.getElementsByTagName("input")[0].value;
  isSearch = true;
  selectedQuery = URL + input;
  loadImage(event);
};
