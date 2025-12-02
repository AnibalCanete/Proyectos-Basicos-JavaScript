
import get from "./getElement.js";
import getUser from "./fetchUser.js";
import displayUser from "./displayUser.js";

const btn = get(".btn");

const showUser = async () => {
   // Get User From API
   const person = await getUser();
   displayUser(person);

};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
