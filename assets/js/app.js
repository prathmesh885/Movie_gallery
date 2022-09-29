// *********************Dom-Selectot**********************//

const addMovieBtn = document.getElementById("addMovie");
const backDropDiv = document.getElementById("backDrop");
const myModalDiv = document.getElementById("myModal");
const title = document.getElementById("title");
const imgUrl = document.getElementById("imgUrl");
const rating = document.getElementById("rating");
const movieInfo = document.getElementById("movieInfo");
const myClose = Array.from(document.querySelectorAll(".myClose"));
const movieForm = document.getElementById("movieForm");

// **********************call Back**********************//

const movieArray = [];

const addMovie = (event) => {
  console.log("clicked");
  backDropDiv.classList.remove("d-none");
  myModalDiv.classList.remove("d-none");
};

// const hideModal = function (ele) {
//   ele.forEach(function (ele) {
//     ele.classList.add("d-none");
//   });
// };

const closeDiv = function (e) {
  backDropDiv.classList.add("d-none");
  myModalDiv.classList.add("d-none");
};

const onMovieHandler = function (e) {
  e.preventDefault();
  let obj = {
    title: title.value,
    imgUrl: imgUrl.value,
    rating: rating.value,
  };
  movieArray.push(obj);
  templating(movieArray);
  console.log(obj);
  // console.log(this.target);
  console.log(this);
  // e.this.reset();
  this.reset();
  closeDiv();
};

// **********************Event Binding*******************//

addMovieBtn.addEventListener("click", addMovie);
movieForm.addEventListener("submit", onMovieHandler);
myClose.forEach(function (ele) {
  ele.addEventListener("click", closeDiv);
  // console.log(ele);
});

backDropDiv.addEventListener("click", closeDiv);

function templating(arr) {
  let result = "";
  arr.forEach(function (ele) {
    result += `
<div class="col-md-4">
<div class="card">
  <div class="card-body">
    <figure>
      <h3>Movie Name: ${ele.title}</h3>
      <img src="${ele.imgUrl}" alt="">
      <figcaption>
        <p>Rating :
          ${ele.rating}/5
        </p>
      </figcaption>
    </figure>
  </div>
</div>
        </div>
`;
    movieInfo.innerHTML = result;
  });
}
