const searchBar = document.querySelector("#search-blog");
const inputBox = searchBar.querySelector("input");
const button = document.querySelector("#search-btn");

inputBox.addEventListener("keyup", FilterNames);
button.addEventListener("click", () => {
  location.reload();
});

function FilterNames() {
  let filterVal = inputBox.value.toUpperCase();
  let cards = document.querySelector(".card-container");
  let titles = cards.querySelectorAll(".card");
  for (let i = 0; i < titles.length; i++) {
    let title = titles[i].id;
    if (title.toUpperCase().indexOf(filterVal) > -1) {
      const card = document.getElementById(title);
      card.style.display = "";
    } else {
      const card = document.getElementById(title);
      card.style.display = "none";
    }
  }
}
