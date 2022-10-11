let countHome = 0;
let countGuest = 0;

let scoreHome = document.getElementById("scoreHome");
let scoreGuest = document.getElementById("scoreGuest");
// Home score
// let plus1Home = document.getElementById("pluss1--home");
// let plus2Home = document.getElementById("pluss2--home");
// let plus3Home = document.getElementById("pluss3--home");
// // Guest Score
// let plus1Guest = document.getElementById("pluss1--guest");
// let plus2Guest = document.getElementById("pluss1--guest");
// let plus3Guest = document.getElementById("pluss1--guest");

// Home Funcs
function plus1Home() {
  countHome += 1;
  scoreHome.innerText = countHome;
}
function plus2Home() {
  countHome += 2;
  scoreHome.innerText = countHome;
}
function plus3Home() {
  countHome += 3;
  scoreHome.innerText = countHome;
}

// Guest Funcs
function plus1Guest() {
  countGuest += 1;
  scoreGuest.innerText = countGuest;
}
function plus2Guest() {
  countGuest += 2;
  scoreGuest.innerText = countGuest;
}
function plus3Guest() {
  countGuest += 3;
  scoreGuest.innerText = countGuest;
}
