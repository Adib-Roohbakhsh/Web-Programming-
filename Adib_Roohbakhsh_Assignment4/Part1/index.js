let movies = [
  { title: "Inception", year: 2010, rank: 406 },
  { title: "Red", year: 2010, rank: 562 },
  { title: "Takers", year: 2010, rank: 406 },
  { title: "Interstellar", year: 2014, rank: 261 },
  { title: "Divergent", year: 2014, rank: 568 },
  { title: "Non-stop", year: 2014, rank: 1052 },
  { title: "The Best of Me", year: 2014, rank: 1261 },
  { title: "Dark", year: 2019, rank: 327 },
];
const rateContainer = document.getElementById("rank-filter");
const yearContainer = document.getElementById("year-filter");

function updateMovieList() {
  const moviesContainer = document.querySelector(".movies");
  moviesContainer.innerHTML = "";

  const tempMovies = sortMoviesByYear(movies);
  console.log(movies);
  console.log(tempMovies);
  sortMoviesByRank(tempMovies);

  tempMovies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
                <h2>${movie.title}</h2>
                <p>Year: ${movie.year}</p>
                <p>Rank: #${movie.rank}</p>
            `;
    moviesContainer.appendChild(movieCard);
  });
}

function addMovie(title, year, rank) {
  movies.push({ title, year, rank });
  updateMovieList();
}

const addMovieButton = document.getElementById("add-movie-btn");
addMovieButton.addEventListener("click", function () {
  const titleInput = document.getElementById("title-input").value;
  const yearInput = parseInt(document.getElementById("year-input").value);
  const rankInput = parseInt(document.getElementById("rank-input").value);
  if (titleInput && yearInput && rankInput) {
    addMovie(titleInput, yearInput, rankInput);
  } else {
    alert("Please fill in the blanks");
  }
});

rateContainer.addEventListener("change", updateMovieList);
function sortMoviesByRank(tmovies) {
  if (
    rateContainer.options[rateContainer.selectedIndex].value === "ascending"
  ) {
    tmovies.sort((a, b) => a.rank - b.rank);
  } else if (
    rateContainer.options[rateContainer.selectedIndex].value === "descending"
  ) {
    tmovies.sort((a, b) => b.rank - a.rank);
  }
}

function updateYearList() {
  const movieYears = [];
  yearContainer.innerHTML = `<option value="all-years">All Years</option>`;
  movies.forEach((element) => {
    if (!movieYears.includes(element.year)) {
      movieYears.push(element.year);
      yearContainer.innerHTML += `<option value="${element.year}">${element.year}</option>`;
    }
  });
}

updateYearList();
updateMovieList();

yearContainer.addEventListener("change", updateMovieList);
function sortMoviesByYear(year) {
  const selectedIndex = yearContainer.selectedIndex;
  const selectedValue = yearContainer.options[selectedIndex].value;
  if (selectedValue == "all-years") {
    return [...year];
  } else {
    return year.filter((element) => element.year == selectedValue);
  }
}
