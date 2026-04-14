const API_KEY = "ТВОЙ_КЛЮЧ";

async function getMovie() {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=Inception`);
    const movie = await response.json();

    if (movie.Response === "False") {
      document.getElementById("movie").innerHTML = "Ошибка: " + movie.Error;
      return;
    }

    document.getElementById("movie").innerHTML = `
      <h2>${movie.Title}</h2>
      <img src="${movie.Poster}" width="200"/>
      <p>${movie.Plot}</p>
      <p>⭐ ${movie.imdbRating}</p>
      <p>🎭 ${movie.Genre}</p>
    `;
  } catch (error) {
    document.getElementById("movie").innerHTML = "Ошибка загрузки";
  }
}
