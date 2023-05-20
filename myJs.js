
const items = [
    {title: 'Margarita', selected: false},
    {title: 'Peperoni', selected: false},
    {title: 'Cheese', selected: false},


]

const addPizza = (newPizzaName) => {
    items.push({title: newPizzaName, selected: false })
};

const editPizza = (pizzaIndex, newPizzaName) => {
    items[pizzaIndex].title = newPizzaName;
}

const removePizza = (pizzaIndex) => {
    items.splice(pizzaIndex, 1);
}


const markAsSelected = (pizzaIndex) => {
    const pizzaItem = items[pizzaIndex];
    pizzaItem.selected = !pizzaItem.selected;

    // if (pizzaItem.selected) {
    //     pizzaItem.selected = false;
    // } else {
    //     pizzaItem.selected = true
    // }

    // pizzaItem.selected === true ? pizzaItem.selected = false : pizzaItem.selected = true;
    
} 

console.log(items);