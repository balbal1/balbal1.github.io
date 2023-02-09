
let home = document.getElementById('home');
let guest = document.getElementById('guest');

let add1Home = function() {
    home.innerHTML = parseInt(home.innerHTML) + 1;
}
let add2Home = function() {
    home.innerHTML = parseInt(home.innerHTML) + 2;
}
let add3Home = function() {
    home.innerHTML = parseInt(home.innerHTML) + 3;
}
let add1Guest = function() {
    guest.innerHTML = parseInt(guest.innerHTML) + 1;
}
let add2Guest = function() {
    guest.innerHTML = parseInt(guest.innerHTML) + 2;
}
let add3Guest = function() {
    guest.innerHTML = parseInt(guest.innerHTML) + 3;
}

let reset = function() {
    home.innerHTML = 0;
    guest.innerHTML = 0;
}