let items = [];

const list = document.querySelector(".list");
const addPizzaForm = document.querySelector(".add-pizza-form");
const buttonCheck = document.querySelector(".check-all-pizzas");


function handleSubmit(e) {
  e.preventDefault();
  const title = e.currentTarget.title.value;
  const price = e.currentTarget.price.value;
  const image = e.currentTarget.image.value;
  const description = e.currentTarget.description.value;

  if (!title || !price || !image || !description) {
    return;
  }

  const item = {
    title,
    price,
    image,
    description,
    selected: false,
    id: Date.now(),
  };

  items.push(item);
  e.currentTarget.reset();

  list.dispatchEvent(new CustomEvent("itemsUpdated"));
};

const displayItems = () => {
  const html = items
    .map((item) => {
      return `
                <li class="pizza-item">
                    <button value="${item.id}"class="delete">&times;</button>
                    <div class="pizza-item-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="pizza-items-details">
                        <div class="pizza-items-details-top">
                            <div class="itemHeader">
                                <input 
                                    value="${item.id}" 
                                    type="checkbox"
                                    ${item.selected === true ? 'checked' : ''}>
                                <span class ="itemName">${item.title}</span>
                            </div>
                            <span class="itemPrice">${item.price}</span>
                        </div>
                        <span class="pizza-items-details-bottom">${item.description}</span>
                    </div>
                </li>
            `;
    })
    .join("");

  list.innerHTML = html;
};

const editPizza = (pizzaId, newPizzaName) => {
  const itemIndex = items.findIndex((res) => res.id === pizzaId);
  items[itemIndex].title = newPizzaName;

  list.dispatchEvent(new CustomEvent("itemsUpdated"));

  // items[pizzaIndex].title = newPizzaName;
};

const removePizza = (id) => {
  items = items.filter((res) => res.id !== id);

  list.dispatchEvent(new CustomEvent("itemsUpdated"));

  // items.splice(pizzaIndex, 1);
};

const markAsSelected = (id) => {
  const itemIndex = items.findIndex((res) => res.id === id);
  const pizzaItem = items[itemIndex];
  pizzaItem.selected = !pizzaItem.selected;

  list.dispatchEvent(new CustomEvent("itemsUpdated"));

  // if (pizzaItem.selected) {
  //     pizzaItem.selected = false;
  // } else {
  //     pizzaItem.selected = true
  // }

  // pizzaItem.selected === true ? pizzaItem.selected = false : pizzaItem.selected = true;
};


function saveToLocalStorage() {
//   console.log("LS save");
  localStorage.setItem("items", JSON.stringify(items));
};

function getFromLocalStorage() {
  const localStorageItems = JSON.parse(localStorage.getItem("items"));

  if (localStorageItems && localStorageItems.length) {
    items.push(...localStorageItems);
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
  }
};

addPizzaForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", saveToLocalStorage);
// Делегирование событий. Слушаем событие на родительском UL 
// Делегируем событие элементу button
list.addEventListener('click', function(e) {
    const id = parseInt(e.target.value);
    if (e.target.matches('button')) {
        removePizza(id);
    };

    if (e.target.matches('input[type="checkbox"]')) {
        markAsSelected(id)
        console.log('checkedPizza')
    }
});


getFromLocalStorage();

buttonCheck.addEventListener('click', function(){
    let checkedPizza = 0;
  let itemsChecked = [];

  items.forEach((pizza) => {
    if (pizza.selected === true) {
      checkedPizza += 1;
    }
  });

  if (checkedPizza === items.length) {
    itemsChecked = items.map((pizza) => {
      return {
        ...pizza,
        selected: false,
      };
    });
  } else {
    itemsChecked = items.map((pizza) => {
      return {
        ...pizza,
        selected: true,
      };
    });
  }

  items = itemsChecked;

  list.dispatchEvent(new CustomEvent("itemsUpdated"));
})


