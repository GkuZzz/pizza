let items = [];

const list = document.querySelector('.list');
const addPizzaForm = document.querySelector('.add-pizza-form');

function handleSubmit(e) {
    e.preventDefault();
    const title = e.currentTarget.title.value;
    const price = e.currentTarget.price.value;
    const image = e.currentTarget.image.value;
    const description = e.currentTarget.description.value

    if (!title || !price || !image || !description) {
        return
    };

    const item = {
        title,
        price,
        image,
        description,
        selected: false,
        id: Date.now()
    };
    
    items.push(item);
    e.currentTarget.reset();
    displayItems();
};

const displayItems = () => {
    const html = items.map(item => {
        return (
            `
                <li class="pizza-item">
                    <button class="delete">&times;</button>
                    <div class="pizza-item-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="pizza-items-details">
                        <div class="pizza-items-details-top">
                            <div class="itemHeader">
                                <input type="checkbox">
                                <span class ="itemName">${item.title}</span>
                            </div>
                            <span class="itemPrice">${item.price}</span>
                        </div>
                        <span class="pizza-items-details-bottom">${item.description}</span>
                    </div>
                </li>
            `
        )
    }).join('');
    list.innerHTML = html;
};


addPizzaForm.addEventListener('submit', handleSubmit);


const editPizza = (pizzaId, newPizzaName) => {

    const itemIndex = items.findIndex(res => res.id === pizzaId);
    items[itemIndex].title = newPizzaName;

    displayItems();

    // items[pizzaIndex].title = newPizzaName;
}

const removePizza = (id) => {
    items = items.filter(res => res.id !== id); 
    
    displayItems();


    // items.splice(pizzaIndex, 1);
}


const markAsSelected = (id) => {

    const itemIndex = items.findIndex(res => res.id === id);
    const pizzaItem = items[itemIndex];
    pizzaItem.selected = !pizzaItem.selected;
    
    displayItems()


    // if (pizzaItem.selected) {
    //     pizzaItem.selected = false;
    // } else {
    //     pizzaItem.selected = true
    // }

    // pizzaItem.selected === true ? pizzaItem.selected = false : pizzaItem.selected = true;
} 


const selectPizzas = () => {
    let checkedPizza = 0;
    let itemsChecked = [];

    items.forEach(pizza => {
        if (pizza.selected === true) {
            checkedPizza += 1
        };
    });

    if (checkedPizza === items.length) {
        itemsChecked = items.map(pizza => {
            return {
                ...pizza, 
                selected: false
            }
        });
    } else {
        itemsChecked = items.map(pizza => {
            return {
                ...pizza, 
                selected: true
            }
        });
    }

    items = itemsChecked;

    displayItems();
};
















