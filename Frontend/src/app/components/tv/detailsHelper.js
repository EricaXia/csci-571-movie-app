export function convertToHours(n) {
  let total_min = n;
  let hrs = total_min / 60;
  let f_hrs = Math.floor(hrs);
  let mins = (hrs - f_hrs) * 60;
  let r_mins = Math.round(mins);
  return f_hrs + "hrs " + r_mins + "mins";
}
