"use strict";

// Change of turns

document.addEventListener('click', function () {
  var h1 = document.querySelector('h1');
  if (h1.className == "white") {
    h1.innerText = "Black's turn";
    h1.className = "black";
  } else {
    h1.innerText = "White's turn";
    h1.className = "white";
  }
});