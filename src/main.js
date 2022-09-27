import "./style.css";

// COOKIES

const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieBoks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
  cookieBoks.classList.add("hidden");
  sessionStorage.setItem("fjerncookieboks", true);
}

if (sessionStorage.getItem("fjerncookieboks")) {
  cookieBoks.classList.add("hidden");
}
