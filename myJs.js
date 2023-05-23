let items = [
    {title: 'Margarita', selected: false, id: 111},
    {title: 'Peperoni', selected: false, id: 222},
    {title: 'Cheese', selected: false, id: 333},
]

const addPizza = (newPizzaName) => {
    
    const item = {
        title: newPizzaName,
        selected: false,
        id: Date.now()
    }

    items.push(item)
};

const editPizza = (pizzaId, newPizzaName) => {

    const itemIndex = items.findIndex(res => res.id === pizzaId);
    items[itemIndex].title = newPizzaName;


    // items[pizzaIndex].title = newPizzaName;
}

const removePizza = (id) => {
    items = items.filter(res => res.id !== id); 
    console.log(items)



    // items.splice(pizzaIndex, 1);
}


const markAsSelected = (id) => {

    const itemIndex = items.findIndex(res => res.id === id);
    const pizzaItem = items[itemIndex];
    pizzaItem.selected = !pizzaItem.selected;
    console.log(items)
    // if (pizzaItem.selected) {
    //     pizzaItem.selected = false;
    // } else {
    //     pizzaItem.selected = true
    // }

    // pizzaItem.selected === true ? pizzaItem.selected = false : pizzaItem.selected = true;
    
} 

