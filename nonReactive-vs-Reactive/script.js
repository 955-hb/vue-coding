//Hello Hannes

const form = document.querySelector("#add-fruit-form");
const fruitListItem = document.querySelector("#fruit-list");

/** state */
let fruits = ["Ananas", "Melon"];

/** add a fruit to the fruits array */
function addFruit(fruitName) {
  fruits = [...fruits, fruitName];

  renderList();
}

/** render fruit list */
function renderList() {
  let listItemsHtml = "";

  fruits.forEach((fruit) => {
    listItemsHtml += `<li>${fruit}</li>`;
  });

  fruitListItem.innerHTML = listItemsHtml;
}

/** render list on page load */
renderList();

/** add new entries when submiting the form */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  addFruit(formProps.fruit_name);
  event.target.reset();
});
