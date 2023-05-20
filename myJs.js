
const items = [
    {title: 'Margarita', selected: false},
    {title: 'Peperoni', selected: false},
    {title: 'Cheese', selected: false},


]


const addPizza = (newPizzaName) => {
    items.push({title: newPizzaName, selected: false })
    console.log(items);
};
addPizza('Ham')

const editPizza = (pizzaIndex, newPizzaName) => {
    items[pizzaIndex].title = newPizzaName;
    console.log(items);
}
editPizza(0, 'blank')


const removePizza = (pizzaIndex) => {
    items.splice(pizzaIndex, 1);
    console.log(items);
}

console.log(items);