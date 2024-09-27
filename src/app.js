/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let doc = document.getElementById("excuse");

  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class.",
    "when I was sleeping.",
    "while I was exercising.",
    "during my lunch.",
    "while I was praying."
  ];
  let text =
    get_random(who) + get_random(action) + get_random(what) + get_random(when);
  doc.innerHTML = text;
};

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}
