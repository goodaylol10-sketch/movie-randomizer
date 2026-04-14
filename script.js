const API_KEY = "7c79519";

async function getMovie() {
  const genre = document.getElementById("genre").value;

  try {
    // берём список фильмов по слову
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${genre}`);
    const data = await response.json();

    if (!data.Search) {
      document.getElementById("movie").innerHTML = "❌ Nothing found";
      return;
    }

    // случайный фильм
    const randomMovie = data.Search[Math.floor(Math.random() * data.Search.length)];

    // детали фильма
    const details = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${randomMovie.imdbID}`);
    const movie = await details.json();

    document.getElementById("movie").innerHTML = `
      <h2>${movie.Title}</h2>
      <img src="${movie.Poster}" width="250"/>
      <p>${movie.Plot}</p>
      <p>⭐ Rating: ${movie.imdbRating}</p>
      <p>🎭 ${movie.Genre}</p>
    `;

  } catch (error) {
    document.getElementById("movie").innerHTML = "⚠️ Error loading movie";
  }
}
