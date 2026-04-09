const API_KEY = "7c79519c";

async function getMovie() {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=movie`);
  const data = await response.json();

  if (!data.Search) {
    document.getElementById("movie").innerHTML = "Фильмы не найдены";
    return;
  }

  const random = data.Search[Math.floor(Math.random() * data.Search.length)];

  const detailsRes = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${random.imdbID}`);
  const movie = await detailsRes.json();

  document.getElementById("movie").innerHTML = `
    <h2>${movie.Title}</h2>
    <img src="${movie.Poster}" width="200"/>
    <p>${movie.Plot}</p>
    <p>⭐ ${movie.imdbRating}</p>
    <p>🎭 ${movie.Genre}</p>
  `;
}
