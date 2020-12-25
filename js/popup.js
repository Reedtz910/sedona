var button = document.querySelector(".hotel-search-btn")
var popup = document.querySelector(".modal-popup")

button.addEventListener("click", function(evt) {
    popup.classList.toggle("modal-popup-show")
})
    