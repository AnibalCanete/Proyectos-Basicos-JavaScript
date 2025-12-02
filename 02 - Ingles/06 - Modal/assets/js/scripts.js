
/**
 * Select modal-btn, modal-overlay. close-btn
 * We Listen For Click Events on modal-btn and close-btn
 * When The User clicks on modal-btn, it adds .open-modal to modal-overlay
 * When The User clicks on close-btn, it removes .open-modal from modal-overlay
*/

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
});
