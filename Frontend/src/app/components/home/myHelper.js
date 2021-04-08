export function splitMovies(arr) {
  let res = [];
  while (arr.length > 0) {
    res.push(arr.splice(0, 6));
  }
  return res;
}
