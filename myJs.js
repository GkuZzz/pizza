let items = [
    {title: 'Margarita', selected: true, id: 111},
    {title: 'Peperoni', selected: false, id: 222},
    {title: 'Cheese', selected: true, id: 333},
]

const addPizza = (newPizzaName) => {
    
    const item = {
        title: newPizzaName,
        selected: false,
        id: Date.now()
    }

    items.push(item);

    displayItems();
};

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


const displayItems = () => {
    items.forEach(item => {
        console.log(item)
    });
};













