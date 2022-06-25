//var XMLHttpRequest = require('xhr2');
export function get(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

export function main() {
  let data = get(
    "https://api.themoviedb.org/3/movie/popular?api_key=efc27e063cff19aefee686a5f6062149"
  );
  data = JSON.parse(data);
  return data;
  //console.log(data['results'][0]["title"])
}

export function seach(movie) {
  let requestmovie = get(
    "https://api.themoviedb.org/3/search/movie?api_key=efc27e063cff19aefee686a5f6062149&language=en-US&query="+movie+"&page=1&include_adult=false"
  );
  movie = JSON.parse(requestmovie);
  return movie;
}


